<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <!-- CSS -->
    <link rel="stylesheet" href="../assets/css/style.css">
    <link rel="stylesheet" href="../assets/css/login.css">
</head>
<body>
    
    <main id="main">
        <section id="login" class="container section">
            <h2>Sign In</h2>
            <p>
                If you want to close with me, please Sign In!<br>
            </p>
            <div class="login__inner">
                <div class="login__contents">
                    <form name="login" action="loginSave.php" method="post">
                        <fieldset>
                            <legend class="blind">login form</legend>
                            <div>
                                <label class="blind" for="youEmail">email</label>
                                <input type="email" name="youEmail" id="youEmail" class="input_style1" placeholder="이메일" class="input__style" required>
                            </div>
                            <div>
                                <label class="blind" for="youPass">password</label>
                                <input type="password" name="youPass" id="youPass" class="input_style1" placeholder="비밀번호" class="input__style" required>
                            </div>
                            <div class="btns">
                                <button type="submit" class="btn_style1 mt20">SIGN IN</button>
                                <button type="submit" class="btn_style2 mt20"><a href="join.php">SIGN UP</a></button>
                            </div>
                        </fieldset>
                    </form>
                </div>
                <div class="login__footer">
                    
                    <div class="desc">
                        <ul>
                            <li><a href="#" class="link">Forget Email</a></li>
                            <li><a href="#" class="link">Forget Password</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <!-- //login -->
    </main>
    <!-- //main -->

</body>
</html>