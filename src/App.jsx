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
  return <div className="App">{renderTiles()}</div>;
}

export default App;
