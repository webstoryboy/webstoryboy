<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <!-- CSS -->
    <link rel="stylesheet" href="../assets/css/login.css">
    <link rel="stylesheet" href="../assets/css/style.css">
</head>
<body>
    <main id="main">
        <section id="banner" class="container section">
            <h2 class="blind">회원가입</h2>
            <div class="banner__inner style2">
                <div class="img">
                    <img src="../assets/img/invest-trust.png" alt="배너 이미지">
                </div>

<?php
    include "../connect/connect.php";

    $youEmail = $_POST['youEmail'];
    $youName = $_POST['youName'];
    $youPass = $_POST['youPass'];
    $youPassC = $_POST['youPassC'];
    $youPhone = $_POST['youPhone'];
    $regTime = time();

    //메세지 출력
    function msg($alert, $gotoLogin){
        echo "<p>{$alert}</p>";
        if($gotoLogin == true) {
            echo " <a class='btn btn_style1 mt30' href='login.php'>Sign In</a>";
        } else {
            echo " <a class='btn btn_style1 mt30' href='join.php'>Return to Sign Up</a>";
        }
        
    }

    //받은 데이터 출력
    // echo $youEmail, $youName, $youPass, $youPhone, $regTime;

    //데이터 테이블에 넘겨주기
    // $sql = "INSERT INTO newMember(youEmail, youName, youPass, youPhone, regTime) VALUES('$youEmail', '$youName', '$youPass', '$youPhone','$regTime')";
    // $connect -> query($sql);

    // 유효성 검사
    // 이메일 체크(정규식 표현)
    // $check_email = preg_match("/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i", $youEmail);
    // if($check_email == false){
    //     echo "이메일이 잘모되었습니다.<br> 올바른 이메일을 작성해주세요";
    // }

    // 이메일 체크(내장 함수)
    $check_email = filter_var($youEmail, FILTER_VALIDATE_EMAIL);

    if($check_email == false){
        msg("이메일이 잘못되었습니다.<br> 올바른 이메일을 작성해주세요", false);
    }

    // // 이름 유효성 검사 : 정규식 표현, 한글만, 3-5글자
    $check_name = preg_match("/^[가-힣]{3,15}$/", $youName);

    if($check_name == false){
        msg("이름은 한글로(3~5)만 작성할 수 있습니다.<br> 올바른 이름을 작성해주세요", false);
        exit;
    }

    // 비밀번호 유효성 검사
    if($youPass !== $youPassC){
        msg("비밀번호가 일치하지 않습니다. <br> 다시 한번 확인해주세요!", false);
        exit;
    }

    // 비밀번호 암호화
    // $youPass = sha1($youPass);

    // 휴대폰 번호 유효성 검사
    $check_number = preg_match("/^(010|011|016|017|018|019)-[0-9]{3,4}-[0-9]{4}$/", $youPhone);
    
    if($check_number == false){
        msg("번호가 정확하지 않습니다..<br> 올바른 번호(000-0000-0000)를 작성해주세요", false);
        exit;
    }

    // 회원가입 데이터 입력 --> 유효성 검사 --> 이메일주소/핸드폰(중복X) --> 회원가입(데이터베이스 입력)
    // 회원가입 데이터 입력 --> 유효성 검사 --> 이메일주소/핸드폰(중복O) --> 로그인 페이지 유도
    
    // 이메일 중복 검사
    $isEmailCheck = false;
    $sql = "SELECT youEmail FROM newMember WHERE youEmail = '$youEmail'";
    $result = $connect -> query($sql);

    if($result){
        $count = $result -> num_rows;

        if($count == 0){
            //회원가입 가능
            $isEmailCheck = true;
        } else {
            //회원가입 불가능
            
            msg("You've already signed in before. Please Sign In!", true);
            exit;
        }
    } else {
        msg("에러발생1 : 관리자에게 문의하세요!", false);
        exit;
    }

    // 핸드폰 중복 검사
    $isPhoneCheck = false;
    $sql = "SELECT youPhone FROM newMember WHERE youPhone = '$youPhone'";
    $result = $connect -> query($sql);

    if($result){
        $count = $result -> num_rows;

        if($count == 0){
            //회원가입 가능
            $isPhoneCheck = true;
        } else {
            //회원가입 불가능
            msg("You've already signed in before. Please Sign In!", true);
            exit;
        }
    } else {
        msg("에러발생2 : 관리자에게 문의하세요!", false);
        exit;
    }

    // 회원가입
    if($isEmailCheck == true && $isPhoneCheck == true){
        $sql = "INSERT INTO newMember(youEmail, youName, youPass, youPhone, regTime) VALUES('$youEmail', '$youName', '$youPass', '$youPhone', '$regTime')";
        $result = $connect -> query($sql);

        if($result){
            msg("Welcome, '$youName'~ Please Sign In!", true);
        } else {
            msg("에러발생3 : 관리자에게 문의하세요!", false);
            exit;
        }
    } else {
        msg("You've already signed in before. Please Sign In!", true);
        exit;
    }
?>

                </div>
            </div>
        </section>
    </main>
    <!-- //main -->
</body>
</html>