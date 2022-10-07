import { Login } from './components/Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Update } from './components/Update/Update';
// import { ModalUtil } from './components/Utils/Modal/ModalUtil';
import ForgotPassword from './pages/ForgotPassword';
import EmailVerification from './pages/EmailVerification';
import UserVerified from './pages/UserVerified';
import ResetPassword from './pages/ResetPassword';
import LandingPage from './pages/LandingPage';
import { Signup } from './components/Signup/Signup';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";


import MessageAlertModal from './components/MessageAlertModal'
// import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import AdminDashboard2 from './components/AdminDashboard/AdminDashboard2';
import MenuDefault from './components/AdminDashboard/MednuDefault';
// import OptionModal from './components/AdminDashboard/OptionModal';
// import { OverviewTable } from './components/AdminDashboard/Table/OverviewTable';

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/modal" element={<MessageAlertModal showModal={true} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/update" element={<Update />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/verification' element={<EmailVerification />} />
          {/* <Route path='/admin-dashboard' element={<AdminDashboard />} /> */}
          <Route path='/admin-2' element={<AdminDashboard2 />} />
          <Route path='/MenuDefault' element={<MenuDefault />} />
          {/* <Route path='/OptionModal' element={<OptionModal/>} /> */}
          {/* <Route path='/BasicTable' element={<OverviewTable/>} /> */}
          <Route path='/users/registered' element={<UserVerified content="register" />} />
          <Route path='/users/verify/:token' element={<UserVerified content="verify" />} />
          <Route path='/users/change-password/:id' element={<ResetPassword />} />
          
          

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
