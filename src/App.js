import './App.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route }  from "react-router-dom";
import { Container, Row } from 'react-bootstrap';
import Home from './Pages/home';
import About from './Pages/about';
import Projects from './Pages/projects';
import NavigationMenu from './Components/navigationMenu'

function App() {
  return (
    <ThemeProvider>
      <Container fluid>
        <Row>
          <BrowserRouter>
            <NavigationMenu />
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
