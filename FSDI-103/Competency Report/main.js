
/*Declaring global vars to contain the two number choices, operator, and result */
let num1=0, num2=0, result;
let operator;

/*Prompts for two number inputs from the user */
function getNumbers(){
    x=parseInt(prompt("Enter a random number"));
    checkNumbers(x);
    return x;
}
/*Checks data type of input to ensure Number(int! why does java do this. its an int dangit) */
function checkNumbers(x){
    console.log(typeof(x));
    //checks for input type, if not a "number" INTEGER, the set exit flag to one and exit program
    if (x!=0 && (x/x)!=1){
        alert("Only Numbers Please. Try again.");
    }
    else{
        console.log(x);
    }
}
/*Gets the desired operator from the user */
function getOperator(){
    operator=prompt("Enter an operator to perform");
}
/*Function to apply maths to chosen numbers */
function mathOperations(x,y){
    switch(operator) {
        case "+":
            result = x + y;
            break;
        case "-":
            result = x - y;
            break;
        case "*":
            result = x * y;
            break;
        case "/":
            result = x / y;
            break;
    }
    console.log(result);
}
/*Takes the numbers from checkType function and displays them on to the page */
function displayNumbers(x,y){
    document.getElementById("num1").innerHTML="First Number: "+x;
    document.getElementById("num2").innerHTML="Second Number: "+y;
    document.getElementById("operation-result").innerHTML="operator: "+operator;

}
/*Prints calculated maths to console and document*/
function displayMaths(){
    console.log(operator);
    document.getElementById("operation-result").innerHTML=`The result of ${num1} ${operator} ${num2} is ${result}.`;
}
/*Function that runs program */
function programStart(){
    num1 = getNumbers();
    num2 = getNumbers();
    getOperator();
    mathOperations(num1, num2);
    displayNumbers(num1, num2);
    displayMaths();
}
programStart();
