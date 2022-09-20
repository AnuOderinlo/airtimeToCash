import { Login } from './components/Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Update } from './components/Update/Update';
import { ModalUtil } from './components/Utils/Modal/ModalUtil';
import './App.css';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/update" element={<Update />} />
        <Route path="/modal" element={<ModalUtil />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
