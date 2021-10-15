"use strict";
const prompt = require("prompt-sync")();
const {pin} = require("./account");
let {currentBalance} = require("./account");
 
function getBalance(){
    return currentBalance;
}

function withdraw(num){
     return currentBalance -= num;
}

function deposit(wallet){
    return currentBalance += wallet;
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
            console.log("\n1234The Police are on the way!");
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
}