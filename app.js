let nums = document.querySelectorAll(".num");
let pc = document.querySelector(".prevcalc");
let result = document.querySelector(".result");
let ans = "";
nums.forEach((i) => {
  i.addEventListener("click", () => {
    let char = i.innerHTML;
    let lastChar = ans.toString().slice(-1);
    let isOperator = /[+\-*/.%]/.test(char);
    let isLastOperator = /[+\-*/.%]/.test(lastChar);
    if (Number(char) >= 0 && Number(char) <= 9) {
      ans += char;
    } else {
      if(isOperator && isLastOperator)
      {
        result.innerHTML = "Invalid input";
        return;
      }
      else{
        ans += char;
      }
    }
    pc.innerHTML=ans;
    try{
      result.innerHTML = eval(ans);
    }
    catch{
      result.innerHTML="";
    }
  });
});
document.querySelector(".equal").addEventListener("click", () => {
  display();
});
document.querySelector(".clear").addEventListener("click", () => {
  clear();
});
document.querySelector(".del").addEventListener("click", () => {
  del();
});
document.querySelector(".inv").addEventListener("click", () => {
  inv();
});

function display() {
  try {
    let res = eval(ans);
    pc.innerHTML = res;
    result.innerHTML = "";
    ans = res.toString();
  } catch {
    pc.innerHTML = "Syntax Error";
    result.innerHTML = "";
    ans = "";
  }
}

function clear() {
  pc.innerHTML = "";
  ans = "";
  result.innerHTML="";
}
function inv() {
  try{
    
    ans = (-eval(ans)).toString();
    result.innerHTML = ans;
    pc.innerHTML = ans;
  }
  catch{
    result.innerHTML = "Syntax Error";
  }
}
function del() {
  ans=ans.toString().slice(0,-1);
  pc.innerHTML = ans;
  try{

    result.innerHTML =eval(ans);
  }
  catch{
    result.innerHTML="";
  }
}