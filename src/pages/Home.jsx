import React from 'react'
import banner from '/project/baazi/src/pages/banner.jpg'
import styled from 'styled-components';


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
    background: #0099CC;
    background: linear-gradient(to bottom, #41F95D, #00B81C);
    color: #FFF;
    height: 45px;
    padding-left: 18px;
    border-radius: 0px;

`;
const Navbar = styled.div`
display: flex;
justify-content: space-between;
`;

const home = () => {
  return (
    <Bodybox>
    <BannerImg>
    <img src={banner} alt="banner" width="100%" />
    </BannerImg>
   
    <div class="menubar">
		<Menu>
  			<Navbar>
    			<li><a href="index.php">হোম</a></li>
    			<li><a href="CustomerService.php">কাস্টমার সার্ভিস</a></li>
    			<li><a href="admin.php">এডমিন</a></li>
    			<li><a href="subadmin.php">সাব এডমিন</a></li>
    			<li><a href="super-agent.php">সুপার এজেন্ট</a></li>
    			<li><a href="master-agent.php">মাস্টার এজেন্ট</a></li>
 			 </Navbar>
		</Menu>
	</div>
    
    </Bodybox>
  )
}

export default home
