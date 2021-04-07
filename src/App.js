import axios from 'axios';
import './App.css';

function App() {
  const binanceAPI = axios.get('https://api.binance.com').then((response) => {
    return response.status;
  });
  return (
    <div className="App">
        <p>`Hello ${binanceAPI}`</p> 
    </div>
  );
}

export default App;
