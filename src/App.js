import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [apiResult, setApiResult] = useState(0);
  useEffect(() => {
    fetch("https://api.binance.com")
      .then(res => setApiResult(res.status));
  }, []);
  return (
    <div className="App">
      Hello {apiResult}
    </div>
  );
}

export default App;
