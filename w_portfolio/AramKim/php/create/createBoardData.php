<?php
    include "../connect/connect.php";

    for( $i=1; $i<=300; $i++ ){
        $regTime = time();

        $sql = "INSERT INTO newBoard(memberID, boardTitle, boardContents, boardView, regTime) VALUES(1, '게시판 타이틀${i}입니다.', '게시판 컨텐츠${i}입니다. 게시판 컨텐츠${i}입니다.', '1', '$regTime')";
        
        $result = $connect -> query($sql);
    }
?>