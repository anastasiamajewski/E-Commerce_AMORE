import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'

export default function Footer() {
    return (
    <>
    
    <FooterStyled>
        <LinkStyled exact to="/">Home</LinkStyled>
        <LinkStyled to="/productdetails">Produktdetails</LinkStyled>
        <LinkStyled to="/shoppingcart">Warenkorb</LinkStyled>
        <LinkStyled to="/order">Bestellung</LinkStyled>
    </FooterStyled>
    
    </>
    )}
    
    const FooterStyled = styled.footer`
    display: flex;
    background: #964F4C;
    color: white;
    text-align:center;
    justify-content: space-around;
    `
    
    const LinkStyled = styled(NavLink)`
    display: flex;
    border-style: none;
    padding: 10px;
    background-color: #964F4C;
    height: 48px;
    color: white;
    font-size: 0.9em;
    text-decoration: underline;
    align-items: center;
    
    &.selected {
        background: #69b0b3;
        color: black;
    }
    
    `