import React from 'react'
import styled from 'styled-components/macro'

export default function Footer(){
    return(
        <FooterStyled>
            &copy; AMORE GmbH
        </FooterStyled>
    )
}

const FooterStyled = styled.footer`
  background-color: #964F4C;
  color: white;
  display: flex;
  align-items: end;
  text-align: center;
`