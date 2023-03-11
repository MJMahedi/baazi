import React from 'react'
import { Table, Button } from 'react-bootstrap'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { mobile, tablet, desktop } from './Responsive';
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const Icon = styled.div`
display: flex;
justify-content: space-around;
`
const TotalBox = styled.div`
    margin-top:10px;
    margin-left: 50px;
    margin-right: 50px;
    padding-left: 50px;
    padding-right: 50px; 
    
    ${mobile({ margin: 0, padding: 0 })};
    ${tablet({ margin: 0, padding: 0 })};
    `;

const Notice = styled.div`
border: 5px solid white;
border-radius: 7px;
background: #212529;
color:white;
margin-top:10px;
`;
const SemiBox = styled.div`
border: 5px solid white;
border-radius: 7px;
`;





const Customerservice = () => {
  return (

    <TotalBox>
      <h1 className="text-center bg-dark" style={{
        color: "white", border: "5px solid white", borderBlockColor: "green", marginTop: "10px",
      }}>Customer Service</h1>
      <SemiBox>
        <Table striped bordered hover variant="dark" size="sm">
          <thead>
            <tr>
              <th style={{ width: "10%", alignItems: "center" }}>#</th>
              <th style={{ width: "27%", }}>Name</th>
              <th className="justify-content-md-center" style={{ width: "10%", }}>Social Media</th>
              <th style={{ width: "27%", }}>Phone Number</th>
              <th style={{ width: "27%", }}>Complain</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Admin </td>
              <td>
                <Icon>
                  <a href="https://www.facebook.com/" target="_blank">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a href="https://wa.me/message/RJ4G5J2MLGWAH1" target="_blank" width="39" height="36" >
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </a>
                </Icon>
              </td>
              <td>+1 504 5345030 </td>
              <th><Button>Complain</Button></th>
            </tr>
            <tr>
              <td>2</td>
              <td>Super Agent </td>
              <td>
                <Icon>
                  <a href="https://www.facebook.com/profile.php?id=100083466716753" target="_blank">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a href="https://wa.me/message/RJ4G5J2MLGWAH1" target="_blank" width="39" height="36" >
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </a>
                </Icon>
              </td>
              <td>+1 854 203-2027 </td>
              <th><Button>Complain</Button></th>
            </tr>

          </tbody>




        </Table>
      </SemiBox>
      <Notice variant="dark" >
        <h1>নোটিশঃ</h1>
        <p >কাষ্টমার সার্ভিস এর কাউকেই আপনার পাসওয়ার্ড দিবেন না। শুধু আপনার www.winx365.live এর ইউজার নেম দিবেন – যদি প্রয়োজন হয়। *** স্বাধারন তথ্য জানার জন্য “CUSTOMER SERVICE“ এর সাথে যোগাযোগ করার জন্য অনুরোধ করা হল। *** বেট বিষয়ক তথ্য জানার জন্য “TEAM LEADER” এর সাথে যোগাযোগ করার জন্য অনুরোধ করা হল। *** পয়েন্ট স্বম্পর্কিত কোন অভিযোগ এর জন্য “ADMIN” সাথে যোগাযোগ করার জন্য অনুরোধ করা হল। *** এজেন্ট স্বম্পর্কিত কোন অভিযোগ এর জন্য “ADMIN” সাথে যোগাযোগ করার জন্য অনুরোধ করা হল। </p>

      </Notice>

    </TotalBox>
  )
}

export default Customerservice