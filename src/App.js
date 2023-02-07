import './App.css';
import getCatGifJson from './api';
import { useState } from 'react';

function App() {
  const [catGifUrl, setCatGifUrl] = useState("https://cataas.com/cat/gif");

  const handleClick = async () => {
    const gifData = await getCatGifJson();
    const gifPath = gifData.data.url;
    setCatGifUrl(`https://cataas.com/${gifPath}`);
  };

  return (
    <div className="App">
      <header className="title">
        <h1>Cat Gif Generator</h1>
      </header>
      <button className="button" onClick={handleClick}>Show Me A New Cat Gif!</button>
      <div className="gif-container">
        <img className="cat-gif" src={catGifUrl}></img>
      </div>
    </div>
  );
}

export default App;
