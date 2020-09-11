<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login & Register</title>
    <link rel="stylesheet" href="css/style.css">
</head>

<?php 
require_once 'core/Init.php';

if(Input::exists()){
    if(Token::check(Input::get('token'))){

     $validate = new Validate();
     $validation = $validate->check($_POST, array(
        'username' => array('required' => true),
        'password' => array('required' => true)
     ));

     if($validation->passed()){
        $user = new User();
        $login = $user->login(Input::get('username'), Input::get('password'));
     
        if($login){
            Redirect::to('index.php');
        } else {
            echo '<p> Login Failed! </p>';
        }

    } else {
         foreach($validation->errors() as $error){
            echo $error, '<br>';
         }
     }
    }
}
?>

<body>
        <div class="header">
            <img src="Logo2.PNG" alt="Logoja">
            <h3>WELCOME TO DELICIOUSNESS, WHERE COOKING MEETS HAPPINESS</h3>
            <h3>Login & Register</h3>
        </div>

    <nav class="navbar">
        <ul class="navbar-bar">
            <li class="nav-item">
                <a href="index.php" class="nav-link">
                    <svg 
                    aria-hidden="true" 
                    focusable="false" 
                    data-prefix="fas" 
                    data-icon="home" 
                    class="svg-inline--fa fa-home fa-w-18" 
                    role="img" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 576 512">
                    <path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
                    class="fa-primary"></path></svg>
                 <span class="link-text">Home</span>
              </a>
         </li>
        <li class="nav-item">
            <a href="ContactUs.php" class="nav-link">
             <svg 
             aria-hidden="true" 
             focusable="false" 
             data-prefix="fas" data-icon="comment" 
             class="svg-inline--fa fa-comment fa-w-16" 
             role="img" xmlns="http://www.w3.org/2000/svg" 
             viewBox="0 0 512 512"><path fill="currentColor" d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"
             class="fa-primary"></path></svg>
             <span class="link-text">Contact Us</span>
          </a>
     </li>
        <li class="nav-item">
            <a href="AboutUs.php" class="nav-link">
                <svg 
                aria-hidden="true" 
                focusable="false" 
                data-prefix="fas" 
                data-icon="user"
                 class="svg-inline--fa fa-user fa-w-14" 
                 role="img" xmlns="http://www.w3.org/2000/svg" 
                 viewBox="0 0 448 512"><path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
                    class="fa-primary"></path></svg>
            <span class="link-text">About Us</span>
            </a>
        </li>
        <li class="nav-item">
           <a href="Register.php" class="nav-link">
            <svg 
            aria-hidden="true" 
            focusable="false" 
            data-prefix="fas" 
            data-icon="sign-in-alt" 
            class="svg-inline--fa fa-sign-in-alt fa-w-16" 
            role="img" xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 512 512"><path fill="currentColor" d="M416 448h-84c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h84c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96zm-47-201L201 79c-15-15-41-4.5-41 17v96H24c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24h136v96c0 21.5 26 32 41 17l168-168c9.3-9.4 9.3-24.6 0-34z"
                class="fa-primary"></path></svg>
            <span class="link-text">Register</span>
            </a>
        </li>
        </ul>
    </nav>

    <main>
    <div class="LoginContainer">
    <div></div><div></div>
<div class="LoginRegister">
    <div class="LoginBox">
    <form action="" method="post">  
        <div class="Login" >
                <label>Username:</label>
                <input type="text" autocomplete="off" placeholder=" username..." id="username" name="username">
                <label>Password:</label>
                <input type="Password" autocomplete="off" placeholder=" password..." id="password" name="password">
                <input type="hidden" name="token" value="<?php echo Token::generate();?>">
                <button onclick="validateLogin()" id="LRButton">Login</button>        
        </div>
        </form>
    </div>
</div>
</div>
    </main>
    <footer>
        <h3> Always start out with a larger pot than what you think you need. — Julia Child </h3>
        <p><b>@Ubt 2020 - <a href="https://github.com/ermalratkoceriII/Ermal-Ratkoceri">GitRepo</b></p>
    </footer>
    <script src="Js/Login.js"></script>
</body>
</html>