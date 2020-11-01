// const createCanvas = (document: Document, containerElement: Element): HTMLCanvasElement => {
//   const canvas: HTMLCanvasElement = document.createElement('canvas');
//   containerElement.appendChild(canvas);
//   return canvas;
// };


// import React, { useRef, useState, useEffect } from 'react';

// import { SceneController } from './SceneController';

// type HomeProps = ({
//   width,
//   height
// }: {
//   width: number,
//   height: number
// }) => JSX.Element;


// export const Home: HomeProps = ({ width, height }) => {

//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const canvas = canvasRef.current as HTMLCanvasElement;
//   const sceneController = new SceneController(width, height, canvas);

//   useEffect(() => {
//     const GL = canvas.getContext("webgl");
//     console.log('webgl context', GL);
//   });

//   const onResize = () => {
//     sceneController.onWindowResize();
//   };

//   const onExit = () => {

//   };
//   return <canvas ref={canvasRef} width={width} height={height} />;
// }

import React, { useEffect, useRef, useCallback } from 'react';
import { SceneController } from './SceneController';

export const Home = () => {
  const width = 1000;
  const height = 500;

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneController = new SceneController(width, height, canvasRef.current);

  const initCanvas = () => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    const GL = canvas.getContext("webgl");
    console.log('WebGL is found', GL);
  };

  const removeEventListeners = useCallback(() => {
    window.removeEventListener('resize', handleWindowResize);
    document.removeEventListener("keydown", handleDocumentKeyDown);
    document.removeEventListener("keyup", onDocumentKeyUp);
    if (sceneController) sceneController.dispose();
  }, []);

  const addEventListeners = useCallback(() => {
    window.addEventListener('resize', handleWindowResize, false);
    document.addEventListener("keydown", handleDocumentKeyDown, false);
    document.addEventListener("keyup", onDocumentKeyUp, false);
  }, []);

  const handleWindowResize = () => {
    if (sceneController) {
      sceneController.onWindowResize();
      sceneController.update();
    }
  };

  const handleDocumentKeyDown = (e: KeyboardEvent) => {
    e.preventDefault();
    switch (e.keyCode) {
      case 32: // space
        if (sceneController) sceneController.onKeyDown(e);
        break;
      default:
    }
  };

  const onDocumentKeyUp = (e: KeyboardEvent) => {
    e.preventDefault();
    initCanvas();
    if (sceneController) sceneController.onKeyUp(e);
  };

  const update = useCallback(() => {
    requestAnimationFrame(update);
    if (sceneController) sceneController.update();
  }, []);


  useEffect(() => {
    initCanvas();
    addEventListeners();
    update();
    return function cleanup() {
      removeEventListeners();
    }
  }, [canvasRef, addEventListeners, removeEventListeners, update]);

  return (
    <>
      <canvas ref={canvasRef} />
      {/* <Text /> */}
    </>
  );
};

const Text = () => {
  return (
    <div className="Info">
      Exhibition
      <a href="https://sketchfab.com/Evanpachon" />
      <br />
            Test App.
    </div>
  );
}