import React from 'react'
import { Table, Button } from 'react-bootstrap'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { mobile , desktop } from './Responsive';
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
    ${mobile({margin:0 , padding: 0})},
`


const Superagent = () => {
  return (
    <TotalBox>

      <h1 className="text-center bg-dark" style={{color: "white" , border:"5px solid white" , borderBlockColor:"green"  , marginTop:"10px"}}>Superagent  </h1>

      <Table striped bordered hover variant="dark" size="sm" style={{ border:"5px solid white" , borderBlockColor:"green"  , marginTop:"10px"}}>
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
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
            <th><Button>Complain</Button></th>
          </tr>
          <tr>
            <td>4</td>
            <td >Larry the Bird</td>
            <td >Larry the Bird</td>
            <td>@twitter</td>
            <th><Button>Complain</Button></th>
          </tr>
          <tr>
            <td>5</td>
            <td >Larry the Bird</td>
            <td >Larry the Bird</td>
            <td>@twitter</td>
            <th><Button>Complain</Button></th>
          </tr>
          <tr>
            <td>6</td>
            <td >Larry the Bird</td>
            <td >Larry the Bird</td>
            <td>@twitter</td>
            <th><Button>Complain</Button></th>
          </tr>
          <tr>
            <td>7</td>
            <td >Larry the Bird</td>
            <td >Larry the Bird</td>
            <td>@twitter</td>
            <th><Button>Complain</Button></th>
          </tr>
          <tr>
            <td>8</td>
            <td >Larry the Bird</td>
            <td >Larry the Bird</td>
            <td>@twitter</td>
            <th><Button>Complain</Button></th>
          </tr>
          <tr>
            <td>9</td>
            <td >Larry the Bird</td>
            <td >Larry the Bird</td>
            <td>@twitter</td>
            <th><Button>Complain</Button></th>
          </tr>
          <tr>
            <td>10</td>
            <td >Larry the Bird</td>
            <td >Larry the Bird</td>
            <td>@twitter</td>
            <th><Button>Complain</Button></th>
          </tr>
        </tbody>
      </Table>
    </TotalBox>
  )
}

export default Superagent
