import React from 'react';
import { Row, Col } from "react-bootstrap";

import { Mirrors } from '../../sketches/mirrors';

export const Sketches = () => {
  const width: number = 500;
  const height: number = 500;
  return (
    <>
      <h2 className="text-center">WebGL Playground</h2>
      <Row>Sketch</Row>
      {/* <Home width={width} height={height} /> */}
      <Mirrors width={width} height={height} />
    </>
  )
}