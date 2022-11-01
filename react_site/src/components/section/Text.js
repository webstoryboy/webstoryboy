import React from "react";

const textText = [
  {
    iconClass: "t1",
    title: "검색 이펙트",
    desc: "자바스크립트의 기본 메서드를 통해 검색 스크립트를 완성하는 튜토리얼입니다. 메서드를 통해 쉽게 검색을 만들 수 있습니다.",
    moreLink: "/",
  },
  {
    iconClass: "t2",
    title: "퀴즈 이펙트",
    desc: "자바스크립트의 기본 메서드를 통해 검색 스크립트를 완성하는 튜토리얼입니다. 메서드를 통해 쉽게 검색을 만들 수 있습니다.",
    moreLink: "/",
  },
  {
    iconClass: "t3",
    title: "마우스 이펙트",
    desc: "자바스크립트의 기본 메서드를 통해 검색 스크립트를 완성하는 튜토리얼입니다. 메서드를 통해 쉽게 검색을 만들 수 있습니다.",
    moreLink: "/",
  },
  {
    iconClass: "t4",
    title: "슬라이드 이펙트",
    desc: "자바스크립트의 기본 메서드를 통해 검색 스크립트를 완성하는 튜토리얼입니다. 메서드를 통해 쉽게 검색을 만들 수 있습니다.",
    moreLink: "/",
  },
  {
    iconClass: "t5",
    title: "패럴랙스 이펙트",
    desc: "자바스크립트의 기본 메서드를 통해 검색 스크립트를 완성하는 튜토리얼입니다. 메서드를 통해 쉽게 검색을 만들 수 있습니다.",
    moreLink: "/",
  },
  {
    iconClass: "t6",
    title: "게임 이펙트",
    desc: "자바스크립트의 기본 메서드를 통해 검색 스크립트를 완성하는 튜토리얼입니다. 메서드를 통해 쉽게 검색을 만들 수 있습니다.",
    moreLink: "/",
  },
];

function TextDesc({ iconClass, title, desc, moreLink }) {
  return (
    <div className={`text ${iconClass}`}>
      <h3 className="text__title">{title}</h3>
      <p className="text__desc">{desc}</p>
      <a className="text_btn" href={moreLink}>
        더보기
      </a>
    </div>
  );
}

function Text({ attr }) {
  return (
    <section id="textType" className={`text__wrap ${attr[0]} ${attr[1]}`}>
      <span>텍스트 유형01</span>
      <h2 className="mb70">스크립트를 익히는 방법</h2>
      <div className={`text__innner ${attr[2]}`}>
        {textText.map((desc, index) => (
          <TextDesc
            key={index}
            iconClass={desc.iconClass}
            title={desc.title}
            desc={desc.desc}
            moreLink={desc.moreLink}
          />
        ))}
      </div>
    </section>
  );
}

export default Text;
