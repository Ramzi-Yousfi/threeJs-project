import * as THREE from '/node_modules/three/build/three.module.js';
import { OrbitControls } from '/node_modules/three/examples/jsm/controls/OrbitControls.js'


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75, 
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry( 1, 1, 1);
const material = new THREE.MeshBasicMaterial({color:"rgb(255, 0, 0)"});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube,);



camera.position.z = 5;
const control = new OrbitControls(camera, renderer.domElement);
camera.position.set( 0, 20, 100 );
control.update();


function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube2.position.x += 0.01;
    camera.lookAt(scene.position);
    control.update();
    renderer.render(scene, camera);
}
animate();

function changeColor() { 
    cube.material.color.set("rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")");
    console.log("color changed");
}

setInterval(function(){
    changeColor();
},1000);