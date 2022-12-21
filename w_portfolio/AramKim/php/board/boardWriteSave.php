<?php
    include "../connect/connect.php";
    include "../connect/session.php";

    $boardTitle = $_POST['boardTitle'];
    $boardContents = $_POST['boardContents'];

    $boardTitle = $connect -> real_escape_string($boardTitle); 
    $boardContents = $connect -> real_escape_string($boardContents); 
    $boardView = 1;
    $regTime = time();
    $memberID = $_SESSION['memberID'];

    $sql = "INSERT INTO newBoard(memberID, boardTitle, boardContents, boardView, regTime) VALUES('$memberID', '$boardTitle', '$boardContents', '$boardView', '$regTime')";
    $connect -> query($sql);
?>

<script>
    location.href = "board.php";
</script>