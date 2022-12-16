<template>
  <section id="textType" class="text__wrap" :class="attr">
    <span>텍스트 유형01</span>
    <h2 class="mb70">스크립트를 익히는 방법</h2>
    <div class="text__innner" :class="layout">
      <div class="text t1">
        <h3 class="text__title">검색 이펙트</h3>
        <p class="text__desc">
          자바스크립트의 기본 메서드를 통해 검색 스크립트를 완성하는
          튜토리얼입니다. 메서드를 통해 쉽게 검색을 만들 수 있습니다.
        </p>
        <a class="text_btn" href="/">더보기</a>
      </div>
      <div class="text t2">
        <h3 class="text__title">퀴즈 이펙트</h3>
        <p class="text__desc">
          자바스크립트의 기본 메서드를 통해 검색 스크립트를 완성하는
          튜토리얼입니다. 메서드를 통해 쉽게 검색을 만들 수 있습니다.
        </p>
        <a class="text_btn" href="/">더보기</a>
      </div>
      <div class="text t3">
        <h3 class="text__title">마우스 이펙트</h3>
        <p class="text__desc">
          자바스크립트의 기본 메서드를 통해 검색 스크립트를 완성하는
          튜토리얼입니다. 메서드를 통해 쉽게 검색을 만들 수 있습니다.
        </p>
        <a class="text_btn" href="/">더보기</a>
      </div>
      <div class="text t4">
        <h3 class="text__title">슬라이드 이펙트</h3>
        <p class="text__desc">
          자바스크립트의 기본 메서드를 통해 검색 스크립트를 완성하는
          튜토리얼입니다. 메서드를 통해 쉽게 검색을 만들 수 있습니다.
        </p>
        <a class="text_btn" href="/">더보기</a>
      </div>
      <div class="text t5">
        <h3 class="text__title">패럴랙스 이펙트</h3>
        <p class="text__desc">
          자바스크립트의 기본 메서드를 통해 검색 스크립트를 완성하는
          튜토리얼입니다. 메서드를 통해 쉽게 검색을 만들 수 있습니다.
        </p>
        <a class="text_btn" href="/">더보기</a>
      </div>
      <div class="text t6">
        <h3 class="text__title">게임 이펙트</h3>
        <p class="text__desc">
          자바스크립트의 기본 메서드를 통해 검색 스크립트를 완성하는
          튜토리얼입니다. 메서드를 통해 쉽게 검색을 만들 수 있습니다.
        </p>
        <a class="text_btn" href="/">더보기</a>
      </div>
    </div>
  </section>
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
.text__innner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.text {
  width: 32%;
  margin-bottom: 2%;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px;
  transition: background 0.4s;
}
.text:hover {
  background: #f5f5f5;
}
.text__title {
  font-size: 24px;
  line-height: 1;
  margin-bottom: 10px;
  white-space: nowrap;
  text-overflow: ellipsis;
  position: relative;
  padding-top: 75px;
}
.text__title::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 60px;
  height: 60px;
  background: url(../../assets/img/text_icon.svg);
}
.text.t1 .text__title::before {
  background-position: 0 0;
}
.text.t2 .text__title::before {
  background-position: -60px 0;
}
.text.t3 .text__title::before {
  background-position: -120px 0;
}
.text.t4 .text__title::before {
  background-position: -180px 0;
}
.text.t5 .text__title::before {
  background-position: -240px 0;
}
.text.t6 .text__title::before {
  background-position: -300px 0;
}
.text__desc {
  font-size: 18px;
  font-weight: 300;
  line-height: 1.4;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  color: #666;
  margin-bottom: 20px;
}
.text_btn {
  font-size: 16px;
  line-height: 1;
  text-decoration: underline;
  text-underline-position: under;
  color: #666;
}

@media (max-width: 960px) {
  .text {
    width: 49%;
    background: #f5f5f5;
  }
}
@media (max-width: 600px) {
  .text__title {
    font-size: 20px;
  }
  .text__desc {
    font-size: 16px;
  }
}
@media (max-width: 480px) {
  .text {
    width: 100%;
  }
}
</style>
