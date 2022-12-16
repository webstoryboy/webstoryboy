import React from "react";

function imgText({ attr }) {
  return (
    <section
      id="imgTextType"
      className={`imgText__wrap ${attr[0]} ${attr[1]} ${attr[2]}`}
    >
      <h2 className="blind">유용한 사이트 살펴보기</h2>
      <div className={`imgText__inner ${attr[3]}`}>
        <div className="imgText__txt">
          <span>이미지 텍스트 유형01</span>
          <h3>유용한 사이트 살펴보기</h3>
          <p>
            웹디자이너, 웹 퍼블리셔, 프론트앤드 개발자를 위한 유용한
            사이트입니다.
          </p>
          <ul>
            <li>
              <a href="/">튜토리얼 사이트</a>
            </li>
            <li>
              <a href="/">레퍼런스 사이트</a>
            </li>
            <li>
              <a href="/">웹폰트 사이트</a>
            </li>
            <li>
              <a href="/">CSS 사이트</a>
            </li>
            <li>
              <a href="/">WebGL 사이트</a>
            </li>
            <li>
              <a href="/">Youtube 사이트</a>
            </li>
          </ul>
        </div>
        <div className="imgText__img img1">
          <a href="/">레퍼런스 사이트</a>
        </div>
        <div className="imgText__img img2">
          <a href="/" className="blue">
            튜토리얼 사이트
          </a>
        </div>
      </div>
    </section>
  );
}

export default imgText;
