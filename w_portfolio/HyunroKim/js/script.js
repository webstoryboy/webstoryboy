gsap.registerPlugin(ScrollTrigger);

const pageContainer = document.querySelector("#container");

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

if (window.innerWidth > 1024) {
  window.addEventListener("load", function () {
    let pinWrap = document.querySelector("#scripts__carousel ul");
    let pinWrapWidth = pinWrap.offsetWidth;
    let horizontalScrollLength = pinWrapWidth - window.innerWidth;

    // Pinning and horizontal scrolling

    gsap.to("#scripts__carousel ul", {
      scrollTrigger: {
        scroller: pageContainer, //locomotive-scroll
        scrub: true,
        trigger: "#scripts__carousel",
        pin: true,
        start: "top top",
        end: pinWrapWidth,
      },
      x: -horizontalScrollLength,
      ease: "none",
    });

    ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll

    ScrollTrigger.refresh();
  });
}

if (window.innerWidth > 1024) {
  $(".card").click(function (e) {
    e.preventDefault();
    $(".iframe").attr(
      "src",
      `https://perfectplan-${$(e.currentTarget).attr("name")}.netlify.app/`
    );
    gsap.to(".popupBG", {
      display: "block",
    });
    gsap.fromTo(
      ".popupBG li",
      {
        x: "100%",
      },
      {
        x: "0",
        duration: 1.5,
        stagger: 0.1,
        ease: Expo.easeInOut,
      }
    );
    gsap.fromTo(
      ".popup",
      {
        x: "100%",
        display: "block",
      },
      {
        x: "0",
        duration: 1,
        ease: Power3.easeInOut,
        delay: 1,
      }
    );
    setTimeout(() => {
      $(".popupBG").css("display", "none");
    }, 2000);
  });
  $(".popup .exit").click(function (e) {
    e.preventDefault();

    gsap.to(".popup", {
      x: "-100%",
      duration: 1,
      ease: Power3.easeInOut,
    });
  });
} else {
  $(".card").click(function (e) {
    e.preventDefault();
    window.open(
      `https://perfectplan-${$(e.currentTarget).attr("name")}.netlify.app/`,
      "_blank"
    );
  });
}
