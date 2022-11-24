import React, { useRef } from "react";

const UnsplashSearch = ({ onSearch }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const onClick = () => {
    handleSearch();
  };

  return (
    <section className="unsplash__search search">
      <div className="container">
        <h2>검색하기</h2>
        <input
          ref={inputRef}
          type="search"
          placeholder="검색하세요!"
          onKeyPress={onKeyPress}
        />
        <button type="submit" onClick={onClick}>
          검색
        </button>
      </div>
    </section>
  );
};

export default UnsplashSearch;
