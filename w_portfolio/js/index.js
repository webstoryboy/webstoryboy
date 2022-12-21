if (window.innerWidth < 1024) {
  gsap.registerPlugin(ScrollTrigger);

  const pageContainer = document.querySelector("#main__inner");

  /* SMOOTH SCROLL */
  const scroller = new LocomotiveScroll({
    el: pageContainer,
    smooth: true,
  });

  scroller.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(pageContainer, {
    scrollTop(value) {
      return arguments.length
        ? scroller.scrollTo(value, 0, 0)
        : scroller.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        left: 0,
        top: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: pageContainer.style.transform ? "transform" : "fixed",
  });
}

