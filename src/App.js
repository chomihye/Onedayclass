import './App.css';
import { Navbar, Container, Nav, Button, Card } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './routes/Home';
import Detail from './routes/Detail';
import Cart from './routes/Cart';
import Footer from './component/Footer';

function App() {
  let navigate = useNavigate();
  useEffect(() => {
    localStorage.setItem('recentItem', JSON.stringify([]));
  }, []);

  return (
    <div className='App'>
      <Navbar bg='light' variant='light'>
        <Container>
          <Navbar.Brand href=''>My OneDay</Navbar.Brand>
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
                navigate('/Cart');
              }}
            >
              장바구니
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* 라우터 */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </div> //app
  );
}

export default App;
