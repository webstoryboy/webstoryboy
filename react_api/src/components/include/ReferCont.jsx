import React from "react";

const referInfo = [
  {
    num: 1,
    name: "animation-delay",
    desc: "animation-delay는 애니메이션의 지연 시간을 설정합니다.",
    star: "★★★☆☆",
  },
  {
    num: 2,
    name: "backdrop-filter",
    desc: "backdrop-filter 속성은 배경에 그래픽 효과를 설정합니다.",
    star: "★★★☆☆",
  },
  {
    num: 3,
    name: "backface-visibility",
    desc: "backface-visibility 속성은 요소의 뒷면을 설정합니다. 요소가 3D인 경우에서 설정 할 수 있습니다.",
    star: "★★★☆☆",
  },
  {
    num: 4,
    name: "background-attachment",
    desc: "background-attachment 속성은 배경 이미지의 고정 여부를 설정합니다.",
    star: "★★★☆☆",
  },
  {
    num: 5,
    name: "background-blend-mode",
    desc: "background-blend-mode 속성은 배경을 혼합했을 때의 상태를 설정합니다.",
    star: "★★★★☆",
  },
  {
    num: 6,
    name: "background-clip",
    desc: "background-clip 속성은 백그라운드 이미지의 위치 기준점을 설정하기 위한 속성입니다.",
    star: "★★★★☆",
  },
  {
    num: 7,
    name: "background-color",
    desc: "background-color 속성은 백그라운드 색을 설정합니다.",
    star: "★★★★☆",
  },
  {
    num: 8,
    name: "background-image",
    desc: "background-image 속성은 백그라운드 이미지 및 배경 속성을 설정합니다.",
    star: "★★☆☆☆",
  },
  {
    num: 9,
    name: "background-origin",
    desc: "background-origin 속성은 백그라운드 이미지의 위치 기준점을 설정하기 위한 속성입니다.",
    star: "★★☆☆☆",
  },
  {
    num: 10,
    name: "background-position",
    desc: "background-position 속성은 백그라운드 이미지의 위치 영역을 설정합니다.",
    star: "★★★★☆",
  },
];

const ReferText = ({ num, name, desc, star }) => {
  return (
    <li>
      <a href="/">
        <span className="num">{num}</span>
        <span className="name">{name}</span>
        <span className="desc">{desc}</span>
        <span className="star">{star}</span>
      </a>
    </li>
  );
};

const ReferCont = () => {
  return (
    <section className="cont__refer">
      <div className="container">
        <div className="refer__inner">
          <h2>CSS</h2>
          <ul className="refer__list">
            {referInfo.map((info) => (
              <ReferText
                num={info.num}
                name={info.name}
                desc={info.desc}
                star={info.star}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ReferCont;
