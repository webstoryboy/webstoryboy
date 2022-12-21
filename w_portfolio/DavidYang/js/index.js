window.onload = () => {
 
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

        tl.to('.landing .bg-l, .landing .bg-r', {
            scaleX: 1,
            duration: 1,
            // ease: "circ.out"
        })
        gsap.to('.landing .title', {
            delay: 0.8,
            y: 20,
            opacity: 1,
            duration: 0.8
            // ease: "circ.out"
        })
        gsap.to('.landing .bg-l, .landing .bg-r', {
            delay: 1.8,
            scaleY: 0,
            transformOrigin: 'top center',
            ease: "circ.inOut"
        })
        gsap.fromTo('.landing .bg-b',{
            y: "100%",
        }, {
            delay: 2.5,
            y: 0,
            zIndex: 3,
            ease: "circ.inOut"
        })
        gsap.to('.landing', {
            delay: 3,
            y: '-150%',
            ease: "circ.in"
        })
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


 /* 메뉴 스크롤 색 */
 $(document).ready(function(){
    $(window).scroll(function(){
      let scroll = $(window).scrollTop();
        /* menu_1 */
        if (scroll > 4500) {
            $(".menu_1").css("color" , "#fff");
        }
        else{
            $(".menu_1").css("color" , "#88d1ff");   
        }
        /* menu_2 */
        if ( scroll < 4500 || scroll >= 19000) {
            $(".menu_2").css("color" , "#fff");
        }
        else {
            $(".menu_2").css("color" , "#88d1ff");   
        }
        /* menu_3 */
        if ( scroll < 19000 || scroll >= 45000) {
            $(".menu_3").css("color" , "#fff");
        }
        else {
            $(".menu_3").css("color" , "#88d1ff");   
        }    
        /* menu_4 */
        if ( scroll < 45000) {
            $(".menu_4").css("color" , "#fff");
        }
        else {
            $(".menu_4").css("color" , "#88d1ff");   
        }                
    })  
  })

  /* 시작 애니메이션 */  
  setTimeout( function() {
    gsap.fromTo(".main__logo img",1,{y: 1500, opacity: 1, transform: 'scale(2.5)',}, {
    duration: 1,
    delay: 0.2,
    ease: "circ.out",
    y: 0,
    transform: 'scale(1)',
  })
  gsap.to(".main__logo img", {
    duration: 0.5,
    filter: 'brightness(3)',
    ease: "circ.out",
    delay: 1.02,
  })
  gsap.to(".main__logo img", {
    duration: 0.8,
    filter: 'brightness(1)',
    ease: "circ.out",
    delay: 1.52,
  })  
  gsap.to(".st05", {
    opacity: 1,
    duration: 0.08,
    delay: 0.7,
  })
  gsap.to(".st04", {
    opacity: 1,
    duration: 0.08,
    delay: 0.78,
  })
  gsap.to(".st03", {
    opacity: 1,
    duration: 0.08,
    delay: 0.86,
  })
  gsap.to(".st02", {
    opacity: 1,
    duration: 0.08,
    delay: 0.94,
  })
  gsap.to(".st01", {
    opacity: 1,
    duration: 0.08,
    delay: 1.02,
  })
  gsap.to(".st05", {
    opacity: 0,
    duration: 0.08,
    delay: 1.1,
  })
  gsap.to(".st04", {
    opacity: 0,
    duration: 0.08,
    delay: 1.18,
  })
  gsap.to(".st03", {
    opacity: 0,
    duration: 0.08,
    delay: 1.26,
  })
  gsap.to(".st02", {
    opacity: 0,
    duration: 0.08,
    delay: 1.34,
  })
  gsap.to("header", {
    opacity: 1,
    duration: 1,
    ease: "circ.out",
    delay: 0.8,
  })
  gsap.to(".header__logo__box ", {
    duration: 1,
    rotation: 360,
    ease: "circ.out",
    delay: 0.8,
  })
}, 3000);

setTimeout(function(){
    gsap.to("body",{
        overflow: "visible",
        height: "auto",
        touchAction: "auto",
        ease: "circ.out",
    })
}, 3500);

    /* 캔버스 */
    const canvas = document.querySelector("#webgl");

    var renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        canvas
    });

    renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
    renderer.setSize(window.innerWidth, window.innerHeight);
    window.addEventListener('resize', onWindowResize, false);

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
    var camera = new THREE.PerspectiveCamera(25, window.innerWidth / window.innerHeight, 1, 500);
    var scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000, 0.08);
    camera.position.set(0, 0, 10);

    var group3d = new THREE.Object3D();
    var geometry = new THREE.IcosahedronGeometry(1, 1);
    var gparticular = new THREE.CircleGeometry(1, 4);
    var bparticular = new THREE.CircleGeometry(9, 3);

    var material = new THREE.MeshPhysicalMaterial({
        color: 0x000,
        shading: THREE.FlatShading,
        side: THREE.DoubleSide
    });
    var wmaterial = new THREE.MeshNormalMaterial({
        color: 0x88d1ff,
        wireframe: true
    });
    var gmaterial = new THREE.MeshPhongMaterial({
        color: 0x88d1ff,
        side: THREE.DoubleSide
    });

    function mathRandom(num = 4) {
        var mathnum = -Math.random() * num + Math.random() * num;
        return mathnum;
    }

    for (var i = 1; i < 300; i++) {
        var pscale = 0.001 + Math.abs(mathRandom(0.03));
        var particular = new THREE.Mesh(gparticular, gmaterial);
        particular.position.set(mathRandom(), mathRandom(), mathRandom());
        particular.rotation.set(mathRandom(), mathRandom(), mathRandom());
        particular.scale.set(pscale, pscale, pscale);

        group3d.add(particular);
    }

    var cube = new THREE.Mesh(geometry, material);
    var wcube = new THREE.Mesh(geometry, wmaterial);
    var bcube = new THREE.Mesh(bparticular, wmaterial);

    bcube.scale.set(1.5, 1.5, 1.5);
    bcube.position.z = -1;

    var scaleSet = 0.95;
    cube.scale.set(scaleSet, scaleSet, scaleSet);

    TweenMax.to(cube.scale, 1, {
        x: 1,
        ease: Elastic.easeOut,
        yoyo: true,
        repeat: -1,
        delay: 0
    });
    TweenMax.to(cube.scale, 1, {
        y: 1,
        ease: Elastic.easeOut,
        yoyo: true,
        repeat: -1,
        delay: 0.05
    });
    TweenMax.to(cube.scale, 1, {
        z: 1,
        ease: Elastic.easeOut,
        yoyo: true,
        repeat: -1,
        delay: 0.1
    });

    function cameraSet(num) {
        TweenMax.to(camera.position, 2, {
            z: num,
            ease: Power3.easeInOut,
            yoyo: false,
            repeat: 0
        });
    }

    var ambientLight = new THREE.AmbientLight(0x88d1ff, 0.2);
    var lightFront = new THREE.PointLight(0x88d1ff, 1);
    var lightBack = new THREE.PointLight(0x88d1ff, 0.5);

    lightFront.castShadow = true;

    lightFront.position.set(10, 10, 5);
    lightBack.position.set(-5, -10, -15);

    scene.add(lightBack);
    scene.add(lightFront);
    scene.add(ambientLight);

    cube.add(wcube);
    scene.add(bcube);
    group3d.add(cube);
    scene.add(group3d);

    function onchangeCamera() {
        scene.rotation.y = 0;
        TweenMax.to(scene.rotation, 3, {
            y: 360 * Math.PI / 180,
            ease: Power3.easeInOut
        });
    }

    var numRot = 0.001;

    function animate() {
        requestAnimationFrame(animate);
        group3d.rotation.x += numRot;
        group3d.rotation.y += numRot;
        group3d.rotation.z += numRot;

        bcube.rotation.z += numRot;

        renderer.render(scene, camera);
    }
    animate();

}
