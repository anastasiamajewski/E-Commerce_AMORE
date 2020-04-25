import React from "react";
import styled from "styled-components/macro";

export default function Footer() {
  return <FooterStyled>&copy; AMORE GmbH</FooterStyled>;
}

const FooterStyled = styled.footer`
  background-color: #964f4c;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
