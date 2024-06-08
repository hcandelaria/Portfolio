import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import About from './Pages/about';
import Home from './Pages/home';
import NavigationMenu from './Pages/navigationMenu';
import Projects from './Pages/projects';

function App() {
  return (
    <BrowserRouter >
      <NavigationMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
