import React from 'react'
import styled from 'styled-components/macro'

export default function Header(){
    return(
        <HeaderStyled>
            &copy; AMORE GmbH
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`
  background-color: #964F4C;
  color: white;
  display: flex;
  align-items: end;
  text-align: center;
`