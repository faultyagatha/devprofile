import React from 'react';
import { Container } from "react-bootstrap";

import { Routes } from './Routes';

const App = () => {
  return (
    <>
      <Container className="py-3" fluid>
        <Routes />
      </Container>
    </>
  );
}

export default App;
