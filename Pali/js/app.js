const input = document.getElementById('text-input');
const button = document.getElementById('check-btn');
const result = document.getElementById('result');

button.onclick=assign;

function assign(){
  let val = input.value;
  if(val===""){
    alert("Please input a value");
  }else{
    check(val);
  }
}

function check(str){
  const regex = /[\s.,_\-\/\\():;]/g;
  let word = str.replace(regex, "").toLowerCase();
  let reword = word.split("").reverse().join("");
  if(word===reword){
    result.innerHTML = str.bold() + " is a palindrome";
  }
  else{
    result.innerHTML = str.bold() + " is not a palindrome";
  }
}
