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

