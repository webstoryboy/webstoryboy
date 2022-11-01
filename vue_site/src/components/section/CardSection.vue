<template>
  <section id="cardType" class="card__wrap" :class="attr">
    <h2>프론트앤드 강의 💻</h2>
    <p>웹 디자이너, 웹 퍼블리셔, 프론트앤드를 위한 강의 리스트 입니다.</p>
    <div class="card__inner" :class="layout">
      <article class="card">
        <figure class="card__header">
          <img
            src="../../assets/img/card_bg01_01.jpg"
            alt="웹표준 사이트 만들기"
          />
        </figure>
        <div class="card__body">
          <h3 class="tit">웹표준 사이트 만들기</h3>
          <p class="desc">
            사이트를 만들기 위한 기초 강의입니다. 기본 코딩에 대한 감각을
            익히고, 웹 표준을 준수하면서 코딩하는 방법을 익힙니다. 다양한 예제를
            통해 사이트를 만드는 기본입니다.
          </p>
          <a class="btn" href="/">
            더 자세히 보기
            <span aria-hidden="true">
              <svg
                width="65"
                height="8"
                viewBox="0 0 65 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M64.3536 4.35355C64.5488 4.15829 64.5488 3.84171 64.3536 3.64645L61.1716 0.464466C60.9763 0.269204 60.6597 0.269204 60.4645 0.464466C60.2692 0.659728 60.2692 0.976311 60.4645 1.17157L63.2929 4L60.4645 6.82843C60.2692 7.02369 60.2692 7.34027 60.4645 7.53553C60.6597 7.7308 60.9763 7.7308 61.1716 7.53553L64.3536 4.35355ZM0 4.5H64V3.5H0V4.5Z"
                  fill="black"
                />
              </svg>
            </span>
          </a>
        </div>
      </article>
      <article class="card">
        <figure class="card__header">
          <img
            src="../../assets/img/card_bg01_02.jpg"
            alt="웹표준 사이트 만들기"
          />
        </figure>
        <div class="card__body">
          <h3 class="tit">웹표준 사이트 만들기</h3>
          <p class="desc">
            사이트를 만들기 위한 기초 강의입니다. 기본 코딩에 대한 감각을
            익히고, 웹 표준을 준수하면서 코딩하는 방법을 익힙니다. 다양한 예제를
            통해 사이트를 만드는 기본입니다.
          </p>
          <a class="btn" href="/">
            더 자세히 보기
            <span aria-hidden="true">
              <svg
                width="65"
                height="8"
                viewBox="0 0 65 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M64.3536 4.35355C64.5488 4.15829 64.5488 3.84171 64.3536 3.64645L61.1716 0.464466C60.9763 0.269204 60.6597 0.269204 60.4645 0.464466C60.2692 0.659728 60.2692 0.976311 60.4645 1.17157L63.2929 4L60.4645 6.82843C60.2692 7.02369 60.2692 7.34027 60.4645 7.53553C60.6597 7.7308 60.9763 7.7308 61.1716 7.53553L64.3536 4.35355ZM0 4.5H64V3.5H0V4.5Z"
                  fill="black"
                />
              </svg>
            </span>
          </a>
        </div>
      </article>
      <article class="card">
        <figure class="card__header">
          <img
            src="../../assets/img/card_bg01_03.jpg"
            alt="웹표준 사이트 만들기"
          />
        </figure>
        <div class="card__body">
          <h3 class="tit">웹표준 사이트 만들기</h3>
          <p class="desc">
            사이트를 만들기 위한 기초 강의입니다. 기본 코딩에 대한 감각을
            익히고, 웹 표준을 준수하면서 코딩하는 방법을 익힙니다. 다양한 예제를
            통해 사이트를 만드는 기본입니다.
          </p>
          <a class="btn" href="/">
            더 자세히 보기
            <span aria-hidden="true">
              <svg
                width="65"
                height="8"
                viewBox="0 0 65 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M64.3536 4.35355C64.5488 4.15829 64.5488 3.84171 64.3536 3.64645L61.1716 0.464466C60.9763 0.269204 60.6597 0.269204 60.4645 0.464466C60.2692 0.659728 60.2692 0.976311 60.4645 1.17157L63.2929 4L60.4645 6.82843C60.2692 7.02369 60.2692 7.34027 60.4645 7.53553C60.6597 7.7308 60.9763 7.7308 61.1716 7.53553L64.3536 4.35355ZM0 4.5H64V3.5H0V4.5Z"
                  fill="black"
                />
              </svg>
            </span>
          </a>
        </div>
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
/* cartType */
.card__inner {
  display: flex;
  justify-content: space-between;
}
.card {
  width: 32%;
  background: #f5f5f5;
}
.card__body {
  padding: 24px;
}
.card__body .tit {
  font-size: 24px;
  margin-bottom: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.card__body .desc {
  font-size: 18px;
  line-height: 1.4;
  color: #666;
  margin-bottom: 20px;
  font-weight: 300;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}

@media (max-width: 960px) {
  .card__inner {
    flex-wrap: wrap;
  }
  .card {
    width: 49%;
  }
  .card:last-child {
    display: none;
  }
}
@media (max-width: 600px) {
  .card {
    width: 100%;
  }
  .card:first-child {
    margin-bottom: 20px;
  }
  .card__body {
    padding: 20px;
  }
  .card__body .desc {
    font-size: 16px;
  }
}
</style>
