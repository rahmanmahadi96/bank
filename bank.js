



document.getElementById('deposit-button').addEventListener('click', function (){
    const depInput = document.getElementById('deposit-input');
    const depValue = parseFloat(depInput.value);

    const depositfind = document.getElementById('deposit-total');
    const previousDeposit = parseFloat(depositfind.innerText);
    const depositAmount = previousDeposit + depValue;
    depositfind.innerText = depositAmount;
    

    const balanceFind = document.getElementById('balance-total');
    const previousBalance = parseFloat(balanceFind.innerText);
    const balance = previousBalance + depValue;
    balanceFind.innerText = balance;

    depInput.value = '';
})

document.getElementById('withdraw-button').addEventListener('click', function (){
    const depInput = document.getElementById('withdraw-input');
    const depValue = parseFloat(depInput.value);

    const depositfind = document.getElementById('withdraw-total');
    const previousDeposit = parseFloat(depositfind.innerText);
    const depositAmount = previousDeposit + depValue;
    depositfind.innerText = depositAmount;
    

    const balanceFind = document.getElementById('balance-total');
    const previousBalance = parseFloat(balanceFind.innerText);
    
        const balance = previousBalance - depValue;
   
    balanceFind.innerText = balance;

    depInput.value = '';
})

