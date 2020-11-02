// import React, { useEffect, useRef, useCallback } from 'react';
// import { SceneController } from './SceneController';

// export const Mirrors = () => {
//   const width = 1000;
//   const height = 500;

//   // let sceneController: SceneController;
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   console.log('before oninit: ', canvasRef.current);
//   const sceneController = new SceneController(width, height, canvasRef.current);

//   // const initCanvas = useCallback(() => {
//   //   const canvas = canvasRef.current as HTMLCanvasElement;
//   //   sceneController = new SceneController(width, height, canvas);
//   //   const GL = canvas.getContext("webgl");
//   //   console.log('WebGL found', GL);

//   //   console.log('after oninit: ', canvas);
//   // }, []);

//   const removeEventListeners = useCallback(() => {
//     window.removeEventListener('resize', handleWindowResize);
//     document.removeEventListener("keydown", handleDocumentKeyDown);
//     document.removeEventListener("keyup", onDocumentKeyUp);
//     if (sceneController) sceneController.dispose();
//   }, []);

//   const addEventListeners = useCallback(() => {
//     window.addEventListener('resize', handleWindowResize, false);
//     document.addEventListener("keydown", handleDocumentKeyDown, false);
//     document.addEventListener("keyup", onDocumentKeyUp, false);
//   }, []);

//   const handleWindowResize = () => {
//     if (sceneController) {
//       sceneController.onWindowResize();
//       sceneController.update();
//     }
//   };

//   const handleDocumentKeyDown = (e: KeyboardEvent) => {
//     e.preventDefault();
//     switch (e.keyCode) {
//       case 32: // space
//         if (sceneController) sceneController.onKeyDown(e);
//         break;
//       default:
//     }
//   };

//   const onDocumentKeyUp = (e: KeyboardEvent) => {
//     e.preventDefault();
//     if (sceneController) sceneController.onKeyUp(e);
//   };

//   const update = useCallback(() => {
//     requestAnimationFrame(update);
//     if (sceneController) sceneController.update();
//   }, []);


//   useEffect(() => {
//     // initCanvas();
//     // update();
//     const canvas = canvasRef.current as HTMLCanvasElement;
//     sceneController.canvas = canvasRef.current as HTMLCanvasElement;
//     const GL = canvas.getContext("webgl");
//     console.log('WebGL found', GL);

//     console.log('after oninit: ', canvasRef.current);
//     requestAnimationFrame(update);
//     if (sceneController) sceneController.update();
//     addEventListeners();

//     return function cleanup() {
//       removeEventListeners();
//     }
//   }, [canvasRef,
//     // initCanvas,
//     update,
//     sceneController,
//     addEventListeners,
//     removeEventListeners]);

//   console.log(canvasRef)
//   return (
//     <>
//       <canvas ref={canvasRef} width={width} height={height} />
//     </>
//   );
// };

import React, { useEffect, useRef, useState } from 'react';
import { SceneController } from './SceneController';

type MirrorProps = ({
  width,
  height
}: {
  width: number,
  height: number
}) => JSX.Element;

export const Mirrors: MirrorProps = ({ width, height }) => {
  const ref = useRef<HTMLCanvasElement>(null);
  // const width: number = 1000;
  // const height: number = 500;

  let sceneController: SceneController;

  const update = () => {
    requestAnimationFrame(update);
    sceneController.update();
  };

  const addEventListeners = () => {
    window.addEventListener('resize', handleWindowResize, false);
    // document.addEventListener("keydown", onDocumentKeyDown, false);
    // document.addEventListener("keyup", onDocumentKeyUp, false);
  };

  const handleWindowResize = () => {
    sceneController.onWindowResize();
    sceneController.update();
  };

  const cleanup = () => {
    sceneController.dispose();
    window.removeEventListener('resize', handleWindowResize);
  };

  useEffect(() => {
    console.log('rendered');
    if (ref.current) {
      addEventListeners();
      sceneController = new SceneController(width, height, ref.current);
      update();
    }

    return () => {
      cleanup();
    }
  }, [ref]);

  return <canvas ref={ref} />;
}

  // const scene = new THREE.Scene();
    // const camera = new THREE.PerspectiveCamera(
    //   75,
    //   window.innerWidth / window.innerHeight,
    //   0.1,
    //   1000
    // );
    // const renderer = new THREE.WebGLRenderer({ antialias: true });
    // renderer.setSize(800, 500);
    // //document.body.appendChild(renderer.domElement);
    // // use ref as a mount point of the Three.js scene instead of the document.body
    // if (ref.current) console.log('reference is found', ref.current)
    // ref.current?.appendChild(renderer.domElement);
    // const geometry = new THREE.BoxGeometry(1, 1, 1);
    // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    // const cube = new THREE.Mesh(geometry, material);
    // scene.add(cube);
    // camera.position.z = 5;
    // const animate = function () {
    //   requestAnimationFrame(animate);
    //   cube.rotation.x += 0.01;
    //   cube.rotation.y += 0.01;
    //   renderer.render(scene, camera);
    // };
    // animate();