import React from 'react';

import Menu from '../components/Menu';
import { Home } from '../home';

export const HomePage = () => {
  const width = 250;
  const height = 250;
  return (
    <div>
      <Menu />
      <Home width={width} height={height} />
      Home page
    </div>
  )
};

