"use strict";
const prompt = require("prompt-sync")();
const {balance, withdraw, deposit, validatePin, notANumber} = require("./atm");

function access(){
    console.log("Welcome to the ATM. \nEnter your pin number");
    if(validatePin() === false){
        console.log("RUN\n");
        access();
    }
    else{
        mainMenu();
    }
}

function mainMenu(){
    console.log("\nPress '1' to see your current balance \nPress '2' to withdraw \nPress '3' to depsoit \nPress '4' to restart \nPress '5' to quit");
    let userInput = prompt();
    switch (userInput) {
        case '1':
            logCurrentBal();
            mainMenu();
            break;
        case '2':
            console.log(`Enter amount you would like to withdraw.`);
            let withdrawAmount = prompt();
            withdraw(notANumber(parseInt(withdrawAmount)));
            logCurrentBal();
            mainMenu();
            break;
        case '3':
            console.log(`Enter the amount you would like to deposit.`);
            let depositAmount = prompt();
            deposit(notANumber(parseInt(depositAmount)));;
            logCurrentBal();
            mainMenu();
            break;
        case '4':
            access(balance);
            break;
        case '5':
            break;
        default:
            console.log(`${userInput} is not a valid input. Please try again.`);
            mainMenu();
            break;
    }
}

function logCurrentBal(){
    console.log(`\nCurrent Balance: $${balance()}`);
}

access();