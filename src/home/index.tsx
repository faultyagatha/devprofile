import React from 'react';
import { SceneController } from './SceneController';

interface IHomeProps {
  width: number;
  height: number;
};

export class Home extends React.Component {
  sceneController: SceneController;
  threeRootElement?: HTMLDivElement | null;

  constructor(props: IHomeProps) {
    super(props);
    this.sceneController = new SceneController(window.innerWidth, 400);
    console.log(this.sceneController);
  }

  componentDidMount() {
    this.addEventListeners();
    this.update();
  };

  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize);
    document.removeEventListener("keydown", this.onDocumentKeyDown);
    document.removeEventListener("keyup", this.onDocumentKeyUp);
    if (this.sceneController) {
      console.log('disposing')
      this.sceneController.dispose();
    }
  };

  addEventListeners() {
    window.addEventListener('resize', this.onWindowResize, false);
    document.addEventListener("keydown", this.onDocumentKeyDown, false);
    document.addEventListener("keyup", this.onDocumentKeyUp, false);
  };

  onWindowResize = () => {
    if (this.sceneController) {
      this.sceneController.onWindowResize();
      this.sceneController.update();
    }
  };

  onDocumentKeyDown = (e: KeyboardEvent) => {
    e.preventDefault();
    switch (e.keyCode) {
      case 32: // space
        if (this.sceneController) this.sceneController.onKeyDown(e);
        break;
      default:
    }
  };

  onDocumentKeyUp = (e: KeyboardEvent) => {
    e.preventDefault();
    if (this.sceneController) this.sceneController.onKeyUp(e);
  };

  update = () => {
    requestAnimationFrame(this.update);
    if (this.sceneController) this.sceneController.update();
  };

  render() {
    return (
      <div ref={element => this.threeRootElement = element}>
      </div>
    );
  }
};
