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
    <div>
      <div className={'Tile__background Tile__background--clipped'}></div>
    </div>
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
