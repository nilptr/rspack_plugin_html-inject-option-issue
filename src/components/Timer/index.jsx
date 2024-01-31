import React, { useState, useEffect } from 'react';

import './style.css';

function Timer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    let timerId;
    function tick() {
      const now = new Date();
      setTime(now);

      timerId = setTimeout(tick, 1000);
    }

    timerId = setTimeout(tick, 1000);

    return () => clearTimeout(timerId);
  }, []);

  return (
    <>
      <h1 className="title time">{time.toLocaleTimeString()}</h1>
    </>
  );
}

export default Timer;
