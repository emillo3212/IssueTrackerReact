import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Projects from '../Components/project/Projects';

const HomePage = ({projects}) => {
  
  return <Container>
      <Projects projects={projects} />
  </Container>;
};

export default HomePage;
