import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import { coloursToArray } from '../helpers';
import { ThinFilmFresnelMap } from './fresnelMap';

//https://sbcode.net/threejs/scene-camera-renderer/
//https://github.com/NicolaLC/spaceinvaders-js/blob/feature/webgl/src/gameScripts/game.ts

export class SceneController {
  private renderer: THREE.WebGLRenderer;
  private width: number;
  private height: number;
  private canvas: HTMLCanvasElement;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private mirrorCubeCamera: THREE.CubeCamera;
  private disposed: boolean;
  private mesh: THREE.Mesh;
  private readonly colourArr: THREE.Color[];

  constructor(width: number, height: number, canvas: HTMLCanvasElement) {
    this.width = width;
    this.height = height;
    this.canvas = canvas;

    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera();
    this.disposed = false;
    this.mesh = new THREE.Mesh();
    this.colourArr = (coloursToArray)('https://coolors.co/f8ffe5-06d6a0-1b9aaa-ef476f-ffc43d');
    this.mirrorCubeCamera = new THREE.CubeCamera(0.01, 100, new THREE.WebGLCubeRenderTarget(512));
    this.setup();
  }

  setup() {
    this.renderer.setSize(this.width, this.height);
    this.scene.background = new THREE.Color(0x5C80BC);
    this.scene.fog = new THREE.Fog(0x5C80BC, 50, 200);
    this.setupCamera();
    this.setupLight();
    this.setupGeometry();
    this.render(); //render once on setup in useEffect hook
    console.log('setup done');
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

  setupLight() {
    const pointLight = new THREE.PointLight(this.colourArr[4], 2);
    pointLight.position.set(0.5, -0.2, 0);
    this.scene.add(pointLight);

    const hemiLight = new THREE.HemisphereLight(this.colourArr[1], this.colourArr[4], 1);
    hemiLight.position.set(0, 0.5, 0);
    this.scene.add(hemiLight);

    const dirLight = new THREE.DirectionalLight(this.colourArr[2], 1);
    dirLight.position.set(0, 0.5, 0);
    this.scene.add(dirLight);
  };

  setupGeometry() {
    const geometry = new THREE.IcosahedronGeometry(1, 0);
    const fresnelMap = new (ThinFilmFresnelMap as any)(410, 0, 5, 64); //(380, 2, 3, 64);
    const material = new THREE.MeshPhongMaterial({
      color: this.colourArr[1],
      shininess: 10,
      map: fresnelMap
    });
    this.mesh.geometry = geometry;
    this.mesh.material = material; //this.setupMirrorMaterial();
    this.scene.add(this.mesh);

    // const vertices = geometry.vertices;
    // vertices.map(v => {
    //   return v.y = Math.random()
    // })
  };

  setupMirrorMaterial() {
    this.mirrorCubeCamera.renderTarget.minFilter = THREE.LinearMipMapLinearFilter;
    this.scene.add(this.mirrorCubeCamera);
    const fresnelMap = new (ThinFilmFresnelMap as any)(410, 0, 5, 64); //(380, 2, 3, 64);
    let mirrorMaterial = new THREE.MeshBasicMaterial({ envMap: this.mirrorCubeCamera.renderTarget.texture, map: fresnelMap });
    return mirrorMaterial;
  };

  updateMirrorMaterial() {
    this.mirrorCubeCamera.update(this.renderer, this.scene);
  };

  render() {
    this.renderer.render(this.scene, this.camera);
  };

  update() {
    if (this.disposed) return;
    this.mesh.rotation.x += 0.01;
    this.updateMirrorMaterial();
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
  };

  onWindowResize() {
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.width, this.height);
  };
};