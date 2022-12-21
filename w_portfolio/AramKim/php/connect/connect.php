<?php
    $host = "localhost";
    $user = "ahramkim";
    $pw = "Dkfkarla2ek!";
    $dbName = "ahramkim";
    $connect = new mysqli($host, $user, $pw, $dbName);
    $connect -> set_charset("utf8");
    if(mysqli_connect_errno()){
        echo "database connect false";
    } else {
        // echo "database connect true";
    }
?>