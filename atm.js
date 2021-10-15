"use strict";
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
    let tries = 3;
    
    while(tries !== 0){
        let userInput = prompt();
        if(userInput != pin){
            console.log(`Incorrect pin, ${tries} remaining`);
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