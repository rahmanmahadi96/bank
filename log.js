document.getElementById('buttonlog').addEventListener('click', function(){
    const mail = document.getElementById('mail');
    const pass = document.getElementById('pass');
    if(mail.value == 'ab@ab.com' && pass.value == 'abc'){
        window.location.href = 'bank.html';
    }
    else{
        alert('invalid email or password');
    }
})