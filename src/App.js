import './App.css';
import getCatGifJson from './api';
import { useEffect, useState } from 'react';

function App() {
  const [catGifUrl, setCatGifUrl] = useState(null);

  const handleClick = async () => {
    const gifData = await getCatGifJson();
    const gifUrl = gifData.data.url;
    setCatGifUrl(gifUrl);
    console.log(gifUrl, "<<")
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Cat Gif Generator</p>
      </header>
      <button className="button" onClick={handleClick}>Generate Cat Gif!</button>
      {catGifUrl && (
        <div className="cat-gif">
          <img src={`https://cataas.com/${catGifUrl}`}></img>
        </div>
      )}
    </div>
  );
}

export default App;
