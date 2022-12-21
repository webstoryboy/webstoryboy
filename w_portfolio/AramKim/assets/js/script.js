// loading page
//  function loading(){
//     const progress = $(".progress"),
//     progressText = progress.find(".progress-text");

//     let imgLoad = imagesLoaded("body"),
//         imgTotal = imgLoad.images.length,
//         imgLoaded = 0,
//         imgCurrent = 0,
//         progressTimer = setInterval(updateProgress, 500/60);

//     imgLoad.on("progress",function(){
//         imgLoaded++;
//     })

//     function updateProgress(){
//         let target = (imgLoaded / imgTotal) * 100;

//         imgCurrent += (target - imgCurrent) * 0.1;
//         progressText.text(Math.floor(imgCurrent) + "%");

//         if(imgCurrent >= 100) {
//             clearInterval(progressTimer)
//             progress.delay(1000).fadeOut(1000);
//             setTimeout(function(){
//                 //2초후 등장 애니메이션
//                 let tl = gsap.timeline();

//                 // 마우스 방향에 따른 이미지
//                 let x = 0,
//                     y = 0,
//                     mouseX = 0,
//                     mouseY = 0,
//                     angleX = 0,
//                     angleY = 0,
//                     fmouseX = 0,
//                     fmouseY = 0;

//                 function handleMove(event) {
//                     x = event.pageX;
//                     y = event.pageY;
//                     //console.log(x, y)
//                     //mouseX = window.innerWidth / 2 - x; //마우스 x좌표값 가운데

//                     // 마우스 위치 최대 50 , 최소 -50
//                     mouseX = Math.max(-50, Math.min(50, window.innerWidth / 2 - x ));
//                     mouseY = Math.max(-50, Math.min(50, window.innerHeight / 2 - y));

//                     angleX = (12 * mouseX) / 100; // 계산
//                     angleY = (12 * mouseY) / 100;

//                     fmouseX += (angleX - fmouseX) * 0.1 // = 1 / 10
//                     fmouseY += (angleY - fmouseY) * 0.1 // = 1 / 10
//                 }

//                 window.addEventListener("mousemove", handleMove);
//             },2100)
//         }
//         if(imgCurrent > 99) {
//             imgCurrent = 100;
//         } 
//     }
// }
// loading ();

// get Date
document.querySelector(".mypage__inner .curDate").innerText = formatDate(new Date(), "yyyy-MMM-d dddd h:mmtt");

function formatDate(date, format, utc) {
    var MMMM = ["\x00", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var MMM = ["\x01", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var dddd = ["\x02", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var ddd = ["\x03", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    function ii(i, len) {
        var s = i + "";
        len = len || 2;
        while (s.length < len) s = "0" + s;
        return s;
    }

    var y = utc ? date.getUTCFullYear() : date.getFullYear();
    format = format.replace(/(^|[^\\])yyyy+/g, "$1" + y);
    format = format.replace(/(^|[^\\])yy/g, "$1" + y.toString().substr(2, 2));
    format = format.replace(/(^|[^\\])y/g, "$1" + y);

    var M = (utc ? date.getUTCMonth() : date.getMonth()) + 1;
    format = format.replace(/(^|[^\\])MMMM+/g, "$1" + MMMM[0]);
    format = format.replace(/(^|[^\\])MMM/g, "$1" + MMM[0]);
    format = format.replace(/(^|[^\\])MM/g, "$1" + ii(M));
    format = format.replace(/(^|[^\\])M/g, "$1" + M);

    var d = utc ? date.getUTCDate() : date.getDate();
    format = format.replace(/(^|[^\\])dddd+/g, "$1" + dddd[0]);
    format = format.replace(/(^|[^\\])ddd/g, "$1" + ddd[0]);
    format = format.replace(/(^|[^\\])dd/g, "$1" + ii(d));
    format = format.replace(/(^|[^\\])d/g, "$1" + d);

    var H = utc ? date.getUTCHours() : date.getHours();
    format = format.replace(/(^|[^\\])HH+/g, "$1" + ii(H));
    format = format.replace(/(^|[^\\])H/g, "$1" + H);

    var h = H > 12 ? H - 12 : H == 0 ? 12 : H;
    format = format.replace(/(^|[^\\])hh+/g, "$1" + ii(h));
    format = format.replace(/(^|[^\\])h/g, "$1" + h);

    var m = utc ? date.getUTCMinutes() : date.getMinutes();
    format = format.replace(/(^|[^\\])mm+/g, "$1" + ii(m));
    format = format.replace(/(^|[^\\])m/g, "$1" + m);

    var s = utc ? date.getUTCSeconds() : date.getSeconds();
    format = format.replace(/(^|[^\\])ss+/g, "$1" + ii(s));
    format = format.replace(/(^|[^\\])s/g, "$1" + s);

    var f = utc ? date.getUTCMilliseconds() : date.getMilliseconds();
    format = format.replace(/(^|[^\\])fff+/g, "$1" + ii(f, 3));
    f = Math.round(f / 10);
    format = format.replace(/(^|[^\\])ff/g, "$1" + ii(f));
    f = Math.round(f / 10);
    format = format.replace(/(^|[^\\])f/g, "$1" + f);

    var T = H < 12 ? "AM" : "PM";
    format = format.replace(/(^|[^\\])TT+/g, "$1" + T);
    format = format.replace(/(^|[^\\])T/g, "$1" + T.charAt(0));

    var t = T.toLowerCase();
    format = format.replace(/(^|[^\\])tt+/g, "$1" + t);
    format = format.replace(/(^|[^\\])t/g, "$1" + t.charAt(0));

    var tz = -date.getTimezoneOffset();
    var K = utc || !tz ? "Z" : tz > 0 ? "+" : "-";
    if (!utc) {
        tz = Math.abs(tz);
        var tzHrs = Math.floor(tz / 60);
        var tzMin = tz % 60;
        K += ii(tzHrs) + ":" + ii(tzMin);
    }
    format = format.replace(/(^|[^\\])K/g, "$1" + K);

    var day = (utc ? date.getUTCDay() : date.getDay()) + 1;
    format = format.replace(new RegExp(dddd[0], "g"), dddd[day]);
    format = format.replace(new RegExp(ddd[0], "g"), ddd[day]);

    format = format.replace(new RegExp(MMMM[0], "g"), MMMM[M]);
    format = format.replace(new RegExp(MMM[0], "g"), MMM[M]);

    format = format.replace(/\\(.)/g, "$1");

    return format;
};

// mouse cursor
document.addEventListener("mousemove", (e) => {
    let scrollTop = (window.pageYOffset || document.documentElement.scrollTop || window.scrollY);
    let cursor = document.querySelector(".cursor");
    let cursorB = document.querySelector(".cursor__butterfly");
    let c2Sec = document.querySelector(".contact .cont.c2");
    let c2SecOffset = getOffsetTop(c2Sec);

    // gsap.to(cursor, {duration: 0.2, left: e.pageX - 8, top: e.pageY -8});

    if(scrollTop >= c2SecOffset-100) {
        console.log("here!!!");
        // cursor.style.opacity = "0";
        cursorB.style.opacity = "1";
        gsap.to(cursorB, {duration: 0.3, left: e.pageX - 20, top: e.pageY - 20});
    } else {
        // cursor.style.opacity = "1";
        cursorB.style.opacity = "0";
    }

    document.querySelectorAll(".about .cont__intro .right span").forEach(el => {
        el.addEventListener("mouseenter", () => {
            cursor.classList.add("active");
        });
        el.addEventListener("mouseleave", () => {
            cursor.classList.remove("active");
        })
    })
});

const getOffsetTop = element => {
    let offsetTop = 0;
    while(element) {
        offsetTop += element.offsetTop;
        element = element.offsetParent;
    }
    return offsetTop;
}

// header : mNav toggle
const toggleBtn = document.getElementsByClassName("toggleBtn")[0];
const navLinks = document.getElementsByClassName("nav")[0];

toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.toggle("close")
    navLinks.classList.toggle("active");
});


// header : when click the each nav
document.querySelectorAll(".header ul li a").forEach(element => {
    element.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(element.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        })
    })
});

// header : when scroll, each nav active
function navScrolling() {
    let scrollTop = parseInt((window.pageYOffset || document.documentElement.scrollTop || window.scrollY));
    // let scrollTop = (document.documentElement.scrollTop || window.scrollY || window.pageYOffset) + window.innerHeight;

    // scrolling text
    document.querySelector(".scroll").innerText = parseInt(scrollTop);

    // header : when scroll, each nav active
    document.querySelectorAll(".main__item").forEach((item) => {
        scrollTop > item.offsetTop ? item.classList.add("show") : item.classList.remove("show");
    });
  
    document.querySelectorAll(".main__item").forEach((item, index) => {
        if (scrollTop >= item.offsetTop - 2) {
            document.querySelectorAll(".header__inner ul li").forEach((li) => {
                li.classList.remove("active");
            });
            document.querySelector(".header__inner ul li:nth-child(" + (index + 1) + ")").classList.add("active");
        }
    });
}
window.addEventListener("scroll", navScrolling);

// about : intro__inner .cont.left
var myAnimation = new hoverEffect({
    parent: document.querySelector('.about .intro__inner .cont.left .imageHover'),
    intensity: 0.5,
    image1: 'assets/img/profile-square.jpg',
    image2: 'assets/img/profile-square-gray.png',
    displacementImage: 'assets/img/displacement/7.jpg',
});

// website : swiper slider - Slideshow class 
class Slideshow {
    constructor(el) {
        this.DOM = {el: el};
        this.config = {
            slideshow: {
                delay: 3000,
                pagination: {
                    duration: 3,
                }
            }
        };
        // Set the slideshow
        this.init();
    }

    init() {
        var self = this;

        // Set the slider
        this.slideshow = new Swiper (this.DOM.el, {
            
            pagination: {
                el: '.slideshow-pagination',
                clickable: true,
                bulletClass: 'slideshow-pagination-item',
                bulletActiveClass: 'active',
                clickableClass: 'slideshow-pagination-clickable',
                modifierClass: 'slideshow-pagination-',
                renderBullet: function (index, className) {
                    
                    var slideIndex = index,
                        number = (index <= 8) ? '0' + (slideIndex + 1) : (slideIndex + 1);
                    
                    var paginationItem = '<span class="slideshow-pagination-item">';
                    paginationItem += '<span class="pagination-number">' + number + '</span>';
                    paginationItem = (index <= 8) ? paginationItem + '<span class="pagination-separator"><span class="pagination-separator-loader"></span></span>' : paginationItem;
                    paginationItem += '</span>';
                
                    return paginationItem;
                },
            },

            // Navigation arrows
            navigation: {
                nextEl: '.slideshow-navigation-button.next',
                prevEl: '.slideshow-navigation-button.prev',
            },

            on: {
                init: function() {
                    self.animate('next');
                },
            }
        });
    
        // Init/Bind events.
        this.initEvents();
    }

    initEvents() {
        this.slideshow.on('slideNextTransitionStart', () => this.animate('next'));
        this.slideshow.on('slidePrevTransitionStart', () => this.animate('prev'));     
    }

    animate(direction = 'next') {
        // Get the active slide
        this.DOM.activeSlide = this.DOM.el.querySelector('.swiper-slide-active'),
        this.DOM.activeSlideImg = this.DOM.activeSlide.querySelector('.slide-image'),
    
        // Animate background
        TweenMax.to(this.DOM.activeSlideImg, 1.5, {
            ease: Expo.easeOut,
            startAt: {x: direction === 'next' ? 200 : -200},
            x: 0,
        });
    }
}
const slideshowStand = new Slideshow(document.querySelector('.slideshow.stand'));
const slideshowResp = new Slideshow(document.querySelector('.slideshow.respon'));
const slideshowMega = new Slideshow(document.querySelector('.slideshow.mega'));

// script : horizontal
function horizontalScrolling(){
    let scrollTop = parseInt((window.pageYOffset || document.documentElement.scrollTop || window.scrollY));

    // section 4 : script - banner 
    let scriptSec = document.querySelector("#script");

    // section 4 : script - horizontal 
    let scriptHorSec = document.querySelector("#script-horizontal");
    let scriptHorOffset = scriptHorSec.offsetTop;
    let scriptHorBox = document.querySelector(".script-horizontal .script-hor");
    let horOffset = (scrollTop - scriptHorOffset);

    if(window.innerWidth >= 950) {
        if(scrollTop >= (scriptHorOffset)) {
            gsap.to(scriptHorBox, {left: -horOffset});
        }
    }

    requestAnimationFrame(horizontalScrolling);
}
if(window.innerWidth > 950) {
    window.addEventListener("scroll", horizontalScrolling);
}

// when resizing
window.addEventListener("resize", (e) => {
    let innerHeight = e.target.innerHeight;
    let resize = document.getElementById('resize');

    // when innerHeight is less than 700
    if(innerHeight > 700) {
        resize.style.display = 'none';
    } else {
        resize.style.display = 'block';
    }

    if(window.innerWidth < 950) {
        horizontalScrolling();
    }
});

// reloading
window.onload = function() {
    setTimeout(function() {
        scrollTo({top:0, left:0, behavior:'smooth'});
    }, 0.1);
}
