import React from "react";

const cardTitle = {
  title: "프론트앤드 강의 💻",
  desc: "웹 디자이너, 웹 퍼블리셔, 프론트앤드를 위한 강의 리스트 입니다.",
};

const cardText = [
  {
    title: "웹표준 사이트 만들기",
    desc: "사이트를 만들기 위한 기초 강의입니다. 기본 코딩에 대한 감각을 익히고, 웹 표준을 준수하면서 코딩하는 방법을 익힙니다. 다양한 예제를 통해 사이트를 만드는 기본입니다.",
    btn: "더 자세히 보기",
    btnLink: "/",
    img: "assets/img/card_bg01_01.jpg",
  },
  {
    title: "반응형 사이트 만들기",
    desc: "사이트를 만들기 위한 기초 강의입니다. 기본 코딩에 대한 감각을 익히고, 웹 표준을 준수하면서 코딩하는 방법을 익힙니다. 다양한 예제를 통해 사이트를 만드는 기본입니다.",
    btn: "더 자세히 보기",
    btnLink: "/",
    img: "assets/img/card_bg01_02.jpg",
  },
  {
    title: "리액트 사이트 만들기",
    desc: "사이트를 만들기 위한 기초 강의입니다. 기본 코딩에 대한 감각을 익히고, 웹 표준을 준수하면서 코딩하는 방법을 익힙니다. 다양한 예제를 통해 사이트를 만드는 기본입니다.",
    btn: "더 자세히 보기",
    btnLink: "/",
    img: "assets/img/card_bg01_03.jpg",
  },
];

function CardInner({ title, desc, btn, btnLink, img }) {
  return (
    <article className="card">
      <figure className="card__header">
        <img src={img} alt={title} />
      </figure>
      <div className="card__body">
        <h3 className="tit">{title}</h3>
        <p className="desc">{desc}</p>
        <a className="btn" href={btnLink}>
          {btn}
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
  );
}

function Card({ attr }) {
  return (
    <section id="cardType" className={`card__wrap ${attr[0]} ${attr[1]}`}>
      <h2>{cardTitle.title}</h2>
      <p>{cardTitle.desc}</p>
      <div className={`card__inner ${attr[2]}`}>
        {cardText.map((card, index) => (
          <CardInner
            key={index}
            title={card.title}
            desc={card.desc}
            btn={card.btn}
            btnLink={card.btnLink}
            img={card.img}
          />
        ))}
      </div>
    </section>
  );
}

export default Card;
