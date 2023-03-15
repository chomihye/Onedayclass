import './App.css';
import { Navbar, Container, Nav, Button, Card } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './routes/home';

// import '~slick-carousel/slick/slick.css';
// import '~slick-carousel/slick/slick-theme.css';
// import knit from './img/knitting.jpg';
// import fig from './img/figure.jpg';
// import pic1 from './img/pic1.jpg';
// import banner from './img/banner.png';

function App() {
  let navigate = useNavigate();

  return (
    <div className='App'>
      <Navbar bg='light' variant='light'>
        <Container>
          <Navbar.Brand href='#home'>My OneDay</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link
              onClick={() => {
                navigate('/');
              }}
            >
              오프라인 클래스
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('onlineclass');
              }}
            >
              라이브 클래스
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div> //app
  );
}

export default App;
