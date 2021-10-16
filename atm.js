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

function validatePin(ui){
    let access = false;
    
    if(ui == pin){
        access = true;
        return access
    }    
    return false;    
}

module.exports = {
    balance: getBalance,
    withdraw: withdraw,
    deposit: deposit,
    validatePin: validatePin,
}