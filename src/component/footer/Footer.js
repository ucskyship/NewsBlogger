import React from "react";
import styled from 'styled-components'

const Foot = styled.div`
  background-color: #281c1c;
  margin-top: 120%;
  color: white;
  font-family: "Apple Braille",fantasy;
  text-align: center;
  justify-content: center;
  padding: 1rem;
  font-size: 12px;
`

const Footer = () => {
    return(
        <Foot>
            <p> Copyright © 2023 NewsToday, Inc. </p>
        </Foot>
    )
}

export default Footer;