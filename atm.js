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
    return pin;
}

module.exports = {
    balance: getBalance,
    withdraw: withdraw,
    deposit: deposit,
    validatePin: validatePin,
    currentBalance: currentBalance,
    pin: pin
};