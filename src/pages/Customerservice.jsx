import React from 'react'
import { Table, Button } from 'react-bootstrap'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const CategoryName = styled.div`
 display: center;
 background: red;
`;
const Icon = styled.div`
display: flex;
justify-content: space-around;
`
const TotalBox = styled.div`

margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    width: 790px;
    padding-left: 0px;
    padding-right: 0px;

`
const Notice = styled.div`
border: solid red 2px;
background: #212529;
color:white;
`;





const Customerservice = () => {
  return (
    <TotalBox>

      <h1 className="text-center">Customer Service</h1>

      <Table striped bordered hover variant="dark" size="sm">
        <thead>
          <tr>
            <th style={{width:"10%", alignItems:"center"}}>#</th>
            <th style={{width:"27%",}}>Name</th>
            <th className="justify-content-md-center" style={{width:"10%",}}>Social Media</th>
            <th style={{width:"27%",}}>Phone Number</th>
            <th style={{width:"27%",}}>Complain</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark </td>
            <td>
              <Icon>    
             <a href="https://www.facebook.com/profile.php?id=100083466716753" target="_blank">
             <FontAwesomeIcon  icon={faFacebook} />
             </a>

            

             <a href="https://wa.me/message/ASQCOISCNBUGH1" target="_blank" width="39" height="36" >

           
                <FontAwesomeIcon icon={faWhatsapp} />
                </a>
              </Icon>
            </td>
            <td>+001753258523</td>
            <th><Button>Complain</Button></th>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <th><Button>Complain</Button></th>
          </tr>        
        </tbody>
        
        
       

      </Table>
      <Notice variant="dark">
        <h1>নোটিশঃ</h1>
        <p >কাষ্টমার সার্ভিস এর কাউকেই আপনার পাসওয়ার্ড দিবেন না। শুধু আপনার http://winx365.live এর ইউজার নেম দিবেন – যদি প্রয়োজন হয়। *** স্বাধারন তথ্য জানার জন্য “CUSTOMER SERVICE“ এর সাথে যোগাযোগ করার জন্য অনুরোধ করা হল। *** বেট বিষয়ক তথ্য জানার জন্য “TEAM LEADER” এর সাথে যোগাযোগ করার জন্য অনুরোধ করা হল। *** পয়েন্ট স্বম্পর্কিত কোন অভিযোগ এর জন্য “ADMIN” সাথে যোগাযোগ করার জন্য অনুরোধ করা হল। *** এজেন্ট স্বম্পর্কিত কোন অভিযোগ এর জন্য “ADMIN” সাথে যোগাযোগ করার জন্য অনুরোধ করা হল। </p>

      </Notice>
      
    </TotalBox>
  )
}

export default Customerservice