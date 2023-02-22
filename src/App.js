import logo from './logo.svg';
import Home from './pages/Home';
import Header from './pages/Header';
import './App.css';
import Customerservice from './pages/Customerservice';
import { createBrowserRouter, Route, Routes } from 'react-router-dom';
import Adminlist from './pages/Adminlist';
import Subadminlist from './pages/Subadminlist';
import Superagent from './pages/Superagent';
import Masteragent from './pages/Masteragent';
import Footer from './pages/Footer';


function App() {
  return (
    <div>
    
      <Header></Header>
      <Routes>
        <Route path='/Home' element={<Home></Home>}></Route>
        <Route path='/CustomerService' element={<Customerservice></Customerservice>}></Route>
        <Route path='/Adminlist' element={<Adminlist></Adminlist>}></Route>
        <Route path='/Subadminlist' element={<Subadminlist></Subadminlist>}></Route>
        <Route path='/Superagent' element={<Superagent></Superagent>}></Route>
        <Route path='/Masteragent' element = {<Masteragent></Masteragent>}></Route>

      </Routes>
      <Footer></Footer>

    </div>
    
  );
}

export default App;
