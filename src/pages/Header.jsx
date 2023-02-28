import React from 'react'
import banner from '/project/baazi/src/pages/banner.jpg'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import { mobile, Tablet, Desktop, tablet } from './Responsive';




const Bodybox = styled.div`   
    margin-left: 50px;
    margin-right: 50px;
   /* width: 790px; */
    padding-left: 50px;
    padding-right: 50px;
    ${mobile({ margin:"0" , padding: 0 , })};
    ${tablet({ margin:"0" , padding: 0 , })};
    
`;

const BannerImg = styled.div`

`;
const Menu = styled.nav`
background-color: #212529;
border: 3px solid orange;
border-radius: 7px;
margin-top:10px;
height:45px;
${mobile({backgroundColor:"green" , height:"55px"})};
${tablet({backgroundColor:"green" , height:"55px"})};

`;
const Navbar = styled.ul`
display: flex;
justify-content: space-around;
text-decoration: none;
${mobile({display:"flex" , flexWrap: "wrap",})};
${tablet({display:"flex" , flexWrap: "wrap",justifyContent: "spaceAround"

})};

`;
const linkStyle = {
  textDecoration: "none",
  color: "white",
  fontWeight: "bold",
  fontSize: 16,
  
};
const Bannerbox = styled.div`
`;



const Header = () => {
  return (
    <Bodybox>
      <BannerImg>
        <img src={banner} alt="banner" width="100%" />
      </BannerImg>
      <Marquee
        style={{
          background: "yellow",
          height: "50px",
        }}>
        Full premium Site For Casino Lovers www.winx365.info এ যারএজেন্ট নিয়ে কাজ করতে চান তারা এডমিন অথবা সুপার এজেন্টদের সাথে যোগাযোগ করুন।
      </Marquee>

      <div class="menubar">
        <Menu>
          <Navbar >
            <Link to='/home' style={linkStyle}>হোম</Link>
            <Link to='/CustomerService' style={linkStyle}>কাস্টমার সার্ভিস</Link>
            <Link to='/Adminlist' style={linkStyle}>এডমিন</Link>
            <Link to='/Subadminlist' style={linkStyle}>সাব এডমিন</Link>
            <Link to='/Superagent' style={linkStyle}>সুপার এজেন্ট</Link>
            <Link to='/Masteragent' style={linkStyle}>মাস্টার এজেন্ট</Link>
          </Navbar>
          <Bannerbox>
          </Bannerbox>
        </Menu>

      </div>
      

    </Bodybox>
  )
}

export default Header
