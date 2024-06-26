import React from 'react'
import { Table, Button } from 'react-bootstrap'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { mobile ,tablet, desktop } from './Responsive';
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
   
    margin-left: 50px;
    margin-right: 50px;
   /* width: 790px; */
    padding-left: 50px;
    padding-right: 50px;
    ${mobile({margin:0 , padding: 0})};
    ${tablet({margin:0 , padding: 0})};

`

const Adminlist = () => {
  return (
    <TotalBox>

      <h1 className="text-center bg-dark" style={{color: "white" , border:"5px solid white" , borderBlockColor:"green"  , marginTop:"10px"}}>Admin List  </h1>

      <Table striped bordered hover variant="dark" size="sm" style={{border:"5px solid white" ,borderBlockColor:"green"}}>
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
            <td>Boss </td>
            <td>
              <Icon>
                <a href="https://www.facebook.com/bigbazzi/" target="_blank">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://wa.me/message/RJ4G5J2MLGWAH1" target="_blank" width="39" height="36" >

                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
              </Icon>
            </td>
            <td>+60 16-921 5104 </td>
            <th><Button>Complain</Button></th>
          </tr>
          
          <tr>
            <td>2</td>
            <td colSpan={3}>Coming soon .. </td>
            <th><Button>Complain</Button></th>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={3}>Coming soon .. </td>
            <th><Button>Complain</Button></th>
          </tr>
          <tr>
            <td>4</td>
            <td colSpan={3}>Coming soon .. </td>
            <th><Button>Complain</Button></th>
          </tr>
          <tr>
            <td>5</td>
            <td colSpan={3}>Coming soon .. </td>
            <th><Button>Complain</Button></th>
          </tr>
          <tr>
            <td>6</td>
            <td colSpan={3}>Coming soon .. </td>
            <th><Button>Complain</Button></th>
          </tr>
          <tr>
            <td>7</td>
            <td colSpan={3}>Coming soon .. </td>
            <th><Button>Complain</Button></th>
          </tr>
          <tr>
            <td>8</td>
            <td colSpan={3}>Coming soon .. </td>
            <th><Button>Complain</Button></th>
          </tr>
          <tr>
            <td>9</td>
            <td colSpan={3}>Coming soon .. </td>
            <th><Button>Complain</Button></th>
          </tr>
          
          
        </tbody>
      </Table>
    </TotalBox>
  )
}

export default Adminlist
