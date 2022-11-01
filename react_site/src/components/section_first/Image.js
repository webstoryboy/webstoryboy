import React from "react";

function Image(props) {
  return (
    <section
      id="imageType"
      className={`image__wrap ${props.attr[0]} ${props.attr[1]}`}
    >
      <h2>포트폴리오가 실력이다. 💻</h2>
      <p>웹 디자이너, 웹 퍼블리셔, 프론트앤드를 위한 포트폴리오 입니다. </p>
      <div className={`image__inner ${props.attr[2]}`}>
        <article className="image img1">
          <h3 className="image__title">프론트앤드 포트폴리오</h3>
          <p className="image__desc">
            취업에 있어 포트폴리오는 아주 중요합니다. 그 동안 배웠던 내용들을
            포폴에 잘 표현해 놓으며, 취업에 있어 한 걸음 더 다가설 수 있습니다.
          </p>
          <a className="image__btn" href="/" title="자세히 보기">
            자세히 보기
          </a>
        </article>
        <article className="image img2">
          <h3 className="image__title">퍼블리셔 포트폴리오</h3>
          <p className="image__desc">
            취업에 있어 포트폴리오는 아주 중요합니다. 그 동안 배웠던 내용들을
            포폴에 잘 표현해 놓으며, 취업에 있어 한 걸음 더 다가설 수 있습니다.
          </p>
          <a className="image__btn yellow" href="/" title="자세히 보기">
            자세히 보기
          </a>
        </article>
      </div>
    </section>
  );
}

export default Image;
