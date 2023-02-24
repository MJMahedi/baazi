import React from 'react'
import styled from 'styled-components'

const Footerbody = styled.div`
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    width: 790px;
    padding-left: 0px;
    padding-right: 0px;
    background-color: #212529;
    color:white;   
    font-size: 18px;
    text-align: center;
    border: 5px solid orange;
    border-radius: 15px;
    box-shadow: 10px 10px dark;
`;



const Footer = () => {
  return (
    <Footerbody>
      Copyright@2023 All Rights Reserved
    </Footerbody>
  )
}

export default Footer
