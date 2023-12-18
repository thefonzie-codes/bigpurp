import logo from './logo.svg';
import './App.css';
import Creative from './components/Creative';
import Photography from './components/Photography';
import Navigation from './components/Navigation';
import AboutUs from './components/AboutUs';
import Video from './components/Video';

function App() {
  return (
    <div className="App">
      <Navigation />
      <AboutUs />
      <Creative />
      <Photography />
      <Video />
    </div>
  );
}

export default App;
