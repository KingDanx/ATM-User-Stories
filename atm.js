"use strict";
const prompt = require("prompt-sync")();
const {pin} = require("./account");
let {currentBalance} = require("./account");
 
function getBalance(){
    return currentBalance;
}
function withdraw(num){
    currentBalance -= num;
    if(currentBalance < 0){
        console.log(`\nInsufficient funds, transaction aborted.`);
        return currentBalance += num;
    }
    return currentBalance;
}
function deposit(num){
    return currentBalance += num;
}
function validatePin(){
    let access = false;
    let tries = 4;
    let userInput = prompt();
    while(tries !== 0){
        notANumber(userInput);
        if(userInput != pin){
            if(tries -1 !== 0){
                console.log(`Incorrect pin, ${tries - 1} attempts remaining\n`);
            }
            userInput = prompt();
            tries--;
        }
        if(userInput == pin){
            access = true;
            return access
        }
        if(tries - 1 === 0){
            console.log("The Police are on the way!");
            return false;
        }
    }
}

function notANumber(ui){
    while(isNaN(ui)){
        console.log(`${ui} is not a number. Try again\n`);
        ui = prompt();  
    }
    return ui;
}

module.exports = {
    balance: getBalance,
    withdraw: withdraw,
    deposit: deposit,
    validatePin: validatePin,
    notANumber: notANumber,
};