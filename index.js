"use strict";
const {balance, withdraw, deposit, validatePin, currentBalance, pin} = require("./atm");

function access(balance){
    console.log("Welcome to the ATM. \nEnter your pin number");
    if(validatePin() === false){
        console.log("RUN");
        access(balance);
    }
    else{
        mainMenu(balance);
    }
}

function mainMenu(balance){
    console.log("\nPress '1' to see your current balance \n\nPress '2' to withdraw \n\nPress '3' to depsoit\n\n");
    let userInput = prompt();
    switch: userInput
}

function logCurrentBal(){
    console.log(`Current Balance: ${currentBalance}`);
}

access

console.log(`Pin: ${pin}`);




logCurrentBal();