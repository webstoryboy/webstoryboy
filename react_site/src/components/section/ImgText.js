import React from "react";

const imgTitle = {
  span: "이미지 텍스트 유형01",
  title: "유용한 사이트 살펴보기",
  desc: "웹디자이너, 웹 퍼블리셔, 프론트앤드 개발자를 위한 유용한사이트입니다.",
  list: [
    "튜토리얼 사이트",
    "레퍼런스 사이트",
    "웹폰트 사이트",
    "CSS 사이트",
    "WebGL 사이트",
    "Youtube 사이트",
  ],
};

const imgTextDesc = [
  {
    title: "레퍼런스 사이트",
    imgClass: "img1",
    btnClass: "basic",
    link: "/",
  },
  {
    title: "튜토리얼 사이트",
    imgClass: "img2",
    btnClass: "blue",
    link: "/",
  },
];

function ImgDesc({ title, imgClass, btnClass, link }) {
  return (
    <div className={`imgText__img ${imgClass}`}>
      <a href={link} className={btnClass}>
        {title}
      </a>
    </div>
  );
}

function imgText({ attr }) {
  return (
    <section
      id="imgTextType"
      className={`imgText__wrap ${attr[0]} ${attr[1]} ${attr[2]}`}
    >
      <h2 className="blind">유용한 사이트 살펴보기</h2>
      <div className={`imgText__inner ${attr[3]}`}>
        <div className="imgText__txt">
          <span>{imgTitle.span}</span>
          <h3>{imgTitle.title}</h3>
          <p>{imgTitle.desc}</p>
          <ul>
            <li>
              <a href="/">{imgTitle.list[0]}</a>
            </li>
            <li>
              <a href="/">{imgTitle.list[1]}</a>
            </li>
            <li>
              <a href="/">{imgTitle.list[2]}</a>
            </li>
            <li>
              <a href="/">{imgTitle.list[3]}</a>
            </li>
            <li>
              <a href="/">{imgTitle.list[4]}</a>
            </li>
            <li>
              <a href="/">{imgTitle.list[5]}</a>
            </li>
          </ul>
        </div>
        {imgTextDesc.map((desc, index) => (
          <ImgDesc
            key={index}
            title={desc.title}
            imgClass={desc.imgClass}
            btnClass={desc.btnClass}
            link={desc.link}
          />
        ))}
      </div>
    </section>
  );
}

export default imgText;
