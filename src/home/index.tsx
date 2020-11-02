import React, { useEffect, useRef } from 'react';
import { SceneController } from './SceneController';

type HomeProps = ({
  width,
  height
}: {
  width: number,
  height: number
}) => JSX.Element;

export const Home: HomeProps = ({ width, height }) => {
  const ref = useRef<HTMLCanvasElement>(null);
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
};

