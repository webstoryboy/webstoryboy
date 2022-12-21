<?php if(isset($_SESSION['memberID'])) { ?>
    <h2><a href="php/board/board.php">Board</a></h2>
    <p><a href="#">Welcome, <?=$_SESSION['youName']?>!</a></p>
    <button class="signBtn"><a href="php/login/logout.php">Logout</a></button>
<?php } else { ?>
    <h2>Hello, Thanks for your attention!</h2>
    <button class="signBtn"><a href="php/login/login.php">Sign In</a></button>
<?php } ?>
