import './App.css';
import BlogPage from '@/frontend/HeaderComponents/BlogPage';
import {Header} from '@/frontend/HeaderComponents/Header';
import {HomePage} from '@/frontend/HomePage/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App () {
  return (
    <BrowserRouter>
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