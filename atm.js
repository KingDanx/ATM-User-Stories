"use strict";
const prompt = require("prompt-sync")();
const {currentBalance, pin} = require("./account");

function getBalance(){
    return currentBalance;
}
function withdraw(num){
    return currentBalance -= num;
}
function deposit(num){
    return currentBalance += num;
}
function validatePin(){
    let access = false;
    let tries = 4;
    
    while(tries !== 0){
        let userInput = prompt();
        while(isNaN(userInput)){
            console.log(`${userInput} is not a number.  Enter your pin number,\n`);
            userInput = prompt();
        }
        if(userInput != pin){
            console.log(`Incorrect pin, ${tries - 1} attempts remaining\n`);
            tries--; 
        }
        else if(userInput == pin){
            access = true;
            return access
        }
    }
    if(tries === 0){
        console.log("The Police are on the way!");
        return false;
    }

}

module.exports = {
    balance: getBalance,
    withdraw: withdraw,
    deposit: deposit,
    validatePin: validatePin,
    pin: pin
};