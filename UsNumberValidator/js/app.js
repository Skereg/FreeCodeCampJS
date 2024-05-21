const number = document.getElementById('user-input');
const text = document.getElementById('results-div');
const button = document.getElementById('check-btn');
const clear = document.getElementById('clear-btn');

button.addEventListener('click', check)
clear.addEventListener('click', reset)

function check() {
  let num = number.value
  if (num === '') {
    alert('Please provide a phone number')
    return false;
  }
  const countryCode = '^(1\\s?)?';
  const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
  const whiteSpace = '[\\s\\-]?';
  const phone = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
  const regex = new RegExp(
    `${countryCode}${areaCode}${whiteSpace}${phone}`
  );
  if(regex.test(num)){
    text.innerHTML += "Valid US number: " + number.value + '<br>';
    number.value = '';
  }
  else{
    text.innerHTML += "Invalid US number: " + number.value + '<br>';
    number.value = '';
  }
}
function reset(){
  text.innerText = '';
}
