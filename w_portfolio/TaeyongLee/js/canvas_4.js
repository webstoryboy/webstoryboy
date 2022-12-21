       var tp = 2;
        var am = 3;
        var ap = 360;
        var ct = 100;
        var vl = 10000;
        var cameraPosZ = 5;

        var wf = false;
        var setSizeZero = 0.001;
        var colorMaterial = Math.random() * 0xFFFFFF;
        var raycaster = new THREE.Raycaster();
        var mouse = new THREE.Vector2();


        function onMouseMove(event) {
            event.preventDefault();
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        }

        var renderer = new THREE.WebGLRenderer({
            canvas: document.getElementById('canvas4'),
            antialias: true,
            alpha: true,
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        //document.body.appendChild(renderer.domElement);

        window.addEventListener('resize', onWindowResize, false);

        function onWindowResize() {
            camera.updateProjectionMatrix();
        }

        var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 500);
        camera.position.set(0, 0, cameraPosZ);

        var content = new THREE.Object3D();
        var scene = new THREE.Scene();
        var geometry = new THREE.TetrahedronGeometry(1,2);

        scene.fog = new THREE.Fog(0x000000, 4, 5)

        var easing = Expo.easeInOut;

        function init() {
            for (var i = 0; i < ct; i++) {
                colorMaterial = 0xffffff - ((i++) * 1000);
                console.log(i);
                var material = new THREE.MeshPhongMaterial({
                    color: colorMaterial,
                    //side: THREE.DoubleSide,
                    shading: THREE.FlatShading,
                    //wireframe: wf,
                    transparent: true
                    //opacity: 0.8,
                });
                var cube = new THREE.Mesh(geometry, material);
                var setSizeCube = Math.random() * 1;
                cube.scale.set(setSizeZero, setSizeZero, setSizeZero);
                cube.position.x = -Math.random() * am + Math.random() * am;
                cube.position.z = -Math.random() * am + Math.random() * am;
                cube.position.y = -Math.random() * am + Math.random() * am;
                cube.rotation.x = Math.random() * 90 * Math.PI / 180;
                cube.rotation.y = Math.random() * 90 * Math.PI / 180;
                cube.rotation.z = Math.random() * 90 * Math.PI / 180;

                content.add(cube);

                TweenMax.to(cube.scale, tp, {
                    x: setSizeCube,
                    y: setSizeCube,
                    z: setSizeCube,
                    yoyo: true,
                    repeat: -1,
                    ease: easing,
                    delay: 0.3 + 0.008 * i
                });
                TweenMax.to(cube.position, tp, {
                    x: 0,
                    y: 0,
                    z: 0,
                    delay: 0.3 + 0.01 * i,
                    yoyo: true,
                    repeat: -1,
                    ease: easing
                });
                //TweenMax.to(cube.rotation, tp, {x:0,y:0, z:0, delay:0.5+05*i, yoyo:true, repeat:-1, ease:easing});
            }
        }


        function organize(pos) {
            var contentIntersect = content.children;
            for (var i = 0; i < contentIntersect.length; i++) {
                console.log(i);
                contentIntersect[i].opacity = 0.3;
            }
        }

        var ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.4);

        var lightFront = new THREE.PointLight(0xFFFFFF, 1, 70, 1);
        var lightBack = new THREE.PointLight(0xFFFFFF, 1, 50, 1);
        lightFront.position.set(5, 10, 5);
        lightBack.position.set(-5, -10, -5);

        scene.add(lightFront);
        scene.add(lightBack);
        scene.add(content);
        scene.add(ambientLight);

        function animate() {
            requestAnimationFrame(animate);

            var rx = Math.sin(Date.now() / vl) * ap;
            var ry = Math.cos(Date.now() / vl) * ap;

            content.rotation.y = ry * Math.PI / 180;
            content.rotation.x = ry * Math.PI / 180;

            renderer.render(scene, camera);
        }
        document.addEventListener('mousemove', onMouseMove, false);

        function newPlace(obj) {
            var randomRotation = 270 * Math.PI / 180;
            TweenMax.to(obj.rotation, tp * 2, {
                z: randomRotation,
                ease: easing,
                yoyo: true,
                repeat: -1
            });

            init();
            animate();
        }

        newPlace(content);

        function hola(num) {
            TweenMax.to(camera.position, 1, {
                z: num,
                ease: easing
            });
        }