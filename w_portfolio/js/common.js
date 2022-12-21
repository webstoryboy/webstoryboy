// 반응형 메뉴
if (window.innerWidth < 1024) {
  $("#header__right").click(() => {
    if ($("#header__right").hasClass("clicked")) {
      // 메뉴 닫힘
      $("#header__right").removeClass("clicked");
      gsap.to("#header__burger div:first-child", {
        transform: "rotate(0)",
        marginBottom: "1rem",
      });
      gsap.to("#header__burger div:last-child", {
        transform: "rotate(0)",
      });

      gsap.to(".resMenu", {
        right: "-100%",
        ease: Expo.easeInOut,
        display: "none",
      });
    } else {
      // 메뉴 열림
      $("#header__right").addClass("clicked");
      gsap.to("#header__burger div:first-child", {
        transform: "rotate(45deg)",
        margin: 0,
      });
      gsap.to("#header__burger div:last-child", {
        transform: "rotate(-45deg)",
      });

      gsap.fromTo(
        ".resMenu",
        {
          display: "block",
        },
        {
          right: "0",
          ease: Expo.easeInOut,
        }
      );
      gsap.fromTo(
        ".resMenu li a",
        {
          opacity: 1,
          y: 100,
        },
        {
          y: 0,
          ease: Power1.easeInOut,
          stagger: 0.1,
          delay: 0.5,
        }
      );
    }
  });
}
