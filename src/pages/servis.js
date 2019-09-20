import React from "react"
import { graphql, useStaticQuery  } from "gatsby"
import Img from "gatsby-image"
import { ImageWrapper,  Head1, Head2, Container1, Container2, Para, Para1, Para2, Button, RoundBox } from '../elements'
import Layout from "../components/layout";
import { Col, Row} from 'react-styled-flexboxgrid'
import styled from'styled-components'
import SEO from "../components/seo"


const IndexPage = () => {

  const data = useStaticQuery(graphql`
  query {
    servis: file(relativePath: { eq: "servis.jpg" }) {
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
    <SEO title="Servis" description="Sport Bekr servis. Najlepší a najkvalitnejší servis v Bratislave."  />
      <Container>
      <Container1 className="paddingBottom100">
        <Row>
        <Col xsOffset={1} xs={11} smOffset={1} sm={10} mdOffset={0} md={6} lgOffset={0} lg={6}>
            <Head1 className="textBox">Skialp servis</Head1>
              <Para>Neodkladaj to napotom. Tvoje lyže potrebujú byť pred sezónou
                    v najlepšom stave, tak ako pred letom ty. S nami získaš najkvalitnejší
                    servis v Bratislave ako naši olympionici za najlepšiu cenu vďaka
                    technológií a postupu na špičkovej úrovni.
              </Para>
              <a href="#cennikServisu"><Button style={{cursor:"pointer"}}>Cenník</Button></a>


          </Col>
          <Col xs={false} sm={false} mdOffset={0} md={6} lgOffset={0} lg={6}>
            <ImageWrapper modifiers="underNav" width="695px" height="495px">
              <Img fluid={data.servis.childImageSharp.fluid} alt="XXX"/>
            </ImageWrapper>
            </Col>
        </Row>
      </Container1>

      <Container1>
        <Row between="md">
          <Col xsOffset={1} xs={10} smOffset={2} sm={8} mdOffset={0} md={5} lgOffset={0} lg={5}>
            <RoundBox modifiers="servis">
              <div className="containerModels">
              <Para2 className="boxName">Montáž a premontáž viazania poskytujeme pre tieto značky a modely do 2 až 3 dní.</Para2>
              <table>
              <tbody>
              <tr>
                <th className="tableLeft border">Značka</th>
                <th className="tableRight border">Model</th> 
              </tr>
              <tr>
                <td className="tableLeft border">GS</td>
                <td className="tableRight border">ICON</td> 
              </tr>
              <tr>
                <td className="tableLeft">Diamir</td>
                <td className="tableRight"></td> 
              </tr>
              <tr>
                <td className="tableLeft">Marker</td>
                <td className="tableRight"></td> 
              </tr>
              <tr>
                <td className="tableLeft">Dynafit</td>
                <td className="tableRight">Všetky modely</td> 
              </tr>
              <tr>
                <td className="tableLeft">ATK</td>
                <td className="tableRight"></td> 
              </tr>
              <tr>
                <td className="tableLeft">Tyrolia-Fisher</td>
                <td className="tableRight"></td> 
              </tr>
              <tr>
                <td className="tableLeft border">Salmon-Aromic</td>
                <td className="tableRight border"></td> 
              </tr>
              <tr>
                <td className="tableLeft pricing">Montáž</td>
                <td className="tableRight pricing">25€</td> 
              </tr>
              <tr>
                <td className="tableLeft pricing">Premontáž</td>
                <td className="tableRight pricing">30€</td> 
              </tr>
              </tbody>
            </table>
              </div>
            </RoundBox>
          </Col>
          <Col xsOffset={1}  xs={10} smOffset={2} sm={8} mdOffset={0} md={5} lgOffset={0} lg={5}>
          <Head2 align="left">Vedeli ste, že</Head2>
          <Para1>
            „Z výroby máte k dispozícii 1mm sklznice? Za jeden malý servis
            odoberieme 0,033mm materiálu. To znamená, že lyža vydrží 30 malých
            servisov! Pokiaľ si necháte urobiť 1 malý servis za sezónu,
            lyža vám vydrží 30 rokov.“
           </Para1>
           <Para1>
           „Vďaka pravidelnému servisu dochádza k dlhšej životnosti lyží snowboardov!
            Je úplne nevyhnutné, aby lyže či snowboard boli pripravené pred začiatkom sezóny.
            V tomto smere odporúčame si nechať spraviť veľký servis vždy na konci sezóny, a to
            z toho dôvodu aby impregnačná vosková vrstva na sklznici zakonzervovala sklznicu
            a hranu.“
           </Para1>
          </Col>
        </Row>
      </Container1>
      <Head2 align="center" id="cennikServisu" style={{paddingBottom:"50px", paddingTop:"50px"}}>Cenník servisu</Head2>
      <Container2>
      <RoundBox modifiers="servis">
      <div className="containerPricing" style={{padding:" 5px 15px 40px 15px"}}>
        <table>
        <tbody>
          {/*---------------------------------------------------------------------------------------------------------------------------------*/}
          <tr>
                  <td className="tableLeft packageName">Brúsenie hrán</td>
                  <td className="tableRight"></td> 
          </tr>
          <tr>
                  <td className="tableLeft">Brúsenie hrán, Tuning spodnej hrany</td>
                  <td className="tableRight packagePrice">10€</td> 
          </tr>
          <tr>
                  <td className="tableLeft">Brúsenie hrán, Tuning spodnej hrany, 2x voskovanie a leštenie</td>
                  <td className="tableRight packagePrice">12€</td> 
          </tr>
          {/*---------------------------------------------------------------------------------------------------------------------------------*/}
          <tr>
                  <td className="tableLeft packageName">Voskovanie</td>
                  <td className="tableRight"></td> 
          </tr>
          <tr>
                  <td className="tableLeft">2x Voskovanie za tepla a leštenie </td>
                  <td className="tableRight packagePrice">5€</td> 
          </tr>
          {/*---------------------------------------------------------------------------------------------------------------------------------*/}
          <tr>
                  <td className="tableLeft packageName">Infra voskovanie</td>
                  <td className="tableRight"></td> 
          </tr>
          <tr>
                  <td className="tableLeft">V kombinácií s balíčkom BEKR alebo RACE</td>
                  <td className="tableRight packagePrice">5€</td> 
          </tr>
          <tr>
                  <td className="tableLeft">Samostatné voskovanie</td>
                  <td className="tableRight packagePrice">9€</td> 
          </tr>
          {/*---------------------------------------------------------------------------------------------------------------------------------*/}
          <tr>
                  <td className="tableLeft packageName">Malý servis základný</td>
                  <td className="tableRight"></td> 
          </tr>
          <tr>
                  <td className="tableLeft tableWidth">Predbrúsenie na páse, brúsenie hrán, tuning hrán pásom Trizac, zaleštenie skĺznice korkovým pásom, voskovanie a leštenie</td>
                  <td className="tableRight packagePrice">15€</td> 
          </tr>
          {/*---------------------------------------------------------------------------------------------------------------------------------*/}
          <tr>
                  <td className="tableLeft packageName">Veľký servis základný</td>
                  <td className="tableRight"></td> 
          </tr>
          <tr>
                  <td className="tableLeft tableWidth">Balíček < span className="pricing">Malý servis základný obohatený</span> obohatený o zaliatie rýh</td>
                  <td className="tableRight packagePrice">21€</td> 
          </tr>
          {/*---------------------------------------------------------------------------------------------------------------------------------*/}
          <tr>
                  <td className="tableLeft packageName">Malý servis Bekr</td>
                  <td className="tableRight"></td> 
          </tr>
          <tr>
                  <td className="tableLeft tableWidth">Základné predbrúsenie, predbrúsenie na kameni, krížová štruktúra, brúsenie hrán keramikou, tuning spodnej hrany, 2x voskovanie za tepla, leštenie a kontrola a premazanie viazania</td>
                  <td className="tableRight packagePrice">20€</td> 
          </tr>
          {/*---------------------------------------------------------------------------------------------------------------------------------*/}
          <tr>
                  <td className="tableLeft packageName">Veľký servis Bekr</td>
                  <td className="tableRight"></td> 
          </tr>
          <tr>
                  <td className="tableLeft tableWidth">Balíček <span className="pricing">Malý servis Bek</span> obohatený o zaliatie rýh</td>
                  <td className="tableRight packagePrice">26€</td> 
          </tr>
          {/*---------------------------------------------------------------------------------------------------------------------------------*/}
          <tr>
                  <td className="tableLeft packageName">Malý servis Race</td>
                  <td className="tableRight"></td> 
          </tr>
          <tr>
                  <td className="tableLeft tableWidth">Základné predbrúsenie, predbrúsenie na kameni, krížová štruktúra, brúsenie hrán keramikou, tuning spodnej hrany, 2x voskovanie za tepla, leštenie a kontrola, premazanie viazania, variálna štruktúra, fluórivý vosk, ručný dobrus hran diamantom a možnosť individualných požiadavok ako sú uhly, štruktúry a vosky</td>
                  <td className="tableRight packagePrice">33€</td> 
          </tr>
          {/*---------------------------------------------------------------------------------------------------------------------------------*/}
          <tr>
                  <td className="tableLeft packageName">Veľký servis Race</td>
                  <td className="tableRight"></td> 
          </tr>
          <tr>
                  <td className="tableLeft tableWidth">Balíček <span className="pricing">Malý servis Race</span> obohatený o zaliatie rýh</td>
                  <td className="tableRight packagePrice">39€</td> 
          </tr>
          {/*---------------------------------------------------------------------------------------------------------------------------------*/}
          </tbody>
        </table>
      </div>
      </RoundBox>
      </Container2>
      </Container>
    </Layout>
  </>
)

}
const Container = styled.main`
  padding-top:80px;
  padding-bottom:60px;
  .textBox{
    max-width:660px;
  }

  .containerModels{
    max-width:420px;
    margin:auto;
    padding: 5px 20px 20px 20px;
  }

  .containerPricing{
    max-width:880px;
    margin:auto;
    padding: 5px 0 20px 0;
  }

  .boxName{
    text-align:center;
  }

  table{
    width:100%;
    border-collapse:collapse;

    th{
      font-weight: 500;
      font-size: 18px;
      line-height: 27px;
    }

    .border{
      border-bottom: 1px solid black;
    }


    tr, td{
      font-weight: 200;
      font-size: 18px;
      line-height: 27px;
      vertical-align:bottom;
    }

    .tableLeft{
      text-align:left;
    }

    .tableRight{
      text-align:right;
    }

    .pricing{
      font-weight: 300;
    }

    .packageName{
      font-weight: 300;
      font-size: 25px;
      line-height: 37px;
      padding-top: 30px;
    }

    .packagePrice{
      font-weight: 500;
      font-size: 25px;
      line-height: 37px;
      padding-left:5vw;
    }


  }

`
export default IndexPage