import React from 'react';

import Menu from '../components/Menu';
import { Home } from '../home';

export const HomePage = () => {
  // const width = 1000;
  // const height = 500;
  return (
    <div>
      <Menu />
      {/* <Home width={width} height={height} /> */}
      <Home />
      Home page
    </div>
  )
}

