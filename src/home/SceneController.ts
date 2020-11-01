import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export class SceneController {
  static renderer: THREE.WebGLRenderer;
  width: number;
  height: number;
  canvas: HTMLCanvasElement | null;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  disposed: boolean;

  // constructor(width: number, height: number, canvas: HTMLCanvasElement) {
  //   this.width = width;
  //   this.height = height;
  //   this.canvas = canvas;

  //   this.scene = new THREE.Scene();
  //   this.camera = new THREE.PerspectiveCamera();

  //   this.setup();
  // }
  constructor(width: number, height: number, canvas: HTMLCanvasElement | null) {
    this.width = width;
    this.height = height;
    this.canvas = canvas;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera();
    this.disposed = false;

    this.setup();
  }

  setup() {
    SceneController.renderer = new THREE.WebGLRenderer({ antialias: true }); //alpha: true
    SceneController.renderer.setSize(this.width, this.height);
    if (this.canvas) {
      this.canvas.appendChild(SceneController.renderer.domElement);
    }
    console.log(this.canvas);
    //document.body.appendChild(SceneController.renderer.domElement);
    this.scene.background = new THREE.Color(0x5C80BC);

    this.setupCamera();
    this.render();
    this.animate();
  }

  setupCamera() {
    let VIEW_ANGLE = 50;
    let ASPECT_RATIO = this.width / this.height;
    let NEAR_PLANE = 0.1;
    let FAR_PLANE = 100;

    this.camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT_RATIO, NEAR_PLANE, FAR_PLANE);
    this.camera.position.set(0, 0, 8);
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));
  };

  setupGeometry() {
    let geometry = new THREE.IcosahedronGeometry(3, 0);
    let material = new THREE.MeshPhongMaterial({
      color: 0x020b13,
      shininess: 100
    });
    let mesh = new THREE.Mesh(geometry, material);
    this.scene.add(mesh);
  };

  render() {
    SceneController.renderer.render(this.scene, this.camera);
    // console.log(SceneController.renderer);
  };

  animate = () => {
    requestAnimationFrame(this.animate);
    this.render();
  };

  update() {
    if (this.disposed) return;
    // if (this.controls) this.controls.update();
    // if (this.isCamOrbit) this.orbitCamera(Date.now() * 0.001);
    // this.updateSceneSubjects(Date.now() * 0.005);
    SceneController.renderer.render(this.scene, this.camera);
  };

  onKeyDown(e: KeyboardEvent) {
    // this.isCamOrbit = true;
  };

  onKeyUp(e: KeyboardEvent) {
    // this.isCamOrbit = false;
  }

  dispose() {
    this.disposed = true;
    // this.scene.children.forEach(child => {
    //   if (child.isMesh) {
    //     // child.material.dispose(); //TODO: fix mistake with this line
    //     child.geometry.dispose();
    //   }
    // });
    // this.scene.dispose();
    SceneController.renderer.dispose();
    // document.body.removeChild(SceneController.renderer.domElement);
    if (this.canvas) {
      this.canvas.removeChild(SceneController.renderer.domElement);
    }
  };


  onWindowResize() {
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
    SceneController.renderer.setSize(this.width, this.height);
  };
};

// function coloursToArray(str) 
// {
//     return str.split('/').pop().split('-').map(function (hex) 
//     {
//         return new THREE.Color('#' + hex);
//     });
// };