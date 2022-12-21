$(function () {
    /* Plogin */
    //스크롤러
    var s = skrollr.init({
        smoothScrolling: true,
        smoothScrollingDuration: 700,
    });

    /* Direct */

    //로딩
    const animationOptions = {
        ease: 'expo.inOut'
    };

    const introAnimation = () => {
        const tl = gsap.timeline({
            defaults: {
                ease: animationOptions.ease,
                duration: 1
            }
            
        });


        tl.to('.landing .title', {
            duration: 1,
            y: 0,
            autoAlpha: 1,
        }).

        to('.landing .bg-l, .landing .bg-r', {
            scaleX: 1
        }).

        to('.landing .bg-l, .landing .bg-r', {
            scaleY: 0,
            transformOrigin: 'top center'
        }).

        to('.landing .title', {
                duration: 1,
                y: -60,
                autoAlpha: 0
            },
            '-=0.6').
        to('.landing', {
                y: '-150%'
            },
            '-=0.5');

        return tl;
    };


    const skewInElements = elements => {
        const tl = gsap.timeline();

        tl.from(elements, {
            duration: 1,
            ease: animationOptions.ease,
            skewY: -5,
            autoAlpha: 0,
            y: 40
        });


        return tl;
    };



    const fadeInElements = elements => {
        const tl = gsap.timeline();

        tl.from(elements, {
            duration: 1,
            ease: animationOptions.ease,
            y: '20px',
            autoAlpha: 0,
            stagger: 0.1
        });


        return tl;
    };

    const master = gsap.timeline({
        paused: false,
        delay: 0.2
    });

    master.
    add(introAnimation()).
    add(skewInElements('#section1 .bg'), '-=1');


    //이미지 로더
    $('.landing').imagesLoaded()

        .always(function (instance) {

            console.log('all images loaded');

        })

        .done(function (instance) {

            console.log('all images successfully loaded');

        })

        .fail(function () {

            console.log('all images loaded, at least one is broken');

        })

        .progress(function (instance, image) {

            var result = image.isLoaded ? 'loaded' : 'broken';

            console.log('image is ' + result + ' for ' + image.img.src);

        });


    // 스크롤 좌표
    window.addEventListener("scroll", () => {
        let scrollTop =
            window.pageYOffset ||
            document.documentElement.scrollTop ||
            window.scrollY;

        document.querySelector(".scroll").innerText = Math.round(scrollTop);
    });

    //레이어팝업 확장
    $(":checkbox").on("click", function () {
        $(this).parent(".bg-in").toggleClass("active");
        $("body").toggleClass("modal-open");
    });


    //마우스 효과
    const cursor = document.querySelector('#cursor');
    const cursorCircle = cursor.querySelector('.cursor-circle');

    const mouse = {
        x: -100,
        y: -100
    }; // mouse pointer's coordinates
    const pos = {
        x: 0,
        y: 0
    }; // cursor's coordinates
    const speed = 0.1; // between 0 and 1

    const updateCoordinates = e => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    }

    window.addEventListener('mousemove', updateCoordinates);


    function getAngle(diffX, diffY) {
        return Math.atan2(diffY, diffX) * 180 / Math.PI;
    }

    function getSqueeze(diffX, diffY) {
        const distance = Math.sqrt(
            Math.pow(diffX, 2) + Math.pow(diffY, 2)
        );
        const maxSqueeze = 0.15;
        const accelerator = 1500;
        return Math.min(distance / accelerator, maxSqueeze);
    }


    const updateCursor = () => {
        const diffX = Math.round(mouse.x - pos.x);
        const diffY = Math.round(mouse.y - pos.y);

        pos.x += diffX * speed;
        pos.y += diffY * speed;

        const angle = getAngle(diffX, diffY);
        const squeeze = getSqueeze(diffX, diffY);

        const scale = 'scale(' + (1 + squeeze) + ', ' + (1 - squeeze) + ')';
        const rotate = 'rotate(' + angle + 'deg)';
        const translate = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)';

        cursor.style.transform = translate;
        cursorCircle.style.transform = rotate + scale;
    };

    function loop() {
        updateCursor();
        requestAnimationFrame(loop);
    }

    requestAnimationFrame(loop);



    const cursorModifiers = document.querySelectorAll('[cursor-class]');

    cursorModifiers.forEach(curosrModifier => {
        curosrModifier.addEventListener('mouseenter', function () {
            const className = this.getAttribute('cursor-class');
            cursor.classList.add(className);
        });

        curosrModifier.addEventListener('mouseleave', function () {
            const className = this.getAttribute('cursor-class');
            cursor.classList.remove(className);
        });
    });

});
