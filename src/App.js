import './App.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route }  from "react-router-dom";
import { Container, Row } from 'react-bootstrap';
import Home from './Pages/home';
import About from './Pages/about';
import Projects from './Pages/projects';
import Nav from './Components/nav'

function App() {
  return (
    <ThemeProvider>
      <Container fluid>
        <Row>
          <BrowserRouter>
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="projects" element={<Projects />} />
            </Routes>
          </BrowserRouter>
        </Row>
      </Container>
    </ThemeProvider>
  );
}

export default App;
