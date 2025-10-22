import './App.css';
import {BlogPage} from './components/BlogPage';
import {Header} from './components/HeaderComponents/Header';
import {HomePage} from './components/HomePage/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter basename="/Portfolio">
        <div className="App">
        <Header />

          <Routes>
            <Route path="/" element={< HomePage /> } />
            <Route path="blog" element={< BlogPage />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
