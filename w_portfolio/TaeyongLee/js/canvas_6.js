  //화면 생성
        let scene = new THREE.Scene();

        //카메라 설정
        let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
        camera.position.z = 1;

        //렌더링 설정
        let renderer = new THREE.WebGLRenderer({
            canvas : document.getElementById('canvas6'),
            antialias: true,
            alpha: true
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio)
        document.body.appendChild(renderer.domElement);


        //조명 설정
        const shadowLight = new THREE.DirectionalLight(0xffffff, 0.2)
        shadowLight.position.set(2, 10, 1)
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.3)
        const ambientLight2 = new THREE.AmbientLight(0xf1a4ff, 0.2)
        const light1 = new THREE.PointLight(0xff5de0, 0.4, 100)
        light1.position.set(30, 0, 10)
        const light2 = new THREE.PointLight(0x5854ff, 0.4, 100)
        light2.position.set(-40, 0, 20)
        const light3 = new THREE.PointLight(0x632ecf, 0.4, 100)
        light3.position.set(0, -5, 5)
        const light4 = new THREE.PointLight(0x632ecf, 0.2, 100)
        light4.position.set(-2, 1, 2)
        const light5 = new THREE.PointLight(0x632ecf, 0.2, 100)
        light5.position.set(-5, -2, 5)
        scene.add(shadowLight, ambientLight, ambientLight2, light1, light2, light3, light4, light5)


        //모양 설정
        let objectLoader = new THREE.ObjectLoader()
        objectLoader.load('https://s3-us-west-2.amazonaws.com/s.cdpn.io/126747/gem1.json',
            function(gemMesh) {
                gemMesh.position.x = 0
                gemMesh.position.z = -2
                gemMesh.scale.setScalar(4)
                gem = gemMesh
                gem.children[0].geometry.computeFlatVertexNormals()
                console.log(gem)
                scene.add(gem)
            }
        )

        //애니메이션 설정
        function animate() {
            requestAnimationFrame(animate);

//            gem.rotation.y += 0.005

            renderer.render(scene, camera);
        }
        animate();

        //화면 사이즈 설정
        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        window.addEventListener('resize', onWindowResize);