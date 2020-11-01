import React from 'react';

import Menu from '../components/Menu';
import { Mirrors } from '../sketches/mirrors';

export const SketchesPage = () => {
  return (
    <div>
      <Menu />
      {/* <Home width={width} height={height} /> */}
      <Mirrors />
    </div>
  )
}