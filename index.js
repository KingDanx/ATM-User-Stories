"use strict";
const prompt = require("prompt-sync")();
const {balance, withdraw, deposit, validatePin, currentBalance, pin} = require("./atm");

function access(balance){
    console.log("Welcome to the ATM. \nEnter your pin number");
    if(validatePin() === false){
        console.log("RUN\n");
        access(balance);
    }
    else{
        mainMenu(balance);
    }
}

function mainMenu(balance){
    console.log("\nPress '1' to see your current balance \n\nPress '2' to withdraw \n\nPress '3' to depsoit\n\n");
    //let userInput = prompt();
}

function logCurrentBal(){
    console.log(`Current Balance: ${balance()}`);
}

//access(currentBalance);

console.log(`Pin: ${pin}`);

logCurrentBal(currentBalance);