import logo from './logo.svg';
import './App.css';
import HeroSection from './Components/HeroSection';
import ContentSection from './Components/ContentSection';
import FooterSection from './Components/FooterSection';
import {
  backgroundImgArr,
} from "../src/resource.js";
import GridBackgound from './Components/GridBackground/index.jsx';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <ContentSection />
      <FooterSection />
    </div>
  );
}

export default App;
