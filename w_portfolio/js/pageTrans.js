window.onload = () => {
  //page
  gsap.fromTo(
    ".pageLoad .text__box .text span",
    {
      y: -100,
      opacity: 1,
    },
    {
      y: 0,
      stagger: 0.05,
      ease: Power1.easeInOut,
    }
  );
  gsap.to(".pageLoad .text__box .text span", {
    y: 200,
    duration: 1,
    stagger: 0.05,
    ease: Power1.easeInOut,
    delay: 1.5,
  });
  gsap.fromTo(
    ".pageLoad .lines .line",
    {
      width: "100%",
    },
    {
      width: 0,
      stagger: 0.1,
      ease: Expo.easeInOut,
      duration: 2,
      delay: 2,
    }
  );
  setTimeout(() => {
    $(".pageLoad").css("z-index", "-1");
  }, 4000);

  //common
  gsap.fromTo(
    "#title span",
    {
      y: 400,
    },
    {
      y: 0,
      duration: 1.5,
      ease: Power3.easeInOut,
      delay: 3,
    }
  );
  gsap.fromTo(
    "#header",
    {
      y: 10,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: Power3.easeInOut,
      delay: 3.5,
    }
  );
  gsap.fromTo(
    "#menu",
    {
      y: 10,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: Power3.easeInOut,
      delay: 3.5,
    }
  );

  // index
  gsap.fromTo(
    ".star",
    {
      y: 10,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: Power1.easeInOut,
      delay: 4,
    }
  );
  gsap.fromTo(
    ".vector",
    {
      y: 10,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: Power1.easeInOut,
      delay: 4,
    }
  );
  gsap.fromTo(
    "#footer__sns",
    {
      y: 10,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: Power1.easeInOut,
      delay: 4,
    }
  );
  gsap.fromTo(
    "#work__inner",
    {
      y: 10,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: Power3.easeInOut,
      delay: 4,
    }
  );

  // about
  gsap.fromTo(
    ".about__inner",
    {
      y: 10,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: Power3.easeInOut,
      delay: 4,
    }
  );

  // works
  gsap.fromTo(
    "#footer__text",
    {
      y: 10,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: Power3.easeInOut,
      delay: 4,
    }
  );

  // scripts
  gsap.fromTo(
    "#scripts__carousel",
    {
      y: 10,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: Power3.easeInOut,
      delay: 4,
    }
  );

  // contact
  gsap.fromTo(
    ".contact__box",
    {
      y: 10,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: Power3.easeInOut,
      delay: 4,
    }
  );
};

// 버튼 클릭
$(".link").click(function (e) {
  e.preventDefault();
  $(".pageLoad").css("z-index", "10");
  gsap.fromTo(
    ".pageLoad .lines .line",
    {
      width: 0,
    },
    {
      width: "100%",
      stagger: -0.1,
      ease: Expo.easeInOut,
      duration: 2,
    }
  );
  setTimeout(() => {
    location.href = $(this).attr("name") + ".html";
  }, 2500);
});
