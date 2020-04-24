import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components/macro'
import Header from './Header';
import Footer from './Footer';
import GlobalStyles from './GlobalStyles'
import Home from './Home'
import Productdetails from './Productdetails'


export default function App (){
return(
  <BodyStyled>
  <GlobalStyles/>
  <Header/>
  <Switch>
  <Route exact path="/">
<Home/>
</Route>
<Route path="/productdetails">
<Productdetails/>
</Route>
      </Switch>
      <Footer/>
      </BodyStyled>
)}


const BodyStyled = styled.div`
  display: grid;
  grid-template-rows: 48px auto 48px;
  height: 100vh;
`
