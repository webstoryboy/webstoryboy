<?php
    include '../connect/connect.php';

    $sql = "create table newMember(";
    $sql .= "memberID int(10) unsigned NOT NULL AUTO_INCREMENT,";
    $sql .= "youEmail varchar(40) UNIQUE NOT NULL,";
    $sql .= "youName varchar(10) NOT NULL,";
    $sql .= "youPass varchar(50) NOT NULL,";
    $sql .= "youPhone varchar(20) NOT NULL,";
    $sql .= "regTime int(20) NOT NULL,";
    $sql .= "PRIMARY KEY(memberID)";
    $sql .= ") CHARSET=utf8";
    $result = $connect -> query($sql);
    
    if($result){
        echo "Create Tables Complete";
    } else {
        echo "Create Tables False";
    }
?>