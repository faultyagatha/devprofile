import React, { useRef, useEffect } from 'react';

import { SceneController } from './SceneController';
import { useWebGL } from '../hooks/useWebGL';

type HomeProps = ({
  width,
  height
}: {
  width: number,
  height: number
}) => JSX.Element;

export const Home: HomeProps = ({ width, height }) => {
  let sceneController: SceneController;

  const onInit = () => {
    sceneController = new SceneController(width, height);
    console.log('sceneController: ', sceneController)
  };

  const onResize = () => {

  };

  const onExit = () => {

  };

  const [canvas, resizeCanvas] = useWebGL({
    width: 250,
    height: 250,
    onInit,
    onResize,
    onExit
  });

  console.log('canvas: ', canvas);
  return (
    <>
      <div>{canvas}</div>
    </>
  );
}