<template>
  <footer id="footerType" class="footer__wrap" :class="attr">
    <h2 class="blind">푸터 영역</h2>
    <div class="footer__inner" :class="layout">
      <div class="footer__menu">
        <div>
          <h3>사이트</h3>
          <ul>
            <li><a href="/">웹표준 사이트</a></li>
            <li><a href="/">반응형 사이트</a></li>
            <li><a href="/">패럴랙스 사이트</a></li>
            <li><a href="/">포트폴리오 사이트</a></li>
          </ul>
        </div>
        <div>
          <h3>헤더 유형</h3>
          <ul>
            <li><a href="/">헤더 유형01</a></li>
            <li><a href="/">헤더 유형02</a></li>
          </ul>
        </div>
        <div>
          <h3>슬라이드 유형</h3>
          <ul>
            <li><a href="/">슬라이드 유형01</a></li>
            <li><a href="/">슬라이드 유형01</a></li>
          </ul>
        </div>
        <div>
          <h3>이미지 유형</h3>
          <ul>
            <li><a href="/">이미지 유형01</a></li>
            <li><a href="/">이미지 유형02</a></li>
            <li><a href="/">이미지/텍스트 유형01</a></li>
            <li><a href="/">이미지/텍스트 유형01</a></li>
            <li><a href="/">텍스트 유형01</a></li>
          </ul>
        </div>
        <div>
          <h3>카드 유형</h3>
          <ul>
            <li><a href="/">카드 유형01</a></li>
            <li><a href="/">카드 유형02</a></li>
            <li><a href="/">카드 유형03</a></li>
          </ul>
        </div>
        <div>
          <h3>푸터 유형</h3>
          <ul>
            <li><a href="/">푸터 메뉴 유형01</a></li>
            <li><a href="/">푸터 컨택트 유형02</a></li>
            <li><a href="/">푸터 이메일 유형03</a></li>
          </ul>
        </div>
      </div>
      <div class="footer__right">
        2022 Webstoryboy. Portfolio is Power<br />
        All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    attr: String,
    layout: String,
  },
};
</script>

<style>
.footer__menu {
  display: flex;
  margin-bottom: 70px;
}
.footer__menu > div {
  width: 16%;
}
.footer__menu h3 {
  font-size: 18px;
  margin-bottom: 20px;
}
.footer__menu li a {
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
  display: block;
}
.footer__right {
  border-top: 1px solid #d9d9d9;
  text-align: center;
  padding-top: 40px;
  color: #666;
  line-height: 1.5;
}

@media (max-width: 960px) {
  .footer__menu {
    display: none;
  }
  .footer__right {
    padding-top: 0;
    border-top: 0;
  }
  .footer__wrap {
    padding: 40px 0;
  }
}
</style>
