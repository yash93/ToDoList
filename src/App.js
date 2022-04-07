import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import TaskPage from './components/TaskPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<h1>Homepage</h1>}/>
        <Route path="/TaskPage" element={<TaskPage/>}/>
        <Route path="/about" element={<h1>About us</h1>}/>
        <Route path="/contact" element={<h1>Contact us</h1>}/>
        <Route path="/profile" element={<h1>Profile</h1>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
      
      </Routes>
      <Footer/>
      </BrowserRouter> 
    </div>
  );
}

export default App;
