function validateLogin(){
    var username = document.getElementById('LogUser');
    var password = document.getElementById('LogPass');

    var userpattern = /[A-Z]+[a-z]{6,20}/
    var passpattern = /[A-Z]+[a-z]{8,20}/

    if(username.value.trim() == "" && password.value.trim() == "" ){
        username.style.borderColor = 'red';
        password.style.borderColor = 'red';
        alert('Please fill in your info');
    }
    else if(username.value.trim() == ""){
        username.style.borderColor = 'red';
        password.style.borderColor = 'grey';
        alert('Username cant be blank');
    }else if(!username.value.match(userpattern) || username.value.length > 20){
        username.style.borderColor = 'red';
        password.style.borderColor = 'grey';
        alert('First character uppercase! Username should be longer than 6 characters and shorter than 20 characters. ALERT CANT CONTAIN SYMBOLS');
    }
    else if(password.value.trim() == ""){
        password.style.borderColor = 'red';
        username.style.borderColor = 'grey';
        alert('Password cant be blank');
    }   else if(!password.value.match(passpattern) || password.value.length > 20){
        password.style.borderColor = 'red';
        username.style.borderColor = 'grey';
        alert('First character uppercase! Password needs to be more than 8 characters and less than 20 characters. ALERT CANT CONTAIN SYMBOLS');
    }else{
        alert("Welcome User!");
        username.style.borderColor = 'Green';
        password.style.borderColor = 'Green';
    }
}

function validateRegister(){
    var username = document.getElementById('RegUser');
    var password = document.getElementById('RegPass');
    var email = document.getElementById('email');

    var userpattern = /[A-Z]+[a-z]{6,20}/
    var passpattern = /[A-Z]+[a-z]{8,20}/
    var emailpattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}/;
    var emailpattern2 = /^[^ ]+@[a-z]{3,7}/;

    if(username.value.trim() == "" && password.value.trim() == "" &&email.value.trim() == "" ){
        username.style.borderColor = 'red';
        password.style.borderColor = 'red';
        email.style.borderColor = 'red';
        alert('Please fill in your info');
    } else if(username.value.trim() == "" && password.value.trim() == "" ){
        username.style.borderColor = 'red';
        password.style.borderColor = 'red';
        email.style.borderColor = 'grey';
        alert('Please fill in username and password');
    }else if(email.value.trim() == "" && password.value.trim() == "" ){
        username.style.borderColor = 'grey';
        password.style.borderColor = 'red';
        email.style.borderColor = 'red';
        alert('Please fill in email and password');
    }else if(username.value.trim() == "" && email.value.trim() == "" ){
        username.style.borderColor = 'red';
        password.style.borderColor = 'grey';
        email.style.borderColor = 'red';
        alert('Please fill in username and email');
    }else if(email.value.trim() == ""){
        email.style.borderColor = 'red';
        username.style.borderColor = 'grey';
        password.style.borderColor = 'grey';
        alert('email cant be blank');
        email.focus();
    }else if(!email.value.match(emailpattern2)){
        email.style.borderColor = 'red';
        username.style.borderColor = 'grey';
        password.style.borderColor = 'grey';
        alert("Please write a valid e-mail, eg example@gmail.com");
    }
    else if(!email.value.match(emailpattern)){
        email.style.borderColor = 'red';
        username.style.borderColor = 'grey';
        password.style.borderColor = 'grey';
        alert("Please write a valid e-mail, eg example@gmail.com");
    }else if(username.value.trim() == ""){
        username.style.borderColor = 'red';
        password.style.borderColor = 'grey';
        email.style.borderColor = 'grey';
        alert('Username cant be blank');
        username.focus();   
    }
    else if(!username.value.match(userpattern) || username.value.length > 20){
        username.style.borderColor = 'red';
        password.style.borderColor = 'grey';
        email.style.borderColor = 'grey';
        alert('First character uppercase! Username should be longer than 6 characters and shorter than 20 characters. ALERT CANT CONTAIN SYMBOLS');
    }
     else if(password.value.trim() == ""){
        password.style.borderColor = 'red';
        email.style.borderColor = 'grey';
        username.style.borderColor = 'grey';
        alert('Password cant be blank');
        password.focus();
    }
    else if(!password.value.match(passpattern) || password.value.length > 20){
        password.style.borderColor = 'red';
        email.style.borderColor = 'grey';
        username.style.borderColor = 'grey';
        alert('First character uppercase! Password needs to be more than 8 characters and less than 20 characters. ALERT CANT CONTAIN SYMBOLS');
    }else{
        username.style.borderColor = 'green';
        password.style.borderColor = 'green';
        email.style.borderColor = 'green';
        alert("User Created! Welcome to Deliciousness");
    }
}
