import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Books from './components/Books';
import Categories from './components/Categories';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <Routes>
          <Route exact path="/" element={<Books />} />
          <Route exact path="/books" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
