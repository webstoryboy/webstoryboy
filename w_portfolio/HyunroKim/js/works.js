gsap.registerPlugin(ScrollTrigger);

const pageContainer = document.querySelector("#container");

// SMOOTH SCROLL
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

// CARD ENTER
$(".card").mouseenter(function () {
  gsap.fromTo(
    $(this).siblings(".card__info"),
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      ease: Power1.easeInOut,
    }
  );
});

// CARD LEAVE
$(".card").mouseleave(function () {
  gsap.to($(this).siblings(".card__info"), {
    y: -50,
    opacity: 0,
    ease: Power1.easeInOut,
  });
});
