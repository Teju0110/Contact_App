import './App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import AddContact from './Components/AddContact';
import EditContact from './Components/EditContact';
import {ToastContainer} from 'react-toastify'


function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <NavBar/>
      
      <Routes>
        <Route path ='/' element={<Home/>} />
        <Route path ='/add' element={<AddContact/>} />
        <Route path ='/edit/:id' element={<EditContact/>} />

      </Routes>
     
    </div>
  );
}

export default App;
