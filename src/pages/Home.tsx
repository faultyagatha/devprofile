import React from 'react';
import { Container, Row } from 'react-bootstrap';

import Menu from '../components/Menu';
import Footer from '../components/Footer';
import { Home } from '../home';
import { Sketches } from '../components/Sketches';

export const HomePage = () => {
  const width = window.innerWidth;
  const height = 500;
  return (
    <>
      <Menu />
      <Row>
        <Home width={width} height={height} />
      </Row>
      <h2 id='about' className="text-center">About</h2>
      <Sketches />
      <Footer />
    </>
  )
}
