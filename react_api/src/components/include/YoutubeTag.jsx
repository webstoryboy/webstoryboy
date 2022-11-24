import React from "react";

const youtubeList = [
  { name: "webstoryboy" },
  { name: "coding" },
  { name: "javascript" },
  { name: "ReactJS" },
  { name: "NextJS" },
  { name: "Music" },
];

function YoutubeTag({ onSearch }) {
  function btnClick(e) {
    onSearch(e.target.innerHTML);
  }
  return (
    <section className="youtube__tag">
      <div className="container">
        {youtubeList.map((list, index) => (
          <button onClick={btnClick} key={index}>
            {list.name}
          </button>
        ))}
      </div>
    </section>
  );
}

export default YoutubeTag;
