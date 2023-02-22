import React from 'react'
import banner from '/project/baazi/src/pages/banner.jpg'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './marquee.css';


const Bodybox = styled.div`
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    width: 790px;
    padding-left: 0px;
    padding-right: 0px;
    

`;

const BannerImg = styled.div`

`;
const Menu = styled.nav`
background-color: #212529;

   
   /* color: #FFF; */
    height: 45px;
    padding-left: 18px;
    border-radius: 0px;

`;
const Navbar = styled.div`
display: flex;
justify-content: space-between;
text-decoration: none;
`;
const Bannerbox = styled.div`

`

const Header = () => {
  return (
    <Bodybox>
    <BannerImg>
    <img src={banner} alt="banner" width="100%" />
    </BannerImg>
    <div >
      
    <div className="marquee">
      Full premium Site For Casino Lovers www.winx365.info এ যারা এজেন্ট নিয়ে কাজ করতে চান তারা এডমিন অথবা সুপার এজেন্টদের সাথে যোগাযোগ করুন।

    </div>
    
    </div>
    
   
    <div class="menubar">
		<Menu>
  			<Navbar>
            
    			<ul><a style={{color: "white" , textDecoration:"none"}} href="Home">হোম</a></ul>
    			<ul><a style={{color: "white" , textDecoration:"none"}} href="CustomerService">কাস্টমার সার্ভিস</a></ul>
    			<ul><a style={{color: "white", textDecoration:"none"}} href="Adminlist">এডমিন</a></ul>
    			<ul><a style={{color: "white", textDecoration:"none"}} href="Subadminlist">সাব এডমিন</a></ul>
    			<ul><a style={{color: "white", textDecoration:"none"}} href="Superagent">সুপার এজেন্ট</a></ul>
    			<ul><a style={{color: "white", textDecoration:"none"}} href="Masteragent">মাস্টার এজেন্ট</a></ul>
 			 </Navbar>
        <Bannerbox>
    
    </Bannerbox>
		</Menu>

	</div>
    
    </Bodybox>
  )
}

export default Header
