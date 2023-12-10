import React from "react";
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import gsap from 'gsap';

const ThreejsAnimation = () => {
    let width = window.innerWidth
    let height = window.innerHeight
    // new scene
    const scene = new THREE.Scene();

    // create sphere
    const geometry = new THREE.SphereGeometry(13, 64, 32)
    const material = new THREE.MeshStandardMaterial({ color: "#e5e5e5" });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // lights
    const light = new THREE.PointLight(0xffffff, 800, 100);
    light.position.set(20, 20, 25)
    scene.add(light);

    // camera
    const camera = new THREE.PerspectiveCamera(45   , width / height,0.1,100);
    // camera.position.z = 40;
    if (width <= 394) {
        camera.position.z = 70; // Adjust this value based on your design
    } else {
        camera.position.z = 40; // Default value for larger screens
    }
    scene.add(camera);

    // rendering it on canvas
    const canvas = document.querySelector('.webgl');

    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(width, height);
    renderer.render(scene, camera);
    renderer.setPixelRatio(2);

    // resize
    window.addEventListener("resize",()=>{
        // update sizes
        width = window.innerWidth;
        height = window.innerHeight;
        // camera resize
        camera.aspect = width / height
        camera.updateProjectionMatrix();
        renderer.setSize(width,height);
        if (width <= 394) {
            camera.position.z = 70; // Adjust this value based on your design
        } else {
            camera.position.z = 40; // Default value for larger screens
        }
    });

    // controls
    const controls = new OrbitControls(camera,canvas);
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 5

    const loop = () =>{
        controls.update();
        renderer.render(scene,camera);
        window.requestAnimationFrame(loop);
    };
    loop();

    const tl = gsap.timeline({defaults:{duration:1}});
    tl.fromTo(mesh.scale,{z:0,x:0,y:0},{z:1,x:1,y:1});

    return (
        <>
        <h2 className="spin">Give It a Spin</h2>
        </>
    );
};

export default ThreejsAnimation;
