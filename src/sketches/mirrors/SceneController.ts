import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

//https://sbcode.net/threejs/scene-camera-renderer/
//https://github.com/NicolaLC/spaceinvaders-js/blob/feature/webgl/src/gameScripts/game.ts

export class SceneController {
  renderer: THREE.WebGLRenderer;
  width: number;
  height: number;
  canvas: HTMLCanvasElement;//| null;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  disposed: boolean;

  constructor(width: number, height: number, canvas: HTMLCanvasElement) {
    this.width = width;
    this.height = height;
    this.canvas = canvas;

    // const context = this.canvas.getContext('webgl2', { antialias: true });
    this.renderer = new THREE.WebGLRenderer({ canvas });

    //this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera();
    this.disposed = false;

    this.setup();
  }

  setup() {
    // document.body.appendChild(this.canvas);
    console.log('canvas is added');
    this.renderer.setSize(this.width, this.height);
    //if (this.canvas) this.canvas.appendChild(this.renderer.domElement);
    this.scene.background = new THREE.Color(0x5C80BC);
    this.setupCamera();
    this.render();
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
    this.renderer.render(this.scene, this.camera);
  };

  update() {
    if (this.disposed) return;
    // if (this.controls) this.controls.update();
    // if (this.isCamOrbit) this.orbitCamera(Date.now() * 0.001);
    // this.updateSceneSubjects(Date.now() * 0.005);
    this.renderer.render(this.scene, this.camera);
  };

  onKeyDown(e: KeyboardEvent) {
    // this.isCamOrbit = true;
  };

  onKeyUp(e: KeyboardEvent) {
    // this.isCamOrbit = false;
  }

  dispose() {
    this.disposed = true;
    // this.scene.children?.forEach(child => {
    //   if (child.isMesh) {
    //     // child.material.dispose(); //TODO: fix mistake with this line
    //     child.geometry.dispose();
    //   }
    // });
    this.renderer.dispose();
    // document.body.removeChild(this.renderer.domElement);
    //if (this.canvas && this.canvas.hasChildNodes) this.canvas.removeChild(this.renderer.domElement);
  };


  onWindowResize() {
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.width, this.height);
  };
};

// function coloursToArray(str) 
// {
//     return str.split('/').pop().split('-').map(function (hex) 
//     {
//         return new THREE.Color('#' + hex);
//     });
// };