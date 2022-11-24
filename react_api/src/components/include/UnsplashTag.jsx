import React from "react";

const unsplashList = [
  { name: "spring" },
  { name: "beach" },
  { name: "tokyo" },
  { name: "disney" },
  { name: "travel" },
  { name: "japan" },
];

function UnsplashTag({ onSearch }) {
  function btnClick(e) {
    onSearch(e.target.innerHTML);
  }
  return (
    <section className="unsplash__tag">
      <div className="container">
        {unsplashList.map((list, index) => (
          <button onClick={btnClick} key={index}>
            {list.name}
          </button>
        ))}
      </div>
    </section>
  );
}

export default UnsplashTag;
