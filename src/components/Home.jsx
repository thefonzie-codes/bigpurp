import '../App.css';
import Navigation from './Navigation';

import AboutUs from '../images/AboutUs.jpg';
import Creative from '../images/Prague.jpg';
import Photography from '../images/KiyomizuDera.jpg';
import Video from '../images/ShinjukuCat.mp4';

import Tile from './Tile';

const tilesData = [
  {
    src: AboutUs,
    alt: "AboutUs",
  },
  {
    src: Creative,
    alt: "Creative"
  },
  {
    src: Photography,
    alt: "Photography"
  },
  {
    src: Video,
    alt: "Video"
  }
]

const createTile = tilesData.map((tile) => {
  return (
    <Tile src={tile.src} alt={tile.alt} />
  )
});

function Home() {
  return (
    <div className="Home">
      <Navigation />
      {/* <AboutUs />
      <Creative />
      <Photography />
      <Video /> */}
      {createTile}
    </div>
  );
}

export default Home;