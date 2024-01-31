import React, { lazy, Suspense, useState } from 'react';

import './App.css';

const Timer = lazy(() => import(/* webpackChunkName: "timer" */'./components/Timer'));
const Counter = lazy(() => import(/* webpackChunkName: "counter" */ './components/Counter'));

function App() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="tab-container">
      <div className="tab-buttons">
        <div
          className={activeTab === 0 ? "tab-button active" : "tab-button"}
          onClick={() => setActiveTab(0)}
        >
          Counter
        </div>
        <div
          className={activeTab === 1 ? "tab-button active" : "tab-button"}
          onClick={() => setActiveTab(1)}
        >
          Timer
        </div>
      </div>
      <div className="tab-content">
        <Suspense>
          {activeTab === 0 ? (
            <Counter />
          ) : (
            <Timer />
          )}
        </Suspense>
      </div>
    </div>
  );
}

export default App;
