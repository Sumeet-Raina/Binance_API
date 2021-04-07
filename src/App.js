import axios from 'axios';
import logo from './logo.svg';
import './App.css';

const binanceAPI = axios.get('https://api.binance.com').then((response) => {
  console.log(response.status);
})
function App() {
  return (
    <div className="App">
         Hello 
    </div>
  );
}

export default App;
