<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<?php 
require_once 'core/Init.php';
?>
<?php error_reporting (E_ALL ^ E_NOTICE); ?>
<body>
        <div class="header">
            <img src="Logo2.png" alt="Logoja">
            <h3>WELCOME TO DELICIOUSNESS, WHERE COOKING MEETS HAPPINESS</h3>
            <h3>Home</h3>
        </div>

    <nav class="navbar">
        <ul class="navbar-bar">
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
        </ul>
    </nav>

    <main>
        <div class="MainContainer">
            
            <div class="box">
                <div class="content" name="C1">
                    <h3>Cakes</h3>
                    <p>
                        On this section 
                        you will find some 
                       of the most delicious
                       cake recipes!
                    </p>
                    <a onclick="next(1)">Read More</a>
                </div>
                <div class="content" name="C1">
                    <h3>Chocolate Cake</h3>
                    <p>
                        One of the best 
                        chocolate cake recipes out there,
                        The Chocolate Stout Layer Cake with Chocolate Frosting
                        is delicious for gatherings and as a birthday cake.
                    </p>
          
                    <a  onclick="next(-1)">Back</a>
                    <a  onclick="next(1)" >Next</a>
                    <a href="Recipes/Cakes/Chocolate.html">Cook The Recipe</a>
                </div>
                <div class="content" name="C1">
                    <h3>Strawberry-Elderflower Cake</h3>
                    <p>
                        It’s airy, light, and sweet, 
                        but this delicate cake gets pucker and punch from 
                        vinegar in both the icing and the filling.
                    </p>
                    <a onclick="next(-1)">Back</a>
                    <a onclick="next(1)">Next</a>
                    <a href="Recipes/Cakes/StrawberryCake.html" >Cook The Recipe</a>
                </div>
                <div class="content" name="C1">
                    <h3>The Tomboy Cake</h3>
                    <p>
                        Inspired by a style of cake from California’s Miette bakeries,
                        we frost the top and middle layers of this stunner 
                        but leave the sides naked to showcase the almond cake. 
                    </p>
                    <a onclick="next(-1)">Back</a>
                    <a onclick="next(1)">Headline</a>
                    <a href="Recipes/Cakes/TomboyCake.html" >Cook The Recipe</a>
                    
                </div>
            </div>
           
            <div class="box">
                <div  class="content" name="C2">
                    <h3>Pies</h3>
                    <p>On this section 
                        you will find
                        some of the most marvelous
                        pie recipes!
                    </p>
                    <a onclick="next2(1)">Read More</a>
                </div>
                <div  class="content" name="C2">
                    <h3>Double Crust Apple Pie</h3>
                    <p>
                        The most famous of the traditionally double crust pies,
                        apple pie can be topped with a lattice design or a complete pastry cover.
                     </p>
                    <a onclick="next2(-1)">Back</a>
                    <a onclick="next2(1)">Next</a>
                    <a href="Recipes/Pies/DoubleCrustAP.html" >Cook The Recipe</a>
                </div>
                <div  class="content" name="C2">
                    <h3>Strawberry Slab Pie</h3>
                    <p>
                        With a perfectly buttery crust and a sweet, jammy filling, 
                        this slab pie from Joanne Chang is one of the most 
                        delicious desserts you’ll eat all summer. 
                     </p>
                    <a onclick="next2(-1)">Back</a>
                    <a onclick="next2(1)">Next</a>
                    <a href="Recipes/Pies/StrawberrySlabP.html">Cook The Recipe</a>
                </div>
                <div class="content" name="C2">
                    <h3>Creamy Peanut Butter Pie</h3>
                    <p>
                        This delicious whipped-cream-topped peanut butter pie offers 
                        the perfect balance of sweet and salty flavors. 
                     </p>
                    <a onclick="next2(-1)">Back</a>
                    <a onclick="next2(1)">Headline</a>
                    <a href="Recipes/Pies/CreamyPBPie.html">Cook The Recipe</a>
                </div>
            </div>
          
        <div class="box">
            <div class="content" name="C3">
                <h3>Cookies</h3>
                <p>
                   On this section 
                   you will find some of the most
                   astonishing Cookie recipes!
                 </p>
                <a onclick="next3(1)">Read More</a>
            </div>
            <div class="content" name="C3">
                <h3>Chocolate Chip Cookies</h3>
                <p>
                    Look no further! 
                    We've got you covered for the perfect 
                    chocolate chip cookie recipe.
                 </p>
                <a onclick="next3(-1)">Back</a>
                <a onclick="next3(1)">Next</a>
                <a href="Recipes/Cookies/ChocolateChipC.html">Cook The Recipe</a>
            </div>
            <div class="content" name="C3">
                <h3>Best-Ever Brookies</h3>
                <p>
                    Half cookie, half brownie, fully delicious.
                 </p>
                <a onclick="next3(-1)">Back</a>
                <a onclick="next3(1)">Next</a>
                <a href="Recipes/Cookies/Brookies.html">Cook The Recipe</a>
            </div>
            <div class="content" name="C3">
                <h3>GingerBread Cookies</h3>
                <p>
                    Master this classic recipe and make 
                    gingerbread men worthy of Santa himself.
                 </p>
                <a onclick="next3(-1)">Back</a>
                <a  onclick="next3(1)">Headline</a>
                <a href="Recipes/Cookies/GingerBreadC.html">Cook The Recipe</a>
            </div>
        </div>
        <div class="box">
            <div class="content">
 <?php 

    if(Session::exists('home')){
    echo '<p>' . Session::flash('home') . '</p>';
}

$user = new User();
if($user->isLoggedIn()){
  ?>
  <p>Hello User hover to access your profile.<a href='Profile.php?user=<?php echo escape($user->data()->Username); ?>'><?php echo escape($user->data()->Username); ?> </a></p>
    <a href="logout.php"> Log out</a>

  <?php
    if($user->hasPermission('admin'))
    {
        ?>
        <a href='Dashboard.php'>Dashboard</a>
        <p>Admin User</p>
        <?php
    }  
    if(!$user->hasPermission('admin'))
    {
        ?>
        <p>Standard User</p>
        <?php
    } 
} 
else{
    echo '<p>You need to <a href="Login.php">Log in</a> or <a href="Register.php">register</a>';
}
?>
          
            </div>
        </div>
    </main>
    <footer>
        <h3> Always start out with a larger pot than what you think you need. — Julia Child </h3>
        <p><b>@Ubt 2020 - <a href="https://github.com/ermalratkoceriII/Ermal-Ratkoceri">GitRepo</b></p>
    </footer>
    <script src="Js/main.js"></script>
</body>
</html>