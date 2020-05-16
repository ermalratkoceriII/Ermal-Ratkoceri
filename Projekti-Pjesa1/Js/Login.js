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

    if(username.value.trim() == "" && password.value.trim() == "" &&email.value.trim() == "" ){
        alert('Please fill in your info');
    }
    else if(username.value.length < 6){
        alert('Username needs to be more than 6 characters');
    }
    else if(username.value.trim() == ""){
        alert('Username cant be blank');
        username.focus();
    }else if(email.value.trim() == ""){
        alert('email cant be blank');
        email.focus();
    } else if(password.value.trim() == ""){
        alert('Password cant be blank');
        password.focus();
    }
    else if(password.value.length < 8){
        alert('Password needs to be more than 8 characters');
    }
    else{
        alert('User Created!');
    }
}