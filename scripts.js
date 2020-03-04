const decimal = document.getElementById("decimal");
const clear = document.getElementById('clear')
const displayElement = document.getElementById("displayNumbers");
const numberPress = document.getElementsByClassName("number");
const operatorPress = document.getElementsByClassName("operator");


var displayValue = "0";
var pendingValue;
var evalStringArray = [];


function updateDisplayValue(e){
  var displayText = e.target.innerText;
    if (displayValue === "0"){
      displayValue = "";
    }
  displayValue += displayText;
  displayElement.innerText = displayValue;
}


function performOperation(e){
  var operator = e.target.innerText;
  
  switch (operator){

    case '+':
      pendingValue = displayValue
      displayValue = '0';
      displayElement.innerText = displayValue;
      evalStringArray.push(pendingValue);
      evalStringArray.push('+');
      break;

    case '-':
      pendingValue = displayValue
      displayValue = '0';
      displayElement.innerText = displayValue;
      evalStringArray.push(pendingValue);
      evalStringArray.push('-');
      break;

    case '*':
      pendingValue = displayValue
      displayValue = '0';
      displayElement.innerText = displayValue;
      evalStringArray.push(pendingValue);
      evalStringArray.push('*');
      break;

    case '/':
      pendingValue = displayValue
      displayValue = '0';
      displayElement.innerText = displayValue;
      evalStringArray.push(pendingValue);
      evalStringArray.push('/');
      break;

    case '=':
      evalStringArray.push(displayValue);
      var evaluate = eval(evalStringArray.join(' '));
      displayValue = evaluate + '';
      console.log(typeof displayVal);
      displayElement.innerText = displayValue;
      evalStringArray = [];
      break;
    default:
      break;
  }
}


for(let i = 0; i < numberPress.length; i++){
  numberPress[i].addEventListener('click', updateDisplayValue);
}


for(var i = 0; i < operatorPress.length; i++){
  operatorPress[i].addEventListener('click', performOperation);
}

clear.onclick = () => {
  displayValue = '0';
  pendingValue = undefined;
  evalStringArray = [];
  displayElement.innerHTML = displayValue;
}

// decimal.onclick = () => {
//   if(!displayVal.includes('.')){
//   displayValue +='.';
//   }
//   displayElement.innerText = displayValue;
// }
