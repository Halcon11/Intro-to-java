const operator = prompt("Enter the operation to perform : + , -,  /, *");
const number1 = parseFloat(prompt("Enter your first number: "));
const number2 = parseFloat(prompt("Enter your second number: "));

let result;

if (operator == '+') 
{
    result = number1 + number2;
}
else if (operator == '-') 
{
    result = number1 - number2;
}
else if (operator == '/') 
{
    result = number1 / number2;
}
else (operator == '*') 
{
    result = number1 * number2;
}
prompt(`${number1} ${operator} ${number2} = ${result}`);
