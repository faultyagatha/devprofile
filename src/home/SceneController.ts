import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export class SceneController {
  width: number;
  height: number;
  static scene: THREE.Scene;
  static renderer: THREE.WebGLRenderer;
  static camera: THREE.PerspectiveCamera;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;

    this.setup();
  }

  setup() {
    SceneController.scene = new THREE.Scene();
    SceneController.renderer = new THREE.WebGLRenderer({ antialias: true }); //alpha: true

    SceneController.renderer.setSize(this.width, this.height);
    SceneController.scene.background = new THREE.Color('#5C80BC');

    this.setupCamera();
    this.render();
    this.animate();
  }

  setupCamera() {
    let VIEW_ANGLE = 50;
    let ASPECT_RATIO = this.width / this.height;
    let NEAR_PLANE = 0.1;
    let FAR_PLANE = 100;

    SceneController.camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT_RATIO, NEAR_PLANE, FAR_PLANE);
    SceneController.camera.position.set(0, 0, 8);
    SceneController.camera.lookAt(new THREE.Vector3(0, 0, 0));
  };

  render() {
    SceneController.renderer.render(SceneController.scene, SceneController.camera);
    // console.log(SceneController.renderer);
  };

  animate = () => {
    requestAnimationFrame(this.animate);
    this.render();
  }
};