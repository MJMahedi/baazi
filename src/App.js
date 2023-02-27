import Home from './pages/Home';
import Header from './pages/Header';
import './App.css';
import Customerservice from './pages/Customerservice';
import { Route, Routes, } from 'react-router-dom';
import Adminlist from './pages/Adminlist';
import Subadminlist from './pages/Subadminlist';
import Superagent from './pages/Superagent';
import Masteragent from './pages/Masteragent';
import Footer from './pages/Footer';
import styled from 'styled-components';

const WholeBody = styled.div`
 background: #05090a;
`
/*  <Route path='' element={<Home />} />  */


function App() {
  return (
    <WholeBody>

      <Header></Header>
      <Routes>
        

        <Route path='/' element={<Home />} />
        <Route path='/baazi' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/CustomerService' element={<Customerservice />} />
        <Route path='/Adminlist' element={<Adminlist />} />
        <Route path='/Subadminlist' element={<Subadminlist />} />
        <Route path='/Superagent' element={<Superagent />} />
        <Route path='/Masteragent' element={<Masteragent />} />

      </Routes>
      <Footer></Footer>

    </WholeBody>

  );
}

export default App;
