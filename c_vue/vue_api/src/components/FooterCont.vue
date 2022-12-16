<template>
  <footer id="footer">
    <div class="footer__inner">
      <div>
        <h3>email</h3>
        <a href="mailto:webstoryboy@naver.com">webstoryboy@naver</a>
      </div>
      <div>
        <h3>kakao</h3>
        <a href="/">webstoryoby</a>
      </div>
      <div>
        <h3>social</h3>
        <ul>
          <li>
            <a href="/">youtube</a>
          </li>
          <li>
            <a href="/">instargram</a>
          </li>
          <li>
            <a href="/">github</a>
          </li>
          <li>
            <a href="/">blog</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
#footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: var(--black);
  background-color: var(--bg-light);
  border-top: 1px solid var(--bg-light-border);
  z-index: 1000;
}

.footer__inner {
  display: flex;
  align-items: center;
  font-family: var(--font-sub2);

  div {
    text-align: center;

    &:nth-child(1) {
      flex: 1 1 30%;
      border-right: 1px solid var(--bg-light-border);
    }
    &:nth-child(2) {
      flex: 1 1 30%;
      border-right: 1px solid var(--bg-light-border);
    }
    &:nth-child(3) {
      flex: 1 1 40%;
    }
  }
  h3 {
    padding: 20px;
  }
  h3,
  ul,
  li {
    display: inline-block;
  }
  a {
    display: inline-block;
    margin: 23px;
    color: var(--black);
    opacity: 0.6;
    position: relative;
    transition: opacity 0.3s;
    text-transform: capitalize;

    &:hover {
      opacity: 1;
    }

    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      background: var(--black);
      transform: scaleX(0);
      transition: all 0.3s ease;
    }
    &:hover::before {
      transform: scaleX(1);
    }
  }
}
</style>
