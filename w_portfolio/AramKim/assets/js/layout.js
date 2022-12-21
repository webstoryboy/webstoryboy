gsap.set(".scroll", { opacity: 0 })

// header
gsap.set("#header", {top: 0, opacity: 1})
gsap.set(".header__line > div:nth-child(1)", {duration: 0, width: "0%"})
gsap.set(".header__line > div:nth-child(2)", {duration: 0, height: "0%"})
gsap.set(".header__line > div:nth-child(3)", {duration: 0, width: "0%"})
gsap.set(".header__line > div:nth-child(4)", {duration: 0, height: "0%"})
gsap.set(".header__inner .title", {duration: 0, transform: "translateY(-6px)", opacity: 0});

if(window.innerWidth >= 910) {
    gsap.set(".header__inner ul li", {duration: 0, y: -10, opacity: 0});
    gsap.set(".header__inner ul li a", {duration: 0, y: -10, opacity: 0});
} else {
    gsap.set(".header__inner .toggleBtn", {duration:0, opacity: 0});
}

//home
gsap.set("#home .mypage .mypage__line > div:nth-child(1)", {duration: 0, width: "0%", opacity: 0})
gsap.set("#home .mypage .mypage__line > div:nth-child(2)", {duration: 0, height: "0%", opacity: 0})
gsap.set("#home .mypage .mypage__line > div:nth-child(3)", {duration: 0, width: "0%", opacity: 0})
gsap.set("#home .mypage .mypage__line > div:nth-child(4)", {duration: 0, height: "0%", opacity: 0})
gsap.set(".mypage .mypage__inner", {duration: 0, opacity: 0})

gsap.set(".home__line > div:nth-child(1)", {duration: 0, width: "0%"})
gsap.set(".home__line > div:nth-child(2)", {duration: 0, height: "0%"})
gsap.set(".home__line > div:nth-child(3)", {duration: 0, width: "0%"})
gsap.set(".home__line > div:nth-child(4)", {duration: 0, height: "0%"})
gsap.set(".home__inner .title h1", {duration: 0, opacity: 0, transform: "rotate(-25deg) translateX(-40px)"})
gsap.set(".home__inner .img__wrap .img", {duration: 0, opacity: 0})
gsap.set(".home__inner .img__wrap .desc h2:nth-child(1)", {duration: 0, opacity: 0})
gsap.set(".home__inner .img__wrap .desc h2:nth-child(2)", {duration: 0, opacity: 0})
gsap.set(".home__inner .img__wrap .desc h2:nth-child(3)", {duration: 0, opacity: 0})
gsap.set(".home__inner .img__wrap .desc h2:nth-child(4)", {duration: 0, opacity: 0})
gsap.set(".home__inner .img__wrap .desc h2:nth-child(5)", {duration: 0, opacity: 0, right: "-50%"})

// about
gsap.set(".about .title", {duration: 0, opacity: 0})
gsap.set(".about .intro__inner .cont.left", {duration: 0, opacity: 0})
gsap.set(".about .intro__inner .cont.right", {duration: 0, opacity: 0})
gsap.set(".about .imgs__inner .img__box > div", {duration: 0, opacity: 0})

// website
gsap.set(".website .title", {duration: 0, opacity: 0})
gsap.set(".site .left .subtitle", {duration: 0, opacity: 0})
gsap.set(".site .left .desc", {duration: 0, opacity: 0})
gsap.set(".website .site .right", {duration: 0, opacity: 0})

// script
gsap.set(".script .title", {duration: 0, opacity: 0})
gsap.set(".script-horizontal .script-hor > div", {duration: 0, opacity: 0})

// frontend
gsap.set(".frontend .title", {duration: 0, opacity: 0})
gsap.set(".frontend .work .imgWrap", {duration: 0, opacity: 0})
gsap.set(".frontend .work .descWrap", {duration: 0, opacity: 0})

// contact
gsap.set(".contact .title", {duration: 0, opacity: 0})
gsap.set(".contact .cont.c1", {duration: 0, opacity: 0})
gsap.set(".contact .cont.c2", {duration: 0, opacity: 0})

// footer 
gsap.set(".footer", {duration: 0, opacity: 0})

setTimeout(() => {
    let tl = gsap.timeline();

    tl.to(".header__line > div:nth-child(1)", {duration: 0.5, width: "calc(100% + 2px)", ease: "linear"});
    tl.to(".header__line > div:nth-child(2)", {duration: 0.3, height: "calc(100% + 4px)", ease: "linear"});
    tl.to(".header__line > div:nth-child(3)", {duration: 0.5, width: "calc(100% + 2px)", ease: "linear"});
    tl.to(".header__line > div:nth-child(4)", {duration: 0.3, height: "calc(100% + 4px)", ease: "linear"});
    tl.to(".header__inner .title", { duration: 0.7, opacity: 1, transform: "translateY(0)" });

    if(window.innerWidth >= 910) {
        tl.to(".header__inner ul li", {duration: 0.5, opacity: 1, y: 0});
        tl.to(".header__inner ul li a", {duration: 0.5, opacity: 1, y: 0});

        tl.to("#home .mypage .mypage__line > div:nth-child(1)", {duration: 0.5, width: "100%", opacity: 1, ease: "linear"})
        tl.to("#home .mypage .mypage__line > div:nth-child(2)", {duration: 0.3, height: "100%", opacity: 1, ease: "linear"})
        tl.to("#home .mypage .mypage__line > div:nth-child(3)", {duration: 0.5, width: "100%", opacity: 1, ease: "linear"})
        tl.to("#home .mypage .mypage__line > div:nth-child(4)", {duration: 0.3, height: "100%", opacity: 1, ease: "linear"})
        tl.to(".mypage .mypage__inner", {duration: 0.5, opacity: 1})

        tl.to(".home__line > div:nth-child(1)", {duration: 0.7, width: "calc(100% + 2px)", ease: "linear", opacity: 1});
        tl.to(".home__line > div:nth-child(2)", {duration: 0.7, height: "calc(100% + 2px)", ease: "linear", opacity: 1});
        tl.to(".home__line > div:nth-child(3)", {duration: 0.7, width: "calc(100% + 2px)", ease: "linear", opacity: 1});
        tl.to(".home__line > div:nth-child(4)", {duration: 0.7, height: "calc(100% + 2px)", ease: "linear", opacity: 1});

        tl.to(".home__inner .title h1", { duration: 0.5, delay: 0.3, opacity: 1, transform: "rotate(-25deg) translateX(0)" });
        tl.to(".home__inner .img__wrap .img", { duration: 0.5, opacity: 1 });
    } else {
        tl.to(".header__inner .toggleBtn", {duration:0.3, opacity: 1});

        tl.to("#home .mypage .mypage__line > div:nth-child(1)", {duration: 0.5, width: "100%", opacity: 1, ease: "linear"})
        tl.to("#home .mypage .mypage__line > div:nth-child(2)", {duration: 0.3, height: "100%", opacity: 1, ease: "linear"})
        tl.to("#home .mypage .mypage__line > div:nth-child(3)", {duration: 0.5, width: "100%", opacity: 1, ease: "linear"})
        tl.to("#home .mypage .mypage__line > div:nth-child(4)", {duration: 0.3, height: "100%", opacity: 1, ease: "linear"})
        tl.to(".mypage .mypage__inner", {duration: 0.5, opacity: 1})

        tl.to(".home__line > div:nth-child(1)", {duration: 0.7, width: "calc(100% + 2px)", ease: "linear"});
        tl.to(".home__line > div:nth-child(2)", {duration: 0.7, height: "calc(100% + 2px)", ease: "linear"});
        tl.to(".home__line > div:nth-child(3)", {duration: 0.7, width: "calc(100% + 2px)", ease: "linear"});
        tl.to(".home__line > div:nth-child(4)", {duration: 0.7, height: "calc(100% + 2px)", ease: "linear"});

        tl.to(".home__inner .title h1", { duration: 0.7, delay: 0.3, opacity: 1, transform: "rotate(-25deg) translateX(0)" });
        tl.to(".home__inner .img__wrap .img", { duration: 0.7, opacity: 1 });
        tl.to(".home__inner .img__wrap .desc h2:nth-child(1)", {duration: 0.5, opacity: 1});
        tl.to(".home__inner .img__wrap .desc h2:nth-child(2)", {duration: 0.3,  opacity: 1});
        tl.to(".home__inner .img__wrap .desc h2:nth-child(3)", {duration: 0.5,  opacity: 1});
        tl.to(".home__inner .img__wrap .desc h2:nth-child(4)", {duration: 0.3,  opacity: 1});
        tl.to(".home__inner .img__wrap .desc h2:nth-child(5)", {duration: 0.5, opacity: 1, right: "10%"});
    }
    
    tl.to(".scroll", {duration: 0.3, opacity: 1 });
}, 1000);

function scrolling() {
    let scrollTop = parseInt(document.documentElement.scrollTop || window.scrollY || window.pageYOffset);

    // setTimeout()
    setTimeout(() => {
        let tl = gsap.timeline();

        // home sec
        const ot1 = document.querySelector(".home__inner .title h1").offsetTop;
        const ot2 = getOffsetTop(document.querySelector(".about .intro__inner .cont.right h2"));
        const ot3 = getOffsetTop(document.querySelector(".website .site.mega"));
        const ot4 = getOffsetTop(document.querySelector(".script-hor > div:nth-child(6)"));
        const ot5 = getOffsetTop(document.querySelector(".frontend > div:nth-child(2)"));
        const ot6 = getOffsetTop(document.querySelector(".contact .cont.c1 .polaroid__wrap"));

        if(window.innerWidth >= 910) {
            if (scrollTop >= 50) {
                tl.to(".home__inner .img__wrap .desc h2:nth-child(1)", {duration: 0.2, opacity: 1});
                tl.to(".home__inner .img__wrap .desc h2:nth-child(2)", {duration: 0.2, opacity: 1});
                tl.to(".home__inner .img__wrap .desc h2:nth-child(3)", {duration: 0.2, opacity: 1});
                tl.to(".home__inner .img__wrap .desc h2:nth-child(4)", {duration: 0.2, opacity: 1});
                tl.to(".home__inner .img__wrap .desc h2:nth-child(5)", {duration: 0.6, opacity: 1, right: "10%"});
            }
        }

        // starting about sec
        if(!document.querySelector("#about").classList.contains("alreadyshowed")) {
            document.querySelector("#about").classList.add("alreadyshowed");

            tl.to(".about .title", {duration: 0.5, opacity: 1})
            tl.to(".about .intro__inner .cont.left", {duration: 0.5, opacity: 1})
            tl.to(".about .intro__inner .cont.right", {duration: 0.5, opacity: 1})
            tl.to(".about .imgs__inner .img__box > div", {duration: 0.5, opacity: 1, stagger: 0.5})
        }

        // starting website sec
        if(!document.querySelector("#website").classList.contains("alreadyshowed")) {
            document.querySelector("#website").classList.add("alreadyshowed");

            tl.to(".website .title", {duration: 0.5, opacity: 1})

            if(window.innerWidth >= 1150) {
                tl.to(".site .left .subtitle", {duration: 0.3, opacity: 1})
                tl.to(".site .left .desc", {duration: 0.3, opacity: 1})
                tl.to(".website .site .right", {duration: 0.5, opacity: 1})
            } else {
                tl.to(".site.stand .left .subtitle", {duration: 0.3, opacity: 1})
                tl.to(".site.stand .left .desc", {duration: 0.3, opacity: 1})
                tl.to(".website .site.stand .right", {duration: 0.5, opacity: 1})

                tl.to(".site.respon .left .subtitle", {duration: 0.3, opacity: 1})
                tl.to(".site.respon .left .desc", {duration: 0.3, opacity: 1})
                tl.to(".website .site.respon .right", {duration: 0.5, opacity: 1})

                tl.to(".site.mega .left .subtitle", {duration: 0.3, opacity: 1})
                tl.to(".site.mega .left .desc", {duration: 0.3, opacity: 1})
                tl.to(".website .site.mega .right", {duration: 0.5, opacity: 1})
            }
        }

        // starting script sec
        if(!document.querySelector("#script").classList.contains("alreadyshowed")) {
            document.querySelector("#script").classList.add("alreadyshowed");
            tl.to(".script .title", {duration: 0.5, opacity: 1})
        } 

        // starting script-hor sec
        if(!document.querySelector("#script-horizontal").classList.contains("alreadyshowed")) {
            document.querySelector("#script-horizontal").classList.add("alreadyshowed");
            tl.to(".script-horizontal .script-hor > div", {duration: 0.5, opacity: 1, stagger: 0.5})
        }

       

        // starting frontend sec
        if(!document.querySelector("#frontend").classList.contains("alreadyshowed")) {
            document.querySelector("#frontend").classList.add("alreadyshowed");

            tl.to(".frontend .title", {duration: 0.5, opacity: 1})

            if(window.innerWidth >= 1150) {
                tl.to(".frontend .work .imgWrap", {duration: 0.5, opacity: 1})
                tl.to(".frontend .work .descWrap", {duration: 0.5, opacity: 1})
            } else {
                tl.to(".frontend .work.react1 .imgWrap", {duration: 0.5, opacity: 1})
                tl.to(".frontend .work.react1 .descWrap", {duration: 0.5, opacity: 1})

                tl.to(".frontend .work.react2 .imgWrap", {duration: 0.5, opacity: 1})
                tl.to(".frontend .work.react2 .descWrap", {duration: 0.5, opacity: 1})

                tl.to(".frontend .work.vue1 .imgWrap", {duration: 0.5, opacity: 1})
                tl.to(".frontend .work.vue1 .descWrap", {duration: 0.5, opacity: 1})

                tl.to(".frontend .work.react3 .imgWrap", {duration: 0.5, opacity: 1})
                tl.to(".frontend .work.react3 .descWrap", {duration: 0.5, opacity: 1})

                tl.to(".frontend .work.php1 .imgWrap", {duration: 0.5, opacity: 1})
                tl.to(".frontend .work.php1 .descWrap", {duration: 0.5, opacity: 1})
            }
        }

        // starting contact sec
        if(!document.querySelector("#contact").classList.contains("alreadyshowed")) {
            document.querySelector("#contact").classList.add("alreadyshowed");

            tl.to(".contact .title", {duration: 0.5, opacity: 1})
            tl.to(".contact .cont.c1", {duration: 0.5, opacity: 1})
            tl.to(".contact .cont.c2", {duration: 0.5, opacity: 1})

            tl.to(".footer", {duration: 0.5, opacity: 1})
        }

        // starting footer sec
        // if(scrollTop >= ot6) {
        //     if(!document.querySelector("#footer").classList.contains("alreadyshowed")) {
        //         document.querySelector("#footer").classList.add("alreadyshowed");

        //         tl.to(".footer", {duration: 0.5, opacity: 1})
        //     }
        // }
    }, 1000);
}
window.addEventListener("scroll", scrolling);
