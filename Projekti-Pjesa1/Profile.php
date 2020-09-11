<?php 

require_once 'core/Init.php';

if(!$username = Input::get('user')){
    Redirect::to('index.php');
} else {
    $user = new User($username);
    if(!$user->exists()){
        Redirect::to(404);
    } else {
        $data = $user->data();
    }
    ?>

    <h3><?php echo escape($data->Username);?></h3>
    <p>Email: <?php echo escape($data->email); ?> </p>
    <?php
}