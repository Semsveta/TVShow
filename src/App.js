import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import TVShowSearch from './components/TVShowSearch';

function App() {
  return <Router>(
    <div className="App">
      <div className="App-container">
        <TVShowSearch />
      </div>
    </div>
  );</Router>
}

export default App;
