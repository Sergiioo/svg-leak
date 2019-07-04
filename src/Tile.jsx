import React, { useState } from 'react';
import { useInterval } from './useInterval';
import './Tile.css';

export function Tile() {
  return (
    <div className={'Tile'}>
      <Background />
      <Counter />
    </div>
  );
}

function Background() {
  return (
    <svg className={'Tile__background'}>
      <defs>
        <filter id="shadow">
          <feDropShadow dx="3" dy="6" stdDeviation="4" />
        </filter>
      </defs>
      <polygon
        stroke="#28304"
        points="90,67 67,90 32,90 8,67 8,32 32,8 67,8 90,32"
        style={{ fill: '#78A1BB', filter: 'url(#shadow)' }}
      />
    </svg>
  );
}

//  https://overreacted.io/making-setinterval-declarative-with-react-hooks/
function Counter() {
  let [count, setCount] = useState(0);

  useInterval(() => {
    const newCount = count > 500 ? 0 : count + 1;
    setCount(newCount);
  }, getRandomInt(40, 160));

  return <div className={'Tile__counter'}>{count}</div>;
}

//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_integer_between_two_values
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
