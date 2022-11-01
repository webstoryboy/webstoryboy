import React from "react";

function Text({ attr }) {
  return (
    <section id="textType" className={`text__wrap ${attr[0]} ${attr[1]}`}>
      <span>텍스트 유형01</span>
      <h2 className="mb70">스크립트를 익히는 방법</h2>
      <div className={`text__innner ${attr[2]}`}>
        <div className="text t1">
          <h3 className="text__title">검색 이펙트</h3>
          <p className="text__desc">
            자바스크립트의 기본 메서드를 통해 검색 스크립트를 완성하는
            튜토리얼입니다. 메서드를 통해 쉽게 검색을 만들 수 있습니다.
          </p>
          <a className="text_btn" href="/">
            더보기
          </a>
        </div>
        <div className="text t2">
          <h3 className="text__title">퀴즈 이펙트</h3>
          <p className="text__desc">
            자바스크립트의 기본 메서드를 통해 검색 스크립트를 완성하는
            튜토리얼입니다. 메서드를 통해 쉽게 검색을 만들 수 있습니다.
          </p>
          <a className="text_btn" href="/">
            더보기
          </a>
        </div>
        <div className="text t3">
          <h3 className="text__title">마우스 이펙트</h3>
          <p className="text__desc">
            자바스크립트의 기본 메서드를 통해 검색 스크립트를 완성하는
            튜토리얼입니다. 메서드를 통해 쉽게 검색을 만들 수 있습니다.
          </p>
          <a className="text_btn" href="/">
            더보기
          </a>
        </div>
        <div className="text t4">
          <h3 className="text__title">슬라이드 이펙트</h3>
          <p className="text__desc">
            자바스크립트의 기본 메서드를 통해 검색 스크립트를 완성하는
            튜토리얼입니다. 메서드를 통해 쉽게 검색을 만들 수 있습니다.
          </p>
          <a className="text_btn" href="/">
            더보기
          </a>
        </div>
        <div className="text t5">
          <h3 className="text__title">패럴랙스 이펙트</h3>
          <p className="text__desc">
            자바스크립트의 기본 메서드를 통해 검색 스크립트를 완성하는
            튜토리얼입니다. 메서드를 통해 쉽게 검색을 만들 수 있습니다.
          </p>
          <a className="text_btn" href="/">
            더보기
          </a>
        </div>
        <div className="text t6">
          <h3 className="text__title">게임 이펙트</h3>
          <p className="text__desc">
            자바스크립트의 기본 메서드를 통해 검색 스크립트를 완성하는
            튜토리얼입니다. 메서드를 통해 쉽게 검색을 만들 수 있습니다.
          </p>
          <a className="text_btn" href="/">
            더보기
          </a>
        </div>
      </div>
    </section>
  );
}

export default Text;
