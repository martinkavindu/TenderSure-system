import './App.css';
import SupplierLogin from './Components/Auth/SupplierLogin';
import Home from './Components/Pages/Home';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path='/supplierlogin' element={<SupplierLogin/>}/>
     
      </Routes>
    </BrowserRouter>
  );
}

export default App;
