import React from "react"
import {  Head1, Container1, Para2 } from '../elements'
import Layout from "../components/layout";
import { Col, Row} from 'react-styled-flexboxgrid'
import styled from'styled-components'
import SEO from "../components/seo"
import { rounded, shadow } from '../utilities';


const IndexPage = () => {

return (

  <>
    <Layout>
    <SEO title="Kontakty" description="Kontakty Sport Bekr Bratislava." />
      <Container>
      <Container1 style={{ paddingBottom: "60px" }}>
        <Row between={'md'}>
          <Col xs={12} sm={12} md={5} lg={6}>
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe title="maps" width="690" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=Servis%20a%20po%C5%BEi%C4%8Dov%C5%88a%20ly%C5%BE%C3%AD%20-%20BEKR&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                </iframe>
                </div>
                </div>
          </Col>
          <Col xs={12} sm={12} md={5} lg={5}>
            <Head1 classNameName="textBox">Neváhajte <br /> nás kontaktovať</Head1>
              <Para2>V prípade, že sa chcete zastaviť osobne na predajni, tak sa nachádzame v prizemnej časti bývalej kotolne medzi Bradáčovou 5 a 6.
              </Para2>
            </Col>
        </Row>
      </Container1>
      
      </Container>
    </Layout>
  </>
)
}

const Container = styled.main`
  padding-top:52px;
  .textBox{
    max-width:660px;
  }
  .mapouter{
    position:relative;
    text-align:right;
    max-height:400px;
    max-width:690px;
    ${rounded.imgUnderNav};
    }

  .gmap_canvas {
    overflow:hidden;
    background:none!important;
    max-height:400px;
    max-width:690px;
    ${rounded.imgUnderNav};
    ${shadow.main};

    }


`
export default IndexPage