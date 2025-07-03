<script>
    import { onMount} from 'svelte';
    import * as THREE from 'three';
    import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
    import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

    export let modelUrl;

    let canvas;

    onMount(() => {
        const scene = new THREE.Scene();
        scene.background = new THREE.Color('#f0f0f0');

        // Ambient Light
        const ambientLight = new THREE.AmbientLight(0xffffff, 2.5); // Soft white light, increased intensity
        scene.add(ambientLight);

        // Key Light
        const keyLight = new THREE.DirectionalLight(0xffffff, 6.4); // White light, increased intensity
        keyLight.position.set(5, 10, 7.5); // Above, to one side of camera
        keyLight.target.position.set(0, 0, 0); // Pointing at the brownie
        scene.add(keyLight);
        scene.add(keyLight.target);

        // Fill Light
        const fillLight = new THREE.DirectionalLight(0xffffff, 3.5); // White light, increased intensity
        fillLight.position.set(-5, 2, 0); // Opposite side of camera, roughly level
        fillLight.target.position.set(0, 0, 0);
        scene.add(fillLight);
        scene.add(fillLight.target);

        // Rim Light
        const rimLight = new THREE.DirectionalLight(0xffffff, 2.2); // White light, increased intensity
        rimLight.position.set(0, 10, -5); // Behind and significantly above
        rimLight.target.position.set(0, 0, 0);
        scene.add(rimLight);
        scene.add(rimLight.target);
        const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);

        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1;

        let camera, controls;

        const fallbackCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        fallbackCamera.position.z = 5;
        camera = fallbackCamera;

        const loader = new GLTFLoader();
        loader.load(
            modelUrl,
            (gltf) => {
                if (gltf.cameras && gltf.cameras.length > 0) {
                    camera = gltf.cameras[0];
                    camera.aspect = window.innerWidth / window.innerHeight;
                    camera.updateProjectionMatrix();
                }
                scene.add(gltf.scene);

                controls = new OrbitControls(camera, renderer.domElement);
                controls.enableDamping = true;

                animate();
            },
            undefined,
            (error) => console.error('An error happened:', error)
        );

        const animate = () => {
            requestAnimationFrame(animate);
            if (controls) controls.update();
            renderer.render(scene, camera);
        };

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);

    });
</script>

<canvas bind:this={canvas}></canvas>

<style>
    canvas {
        display: block;
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
    }
</style>