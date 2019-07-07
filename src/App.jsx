import React from 'react';
import './App.css';
import { Tile } from './Tile';

const tileCount = 50;

function renderTiles() {
  const tiles = Array.from({ length: tileCount }).map((val, index) => (
    <Tile key={index} />
  ));
  return tiles;
}

function App() {
  return (
    <>
      <svg height={0} width={0}>
        <defs>
          <filter id="shadow">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
            <feOffset dx="10" dy="10" result="offsetBlur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.15" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
      <div className="App">{renderTiles()}</div>
    </>
  );
}

export default App;
