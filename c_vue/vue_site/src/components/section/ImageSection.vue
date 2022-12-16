<template>
  <section id="imageType" class="image__wrap" :class="attr">
    <h2>포트폴리오가 실력이다. 💻</h2>
    <p>웹 디자이너, 웹 퍼블리셔, 프론트앤드를 위한 포트폴리오 입니다.</p>
    <div class="image__inner" :class="layout">
      <article class="image img1">
        <h3 class="image__title">프론트앤드 포트폴리오</h3>
        <p class="image__desc">
          취업에 있어 포트폴리오는 아주 중요합니다. 그 동안 배웠던 내용들을
          포폴에 잘 표현해 놓으며, 취업에 있어 한 걸음 더 다가설 수 있습니다.
        </p>
        <a class="image__btn" href="/" title="자세히 보기">자세히 보기</a>
      </article>
      <article class="image img2">
        <h3 class="image__title">퍼블리셔 포트폴리오</h3>
        <p class="image__desc">
          취업에 있어 포트폴리오는 아주 중요합니다. 그 동안 배웠던 내용들을
          포폴에 잘 표현해 놓으며, 취업에 있어 한 걸음 더 다가설 수 있습니다.
        </p>
        <a class="image__btn yellow" href="/" title="자세히 보기"
          >자세히 보기</a
        >
      </article>
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
/* imageType */
.image__inner {
  display: flex;
  justify-content: space-between;
}
.image {
  width: 49%;
  height: 370px;
  color: #fff;
  padding: 200px 30px 30px 30px;
  box-sizing: border-box;
}
.image.img1 {
  background: url(../../assets/img/image_bg01.jpg) no-repeat center;
}
.image.img2 {
  background: url(../../assets/img/image_bg02.jpg) no-repeat center;
}
.image__title {
  font-size: 32px;
  margin-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.image__desc {
  font-size: 16px;
  font-weight: 300;
  margin-bottom: 10px;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.image__btn {
  font-size: 16px;
  color: #fff;
  background-color: #b45a30;
  padding: 10px 20px;
  display: inline-block;
}
.image__btn.yellow {
  background-color: #b59140;
}

@media (max-width: 600px) {
  .image__inner {
    flex-direction: column;
  }
  .image {
    width: 100%;
    padding: 210px 20px 20px 20px;
  }
  .image:first-child {
    margin-bottom: 20px;
  }
  .image__title {
    font-size: 24px;
  }
}
</style>
