const {balance, withdraw, deposit, validatePin, currentBalance, pin} = require("./atm");


console.log(`Pin: ${pin}`);


function logCurrentBal(){
    console.log(`Current Balance: ${currentBalance}`);
}

logCurrentBal();