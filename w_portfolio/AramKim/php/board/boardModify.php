<?php
    include "../connect/connect.php";
    include "../connect/session.php";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <!-- CSS -->
    <link rel="stylesheet" href="../assets/css/style.css">
    <link rel="stylesheet" href="../assets/css/board.css">
</head>
<body>
    <main id="main">
        <section id="board" class="container section">
            <h2>게시글 수정하기</h2>
            <p>웹디자이너, 웹퍼블리셔, 프론트앤드 개발자를 위한 게시판입니다.</p>
            <div class="board__inner modify">
                <div class="board__modify">
                    <form action="boardModifySave.php" name="boardModify" method="post">
                        <fieldset>
                            <legend>게시판 수정 영역입니다.</legend>
<?php
    $boardID = $_GET['boardID'];
    
    $sql = "SELECT boardID, boardTitle, boardContents FROM newBoard WHERE boardID = {$boardID}";
    $result = $connect -> query($sql);

    if($result) {
        $info = $result -> fetch_array(MYSQLI_ASSOC);

        echo "<div style='display: none'><label for='boardID'>번호</label><input type='text' name='boardID' id='boardID' value='".$info['boardID']."'></div>";
        echo "<div><label for='boardTitle'>제목</label><input type='text' name='boardTitle' id='boardTitle' value='".$info['boardTitle']."'></div>";
        echo "<div><label for='boardContents'>내용</label><textarea name='boardContents' id='boardContents' rows='20'>".$info['boardContents']."</textarea></div>";
        echo "<div><label for='boardPass'>비밀번호</label><input type='password' name='boardPass' id='boardPass' placeholder='로그인 비밀번호를 입력해주세요!' autocomplete='off' required></input></div>";
    }
?>
                            <button type="submit" value="수정하기" class="btn">수정하기</button>
                            <a href="board.php" class="btn mr10">목록보기</a>
                        </fieldset>
                    </form>
                </div>
            </div>
        </section>
        <!-- //board -->
    </main>
    <!-- //main -->
</body>
</html>