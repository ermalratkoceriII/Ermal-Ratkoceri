function Login(){
    var Login = document.getElementsByClassName('LoginBox');
    console.log(Login);

    Login[0].classList.add('show');
    Login[0].classList.remove('hide');
    Login[1].classList.add('hide');
    Login[1].classList.remove('show');
}



window.onLoad = Login();

function Register(){
    var Login = document.getElementsByClassName('LoginBox');
    console.log(Login);

    Login[0].classList.add('hide');
    Login[0].classList.remove('show');
    Login[1].classList.add('show');
    Login[1].classList.remove('hide');
}

function validateLogin(){
    var username = document.getElementById('LogUser');
    var password = document.getElementById('LogPass');

    if(username.value.trim() == "" && password.value.trim() == "" ){
        alert('Please fill in your info');
    }
    else if(username.value.trim() == ""){
        alert('Username cant be blank');
        username.focus();
    }
    else if(password.value.trim() == ""){
        alert('Password cant be blank');
        password.focus();
    }   
}

function validateRegister(){
    var username = document.getElementById('RegUser');
    var password = document.getElementById('RegPass');
    var email = document.getElementById('email');

    var userpattern = /[A-Z]+[a-z]{6,20}/
    var passpattern = /[A-Z]+[a-z]{8,20}/
    var emailpattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}/;

    if(username.value.trim() == "" && password.value.trim() == "" &&email.value.trim() == "" ){
        alert('Please fill in your info');
    }else if(email.value.trim() == ""){
        alert('email cant be blank');
        email.focus();
    }else if(username.value.trim() == ""){
        alert('Username cant be blank');
        username.focus();
    }else if(!email.value.match(emailpattern)){
        alert("Please write a valid e-mail, eg example@gmail.com");
    }
    else if(!username.value.match(userpattern) || username.value.length > 20){
        alert('First character uppercase! Username should be longer than 6 characters and shorter than 20 characters. ALERT CANT CONTAIN SYMBOLS');
    }
     else if(password.value.trim() == ""){
        alert('Password cant be blank');
        password.focus();
    }
    else if(!password.value.match(passpattern) || password.value.length > 20){
        alert('First character uppercase! Password needs to be more than 8 characters and less than 20 characters. ALERT CANT CONTAIN SYMBOLS');
    }
   
}

