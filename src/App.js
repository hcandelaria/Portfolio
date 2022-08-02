import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import NavigationMenu from './Components/navigationMenu';
import About from './Pages/about';
import Home from './Pages/home';
import Projects from './Pages/projects';

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
              <Route path="*" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </Row>
      </Container>
    </ThemeProvider>
  );
}

export default App;
