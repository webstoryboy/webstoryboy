class THREEScene {
    constructor(container = document.body) {
        this.container = container;
        this.init();
    }

    init() {
        this.setup();
        this.camera();
        this.addToScene();
        this.eventListeners();
        this.render();
    }
    

    setup() {
        this.group = new THREE.Group();
        this.textureLoader = new THREE.TextureLoader();
        this.scene = new THREE.Scene();
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            canvas: document.getElementById('canvas2'),
            alpha: true,
        });
        this.renderer.setSize(this.viewport.width, this.viewport.height);
        this.renderer.setPixelRatio = window.devicePixelRatio;
        //this.container.appendChild(this.renderer.domElement);

    }

    camera() {
        const fov = 75;
        const near = 0.1;
        const far = 400;
        const aspectRatio = this.viewport.aspectRatio;
        this.camera = new THREE.PerspectiveCamera(fov, aspectRatio, near, far);
        this.camera.position.set(10, 10, 10);
        gsap.to(this.camera.position, {
            x: 0,
            y: 2,
            z: 5,
            duration: 5,
            ease: "power4.out"
        });
    }

    addToScene() {
        const parameters = {
            count: 100000,
            size: 0.01,
            radius: 5,
            branches: 3,
            spin: 1,
            randomness: 0.2,
            randomnessPower: 3,
            insideColor: "#ff6030",
            outsideColor: "#1b3984"
        };

        let geometry = null;
        let matetrial = null;
        let points = null;

        const generateGalaxy = () => {
            if (points !== null) {
                geometry.dispose();
                matetrial.dispose();
                this.scene.remove(points);
            }

            geometry = new THREE.BufferGeometry();
            matetrial = new THREE.PointsMaterial({
                size: parameters.size,
                sizeAttenuation: true,
                depthWrite: true,
                blending: THREE.AdditiveBlending,
                vertexColors: true
            });

            const positions = new Float32Array(parameters.count * 3);
            const colors = new Float32Array(parameters.count * 3);

            const colorInside = new THREE.Color(parameters.insideColor);
            const colorOutside = new THREE.Color(parameters.outsideColor);

            for (let i = 0; i < parameters.count; i++) {
                const i3 = i * 3;
                const radius = parameters.radius * Math.random();
                const spinAngle = radius * parameters.spin;
                const branchAngle = ((i % parameters.branches) / parameters.branches) * Math.PI * 2;
                const randomX = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1);
                const randomY = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1);
                const randomZ = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1);

                positions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
                positions[i3 + 1] = randomY;
                positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

                const mixedColor = colorInside.clone();
                mixedColor.lerp(colorOutside, radius / parameters.radius);

                colors[i3 + 0] = mixedColor.r;
                colors[i3 + 1] = mixedColor.g;
                colors[i3 + 2] = mixedColor.b;
            }

            geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
            geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
            points = new THREE.Points(geometry, matetrial);
            this.group.add(points);
            this.scene.add(this.group);
        };

        generateGalaxy();
    }
    render() {
        this.group.rotation.y += 0.001;
        this.camera.lookAt(this.scene.position);
        this.renderer.render(this.scene, this.camera);

        requestAnimationFrame(() => {
            this.render();
        });
    }

    eventListeners() {
        window.addEventListener("resize", this.onWindowResize.bind(this));
    }

    onWindowResize() {
        this.camera.aspect = this.viewport.aspectRatio;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.viewport.width, this.viewport.height);
    }

    get viewport() {
        const width = this.container.clientWidth;
        const height = this.container.clientHeight;
        const aspectRatio = width / height;

        return {
            width,
            height,
            aspectRatio
        };
    }
}

const scene = new THREEScene();