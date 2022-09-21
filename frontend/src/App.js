import { Login } from './components/Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Update } from './components/Update/Update';
import { ModalUtil } from './components/Utils/Modal/ModalUtil';
import ForgotPassword from './pages/ForgotPassword';
import EmailVerification from './pages/EmailVerification';
import ResetPassword from './pages/ResetPassword';
import { Signup } from './components/Signup/Signup';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/update" element={<Update />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/verification' element={<EmailVerification />} />
        <Route path='/users/change-password/:id' element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
