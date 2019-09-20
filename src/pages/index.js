import React from "react"
import { graphql, useStaticQuery  } from "gatsby"
import Img from "gatsby-image"
import { Messenger, ImageWrapper,  Head1, Head2, Container1, Container2, Para, Para2, Strong, Button, Snow } from '../elements'
import Layout from "../components/layout";
import { Col, Row} from 'react-styled-flexboxgrid'
import styled from'styled-components'
import SEO from "../components/seo"


const IndexPage = () => {

  const data = useStaticQuery(graphql`
  query {
    portfolio: file(relativePath: { eq: "portret.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    },
    skialpTrip: file(relativePath: { eq: "skialpTrip.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`)

return (

  <>
    <Layout>
      <SEO title="Úvod" description="Úvodna stránka Sport Bekr Bratislava" />
        <Content>
          <Container1 className="paddingBottom100">
          <Row>
            <Col xsOffset={1} xs={11} smOffset={1} sm={10} mdOffset={0} md={6} lgOffset={0} lg={6}>
              <Head1 className="textBox">Sport Bekr, váš partner pre skialp</Head1>
              <Para>Lorem ipsum dolor sit amet, vel accumsan 
                  liberavisse ex, ea nec elaboraret interpretaris, 
                  sed diceret concludaturque no. Verear habemus 
                  sea ut.
              </Para>
              <a href="#spravy"><Button style={{cursor:"pointer"}}>Zistiť viac</Button></a>
            </Col>
            <Col xs={false} sm={false} mdOffset={0} md={6} lgOffset={0} lg={6}>
              <ImageWrapper modifiers="underNav" width="695px" height="495px">
                <Img fluid={data.skialpTrip.childImageSharp.fluid} alt="SKialpinisti na horách"/>
              </ImageWrapper>
            </Col>
          </Row>
          </Container1>

          <Head2 align="center" style={{paddingBottom:"50px"}}>Filozofia tvorená skúsenoťami</Head2>

          <Container2>
          <Snow top="-70px" left="-350px" rotate="-14.91deg">
            <img src={require('../images/snowflake.svg')} alt="Logo firmy | Sport Bekr"  loading="lazy" />
          </Snow>
          <Row>
          <Col xsOffset={1} xs={10} smOffset={2} sm={8} mdOffset={0} md={6} lgOffset={0} lg={6}>
            <ImageWrapper modifiers="portret" width="450px" height="675px">
                <Img fluid={data.portfolio.childImageSharp.fluid} alt="Fotografia majitela"/>
            </ImageWrapper>
          </Col>
          <Col xsOffset={1} xs={10} smOffset={1} sm={10} mdOffset={0} md={6} lgOffset={0} lg={6}>
            <Para2>
              Našou filozofiou je ukázať najnovšie trendy a technológie od nami vybraných svetových výrobcov. Vyvíjame maximálne úsilie, aby sa každý zákazník u nás cítil príjemne, bol obslúžený vo vysokej kvalite a odchádzal od nás spokojný s optimálnym riešením.
            </Para2>
            <Para2>
              Budeme veľmi radi a bude nám cťou, ak zanecháte nám i naďalej Vašu priazeň. Zároveň by sme si priali, aby nami poskytované služby sa pre Vás stali nie iba potrebou, ale i zážitkom.
            </Para2>
            <Para2>
              Výber výstroja je časovo náročnejšou záležitosťou. Preto si nechajte dostatok priestoru na to, aby ste si mohli prísť výstroj osobne vyskúšať. Je to pre Vaše väčšie pohodlie a predídete tak komplikáciám na svahu.
            </Para2>
            <Strong>
            - Janko Mrkvička
            </Strong>
          </Col>
          </Row>
          </Container2>

          <Head2 id="spravy" align="center" style={{paddingBottom:"50px"}}>Najčastejšie kladené otázky</Head2>

          <Container2>
          <MessengerWrapper>
            <Messenger modifiers="left" size="380px">
              <p>Je potrebné sa objednať na servis ?</p>
            </Messenger>

            <Messenger modifiers="right" size="600px">
              <p>Nie je potrebné sa objednať na servis, stačí prísť počas otváracích hodín.</p>
            </Messenger>

            <Messenger modifiers="left" size="410px">
              <p>Dá sa u Vás osobne rezervovať výstroj? </p>
            </Messenger>

            <Messenger modifiers="right" size="640px">
              <p>Áno, výstroj si môžete prísť rezervovať osobne najskôr 10 dní pred lyžovačkou alebo online kedykoľvek.</p>
            </Messenger>

            <Messenger modifiers="left" size="400px">
              <p>Vykonávate počas sezóny servis do 24 hodín?</p>
            </Messenger>

            <Messenger modifiers="right" size="400px">
              <p>Áno, výkonávame servis do 24 hodín od prevzatia. </p>
            </Messenger>
          </MessengerWrapper>
          </Container2>

        </Content>
    </Layout>
  </>
)

}
const Content = styled.div`
  padding-top:80px;
  .textBox{
    max-width:660px;
  }

`

const MessengerWrapper = styled.div`
display:flex;
flex-direction:column;
padding: 0 10px;

`
export default IndexPage