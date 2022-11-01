import React from "react";

const bannerText = {
  title: "유튜버 웹보이",
  desc: "더 다양한 강의는 유튜브를 통해 제공하고 있습니다.",
  small: "배너 유형01",
  link: "/",
  linkDesc: "youtube.com/c/Webstoryboy",
};

function banner({ fonts }) {
  return (
    <section id="bannerType" className={`banner__wrap ${fonts}`}>
      <h2 className="blind">배너 영역</h2>
      <div className="banner__inner">
        <h3 className="title">{bannerText.title}</h3>
        <p className="desc">
          {bannerText.desc}
          <a href={bannerText.link} title="유튜브 페이지로 이동">
            {bannerText.linkDesc}
          </a>
        </p>
        <span className="small">{bannerText.small}</span>
      </div>
    </section>
  );
}

export default banner;
