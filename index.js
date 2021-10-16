"use strict";
const prompt = require("prompt-sync")();
let {wallet} = require("./wallet");
const {balance, withdraw, deposit, validatePin} = require("./atm");

function access(){
    console.log("\nWelcome to the ATM. \nEnter your pin number\n");
    let userInput = prompt();
    for(let i = 3; i >= 0; i--){
        notANumber(userInput);
        if(validatePin(userInput) === false){
            if(i !== 0){
                console.log(`Incorrect pin, ${i} attempts remaining\n`);
                userInput = prompt();
            }
        }
        if(i === 0){
            console.log("\nThe Police are on the way!");
            access();
        }
        if(validatePin(userInput) === true){
            mainMenu();
            break;
        }
    }
}

function mainMenu(){
    console.log("\nPress '1' to see your current balance \nPress '2' to withdraw \nPress '3' to depsoit \nPress '4' to restart \nPress '5' to quit\n");
    let userInput = prompt();
    switch (userInput) {
        case '1':
            logCurrentBal();
            mainMenu();
            break;
        case '2':
            withdraw(notANumber(parseInt(walletWithdraw())));
            logCurrentBal();
            mainMenu();
            break;
        case '3':
            deposit(notANumber(walletDepo(wallet)));;
            logCurrentBal();
            mainMenu();
            break;
        case '4':
            access();
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

function walletDepo(){
    console.log(`\nYou have $${wallet} in your wallet. How much would you like to desposit?`);
    let depositAmount = prompt();
    depositAmount = notANumber(depositAmount);
    depositAmount = parseInt(depositAmount);
   
    while(depositAmount > wallet){
        console.log(`\nInsufficient funds. Try again.`);
        depositAmount = prompt();
        depositAmount = parseInt(depositAmount);
    }
    wallet -= depositAmount;
    console.log(`\nYou deposit $${depositAmount} and now have $${wallet} remaining in your wallet.`);
    return depositAmount;
}

function walletWithdraw(){
    console.log(`\nYou have $${wallet} in your wallet. How much would you like to withdraw?`);    
    console.log(`\nEnter amount you would like to withdraw.`);
    let withdrawAmount = prompt();
    withdrawAmount = notANumber(withdrawAmount);
    withdrawAmount = parseInt(withdrawAmount);
    if(withdrawAmount <= balance()){
        wallet += withdrawAmount;
        console.log(`\nYou withdraw $${withdrawAmount} from the ATM.  You now have $${wallet} in your wallet.`);
    }
    else{
        console.log(`\nInsufficient funds, transaction aborted.`);
        mainMenu();
    }
    return withdrawAmount;
}

function notANumber(ui){
    while(isNaN(ui)){
        console.log(`${ui} is not a number. Try again\n`);
        ui = prompt();  
    }
    return ui;
}

access();