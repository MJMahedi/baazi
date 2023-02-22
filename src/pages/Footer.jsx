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
`

const Footer = () => {
  return (
    <Footerbody>
      <h1>Copyright@2023 All Rights Reserved</h1>
    </Footerbody>
  )
}

export default Footer
