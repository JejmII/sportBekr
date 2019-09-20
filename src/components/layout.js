import React from "react"
import PropTypes from "prop-types"
import NavWrapper from '../elements/NavbarWrapper'
import GlobalStyle from '../pages/Global'
import PageFooter from '../elements/Footer'
import styled from'styled-components'
import {Helmet} from "react-helmet";


const Layout = ({ children }) => {
  const SetupBody = styled.div(`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
    height: 100%
`)
const SetupBody2 = styled.div(`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`)
  return (
    <>
    <Helmet>
      <link data-n-head="true" rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous" />
      <link href="https://fonts.googleapis.com/css?family=Poppins:200,300,500&display=swap&subset=latin-ext" rel="stylesheet"/>
    </Helmet>
      <SetupBody>
        <SetupBody2>
        <NavWrapper />
          <main>{children}</main>
          </SetupBody2>
          <PageFooter />
      </SetupBody>
      <GlobalStyle />
    </>
  )

}



Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
