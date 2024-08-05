import './style.css';
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('/placeholder.jpg');

const materials = [
  new THREE.MeshBasicMaterial(),
  new THREE.MeshBasicMaterial(),
  new THREE.MeshBasicMaterial(),
  new THREE.MeshBasicMaterial(),
  new THREE.MeshBasicMaterial({ map: texture }),
];

// Create a cube geometry
const firstPaintingGeometry = new THREE.BoxGeometry(3, 3, 0.25);
const firstPaintingMesh = new THREE.Mesh(firstPaintingGeometry, materials);

const secondCubeGeometry = new THREE.BoxGeometry(3, 3, 0.25);
const secondPainting = new THREE.Mesh(secondCubeGeometry, materials);

firstPaintingMesh.position.set(2, 1, 0);
secondPainting.position.set(-2, 1, 0);

// Add the cube to the scene
scene.add(firstPaintingMesh);
scene.add(secondPainting);

// Position the camera
camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  // Rotate the cube for some animation
  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;

  // Render the scene
  renderer.render(scene, camera);
}

animate();
