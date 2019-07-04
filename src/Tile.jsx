import React, { useState } from 'react';
import { useInterval } from './useInterval';
import './Tile.css';

export function Tile() {
  return (
    <div className={'Tile'}>
      <Background />
      <Counter delay={100} />
    </div>
  );
}

function Background() {
  return (
    <svg className={'Tile__background'}>
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
  }, 100);

  return <div className={'Tile__counter'}>{count}</div>;
}
