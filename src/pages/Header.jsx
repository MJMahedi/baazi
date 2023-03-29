import React from 'react'
import banner from '/project/baazi/src/pages/banner.jpg'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import { mobile, tablet } from './Responsive';
import { Button } from 'react-bootstrap';


const Bodybox = styled.div`   
    margin-left: 50px;
    margin-right: 50px;
    padding-left: 50px;
    padding-right: 50px;
    ${mobile({ margin: "0", padding: 0, })};
    ${tablet({ margin: "0", padding: 0, })};   
`;

const BannerImg = styled.div` `;
const Menu = styled.nav`
background-color: #212529;
border: 3px solid orange;
border-radius: 7px;
margin-top:10px;
height:45px;
${mobile({ backgroundColor: "green", height: "99px" })};
${tablet({ backgroundColor: "green", 
           height: "100px" ,


 })};
`;

const Navbar = styled.ul`
display: flex;
justify-content: space-around;
text-decoration: none;
${mobile({ display: "flex", flexWrap: "wrap", padding:"10px"})};
${tablet({
  display: "flex", flexWrap: "wrap", justifyContent: "spaceAround" ,padding: "10px",
 

})}; `;


const linkStyle = {
  textDecoration: "none",
  color: "white",
  fontWeight: "bold",
  fontSize: 12,
  marginTop:"5px",

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
        www.winx365.live -Full premium Site For Casino Lovers এ এজেন্ট নিয়ে কাজ করতে চান তারা এডমিন অথবা সুপার এজেন্টদের সাথে যোগাযোগ করুন।
      </Marquee>

      <div class="menubar">
        <Menu>
          <Navbar >

            <Button ><Link to='/home' style={linkStyle}>হোম  </Link></Button>
            <Button> <Link to='/CustomerService' style={linkStyle}>কাস্টমার সার্ভিস</Link> </Button>
            <Button><Link to='/Adminlist' style={linkStyle}>এডমিন</Link></Button>
            <Button><Link to='/SubAdmin' style={linkStyle}>সাব-এডমিন</Link></Button>
            <Button className="text-center  text-white p-10"><Link to='/Superagent' style={linkStyle}>সুপার এজেন্ট</Link></Button>
            <Button >
            
            <Link to='/Masteragent' style={linkStyle}>মাস্টার এজেন্ট</Link></Button>
            

          </Navbar>
          <Bannerbox>
          </Bannerbox>
        </Menu>
      </div>
    </Bodybox>
  )
}

export default Header
