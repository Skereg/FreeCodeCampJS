const number = document.getElementById('number');
const text = document.getElementById('output');
const button = document.getElementById('convert-btn');

button.onclick = function (){
  if (number.value === ''){
    text.innerText = "Please enter a valid number";
    return;
  }
  if (number.value < 1){
    text.innerText = "Please enter a number greater than or equal to 1";
    return;
  }
  if(number.value > 3999){
    text.innerText = "Please enter a number less than or equal to 3999";
    return;
  }
  let ones = ["","I","II","III","IV","V","VI","VII","VIII","IX"];
  let tens = ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
  let hrns = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
  let ths = ["","M","MM","MMM"];

  text.innerText = ths[Math.floor(number.value/1000)] + hrns[Math.floor((number.value%1000)/100)] + tens[Math.floor((number.value%100)/10)] + ones[Math.floor(number.value%10)];
}
