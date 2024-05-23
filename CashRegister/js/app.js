let price = 1.87;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
];

const cash = document.getElementById('cash')
const button = document.getElementById('purchase-btn');
const changeDue = document.getElementById('change-due');
const cidText = document.getElementById('cid');
const priceText = document.getElementById('price');

priceText.innerText = "Total: $" + price;

button.addEventListener('click', change)

display();

function change(){
  let cashVal = Number(cash.value);

  if(cashVal < price){
    alert("Customer does not have enough money to purchase the item");
    cash.value = '';
    return;
  }
  if(cashVal === price){
    changeDue.innerText = "No change due - customer paid with exact cash";
    cash.value = '';
    return;
  }

  let revCid = [...cid].reverse();
  let cost = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
  let number = cashVal-price;
  let change = '';
  let cArr = [];

  for(let i = 0; i < cost.length; i++){
    let count = 0;
    if(number >= cost[i] && number > 0){
      let cidLeft = revCid[i][1];
      while(cidLeft > 0 && number >= cost[i]){
        number = parseFloat((number - cost[i]).toFixed(2));
        cidLeft -= cost[i];
        count++;
      }
      if(count > 0){
        change = '<p>' + revCid[i][0] + ': $' + cost[i]*count + '</p>' + change;
      }
    }
    cArr.push(count);
  }

  if(number > 0){
    changeDue.innerText = "Status: INSUFFICIENT_FUNDS";
    cash.value = 0;
    return;
  }
  let sum = 0;

  for(let i = 0; i < cost.length; i++){
      revCid[i][1] = parseFloat((revCid[i][1] - cArr[i] * cost[i]).toFixed(2));
      sum += revCid[i][1];
  }
  if(sum === 0){
    change = "<p>Status: CLOSED</p>" + change;
  }else{
    change = "<p>Status: OPEN</p>" + change;
  }
  changeDue.innerHTML = change;
  cash.value = '';

  display();
}

function display(){
  let cidContent = '';
  cid.forEach(item=>{
    cidContent += '<p>' + item[0] + ': ' + item[1] + '</p>';
  })
  cidText.innerHTML = cidContent;
}
