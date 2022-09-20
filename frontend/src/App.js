import { Login } from './components/Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {NavBar} from './components/NavBar/NavBar';
import LandingPage from './pages/LandingPage';

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
      <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
       {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
