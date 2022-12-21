<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP 사이트 만들기</title>

    <!-- CSS -->
    <link rel="stylesheet" href="../assets/css/style.css">
    <link rel="stylesheet" href="../assets/css/login.css">
</head>

<body>
    <main id="main">
        <section id="join" class="container section">
            <h2>Sign Up</h2>
            <p>회원가입은 1인당 1개의 이메일 계정을 이용할 수 있습니다.<br>개인정보를 수집 및 이용하며, 회원의 개인정보를 안전하게 취급하고, 교육을 목적으로 사용됩니다.</p>
            <div class="join__inner">
                <div class="join__privacy">
                    <h3>개인정보 수집 및 이용에 대한 안내</h3>
                    <div class="privacy">
                        <ul>
                            <li>목적 : 가입자 개인 식별, 가입 의사 확인, 가입자와의 원활한 의사소통, 가입자와의 교육 커뮤니테이션</li>
                            <li>항목 : 아이디(이메일주소), 비밀번호, 이름, 생년월일, 휴대폰번호</li>
                            <li>보유기간 : 회원 탈퇴 시까지 보유(탈퇴일로부터 즉시 파기합니다.)</li>
                            <li>개인정보 수집에 대한 동의를 거부할 권리가 있으며, 회원 가입시 개인정보 수집을 동의함으로 간주합니다.</li>
                        </ul>
                    </div>
                    <div class="check">
                        <input type="checkbox" name="joinCheck" id="joinCheck">
                        <label for="joinCheck">약관에 동의합니다.</label>
                    </div>
                </div>
                <div class="join__form">
                    <form action="joinSave.php" name="join" method="post">
                        <fieldset>
                            <legend class="blind">회원가입</legend>
                            <div>
                                <label for="youEmail">이메일</label>
                                <input type="email" id="youEmail" name="youEmail" class="input_style1" placeholder="이메일을 적어주세요!" required>
                            </div>
                            <div>
                                <label for="youName">이름</label>
                                <input type="text" id="youName" name="youName" class="input_style1" placeholder="이름을 적어주세요!" required>
                            </div>
                            <div>
                                <label for="youPass">비밀번호</label>
                                <input type="password" id="youPass" name="youPass" class="input_style1" placeholder="비밀번호를 적어주세요!" required>
                            </div>
                            <div>
                                <label for="youPassC">비밀번호 확인</label>
                                <input type="password" id="youPassC" name="youPassC" class="input_style1" placeholder="확인 비밀번호를 적어주세요!" required>
                            </div>
                            <div>
                                <label for="youPhone">휴대폰번호</label>
                                <input type="text" id="youPhone" name="youPhone" class="input_style1" placeholder="휴대폰번호를 적어주세요!" required>
                            </div>
                            <button class="btn_style1 mt50" type="submit">회원가입 완료</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </section>

    </main>
    <!-- //main -->
</body>
</html>
