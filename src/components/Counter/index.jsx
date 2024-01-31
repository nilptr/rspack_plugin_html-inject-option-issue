import React, { useState } from 'react';

import reactLogo from '../../assets/react.svg';

import './style.css';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
				<a href="https://reactjs.org" target="_blank" rel="noreferrer">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1 className="title">Rspack + React</h1>
			<div className="card">
				<button onClick={() => setCount(count => count + 1)}>
					count is {count}
				</button>
			</div>
			<p className="read-the-docs">
				Click on the Rspack and React logos to learn more
			</p>
    </>
  );
}

export default Counter;
