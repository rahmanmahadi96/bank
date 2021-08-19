function getAmount (input){
    const depInput = document.getElementById(input);
    const depValue = parseFloat(depInput.value);
    depInput.value = '';
    return depValue;
    
}

function updateText (total, value){
    const text = document.getElementById(total);
    const textAmount = parseFloat(text.innerText);
    text.innerText = textAmount + value;
}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

function balanceUpdate(amount, isAdd){
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = getCurrentBalance();
    if(isAdd == true){
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else{
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}


document.getElementById('deposit-button').addEventListener('click', function (){

    const depositAmount = getAmount('deposit-input');
    if(depositAmount > 0){
        updateText('deposit-total', depositAmount);
        balanceUpdate(depositAmount, true);
    }
})

document.getElementById('withdraw-button').addEventListener('click', function (){
    const withdrawAmount = getAmount('withdraw-input'); 
    const currentBalance = getCurrentBalance();
    if(withdrawAmount > 0 && withdrawAmount < currentBalance){
        updateText('withdraw-total', withdrawAmount);
        balanceUpdate(withdrawAmount, false);
    }
    if (withdrawAmount > currentBalance) {
        console.log('You can not withdraw more than what you have in your account');
    }
})