
/* Variables for Script */
let name, 
    quantity, 
    price;

let tax = .04225, beforeTax, taxRounded, taxAmount, total;

/* Popup alert, call functions, and display price after tax in console */
getInfo();
alert("Information Stored");
printItem();
calcTax();

console.log(`After tax: $${taxRounded}`);


/* Functions */

    /* Ask for info from user/ store in variable */
function getInfo(){
    name = prompt("Enter Product Name:"), 
    quantity = prompt("Enter Product Quantity:"), 
    price = prompt("Enter Product Price:");
}

    /* Display information in console*/
function printItem(){
    console.log(`Name: ${name}`);
    console.log(`Quantity: ${quantity}`);
    console.log(`Price: ${price}`);
}

    /* Calculate tax, and round to 2 decimal places*/
function calcTax(){
    beforeTax = (quantity*price);
    taxAmount = (beforeTax*tax);
    afterTax = (beforeTax + taxAmount)
    taxRounded = afterTax.toFixed(2);
}