import React from "react";

const imageTitle = {
  title: "포트폴리오가 실력이다. 💻",
  desc: "웹 디자이너, 웹 퍼블리셔, 프론트앤드를 위한 포트폴리오 입니다.",
};

const imageText = [
  {
    title: "프론트앤드 포트폴리오",
    desc: "취업에 있어 포트폴리오는 아주 중요합니다. 그 동안 배웠던 내용들을 포폴에 잘 표현해 놓으며, 취업에 있어 한 걸음 더 다가설 수 있습니다.",
    imgClass: "img1",
    btnClass: "basic",
    btnLink: "/",
  },
  {
    title: "퍼블리셔 포트폴리오",
    desc: "취업에 있어 포트폴리오는 아주 중요합니다. 그 동안 배웠던 내용들을 포폴에 잘 표현해 놓으며, 취업에 있어 한 걸음 더 다가설 수 있습니다.",
    imgClass: "img2",
    btnClass: "yellow",
    btnLink: "/",
  },
];

function ImageInner({ title, desc, imgClass, btnClass, btnLink }) {
  return (
    <article className={`image ${imgClass}`}>
      <h3 className="image__title">{title}</h3>
      <p className="image__desc">{desc}</p>
      <a
        className={`image__btn ${btnClass}`}
        href={btnLink}
        title="자세히 보기"
      >
        자세히 보기
      </a>
    </article>
  );
}

function Image(props) {
  return (
    <section
      id="imageType"
      className={`image__wrap ${props.attr[0]} ${props.attr[1]}`}
    >
      <h2>{imageTitle.title}</h2>
      <p>{imageTitle.desc}</p>

      <div className={`image__inner ${props.attr[2]}`}>
        {imageText.map((img, index) => (
          <ImageInner
            key={index}
            title={img.title}
            desc={img.desc}
            imgClass={img.imgClass}
            btnClass={img.btnClass}
            btnLink={img.btnLink}
          />
        ))}
      </div>
    </section>
  );
}

export default Image;
