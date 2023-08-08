import './App.css';
import { Col, Container } from 'react-bootstrap';
import Navigate from './components/Navigate';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage';
import About from './pages/AboutPage';
import ContactUs from './pages/ContactUsPage';
import Login from './pages/LogInPage';
import { MessageProvider } from './contexts/MessageProvider';
import DinkumColors from './theme/dinkumColors';
import { UserProvider } from './contexts/UserProvider';
import LoginToken from './components/LoginToken';
import EstimatePage from './pages/EstimatePage';
import Footer from './components/Footer';
import { EstimateProvider } from './contexts/EstimateProvider';
import SchedulePage from './pages/SchedulePage';

function App() {
  return (
    <UserProvider>
      <MessageProvider>
      <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
        <EstimateProvider>
          <Navigate />
          <Container className="containerBody">
            <Col sm={2} md={3} lg={4}></Col>
            <Col>
              <div
                style={{
                  backgroundColor: DinkumColors.grey,
                  color: DinkumColors.black,
                }}
                className='m-5'>
                <BrowserRouter>
                  <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about-us' element={<About />} />
                    <Route path='/contact-us' element={<ContactUs />} />
                    <Route path='/estimate' element={<EstimatePage />} />
                    <Route path='/schedule' element={<SchedulePage />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/login/token/:token' element={<LoginToken />} />
                  </Routes>
                </BrowserRouter>
              </div>
            </Col>
            <Col sm={2} md={3} lg={4}></Col>
          </Container>
          <div className="footer">
          <Footer />
          </div>
        </EstimateProvider>
      </MessageProvider>
    </UserProvider>
  );
}

export default App;