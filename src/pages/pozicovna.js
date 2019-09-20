import React from "react"
import { graphql, useStaticQuery  } from "gatsby"
import Img from "gatsby-image"
import { ImageWrapper,  Head1, Head2, Head3, Container1, Para, Para1, Para2, Button, RoundBox } from '../elements'
import Layout from "../components/layout";
import { Col, Row} from 'react-styled-flexboxgrid'
import styled from'styled-components'
import SEO from "../components/seo"



const IndexPage = () => {

  const data = useStaticQuery(graphql`
  query {
    pozicovna: file(relativePath: { eq: "pozicovna.jpg" }) {
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
    <SEO title="Požičovňa" description="Sport Bekr Požičovňa. Požičovňa skialpinistických lyží, palíc, prilieb a ostatných vecí potrebných ku skialpinizmu." />
      <Content>
      <Container1 className="paddingBottom100">
        <Row>
        <Col xsOffset={1} xs={11} smOffset={1} sm={10} mdOffset={0} md={6} lgOffset={0} lg={6}>
            <Head1 className="textBox">Skialp požičovňa</Head1>
              <Para>Nepotrebujete vlastniť drahú špičkovú výstroj pre to aby ste zažili dokonalé športové zážitky so skialpom. Stačí ak si výstroj zaobstaráte u nás.<br />
              Naše výstroje sú vždy profesionálne nabrúsené, navoskované a dôkladne vydenzifikované.
              Neváhajte si požičiať aj na poslednú chvílu. 
              </Para>
              <a href="#cennik"><Button style={{cursor:"pointer"}}>Zistiť viac</Button></a>
          </Col>

          <Col xs={false} sm={false} mdOffset={0} md={6} lgOffset={0} lg={6}>
            <ImageWrapper modifiers="underNav" width="695px" height="495px">
              <Img fluid={data.pozicovna.childImageSharp.fluid} alt="XXX"/>
            </ImageWrapper>
          </Col>
        </Row>
      </Container1>


      <Container1>
        <Row between="md">
          <Col xsOffset={1} xs={10} smOffset={1} sm={10} mdOffset={0} md={5} lgOffset={0} lg={5} >
            <RoundBox modifiers="servis">
              <div className="containerModels">
                <Para style={{textAlign:"center"}}>Naša ponuka</Para>
              <table>
              <tbody>
              <tr>
                <td className="tableLeft border weight300">Lyže</td>
                <td className="tableRight border weight500">Hagan, Völkl a Fischer</td> 
              </tr>
              <tr>
                <td className="tableLeft border weight300">Mohérove pásy</td>
                <td className="tableRight border weight500">Montana a Völkl </td> 
              </tr>
              <tr>
                <td className="tableLeft border weight300">Lyžiarky</td>
                <td className="tableRight border weight500">Dynafit, Scott a Scarpa</td> 
              </tr>
              <tr>
                <td className="tableLeft border weight300">Viazanie</td>
                <td className="tableRight border weight500">Tyrolia Ambition</td> 
              </tr>
              <tr>
                <td colSpan="2" className="tableLeft weight300">Roztahovacie palice na skialp</td>
              </tr>
              </tbody>
            </table>
              </div>
            </RoundBox>
          </Col>
          <Col xsOffset={1}  xs={10} smOffset={1} sm={10} mdOffset={0} md={5} lgOffset={0} lg={5}>
          <Head2 align="left">Cenník</Head2>
          <Para1>
            Zimnú výstroj je možné rezervovať si OSOBNE najskôr 7 dní pred lyžovačkou. Zálohu
            10€ za rezerváciu Vám vrátime pri vyzdvihnutí výstroja. Alebo ONLINE kedykoľvek pred
            plánovanou lyžovačkou / lyžiarskym.
           </Para1>
          </Col>
        </Row>
      </Container1>
      <Head2 id="cennik" align="center" style={{paddingBottom:"50px"}}>Cenník</Head2>

      <Container1 style={{paddingBottom:"80px"}}>
      <Row between="md">
          <Col xsOffset={1} xs={10} smOffset={3} sm={6} mdOffset={1} md={5} lgOffset={0} lg={3} className="space">
          <RoundBox modifiers="pozicovna">

            <div className="containerOffer">
          <Head3 style={{textAlign:"center",fontWeight: "250" }}>Komplet</Head3>
          <table style={{paddingBottom:"30px"}}>
          <tbody>
          <tr>
                <td className="tableLeft border weight300">1 Deň</td>
                <td className="tableRight border weight500">25€</td> 
              </tr>
              <tr>
                <td className="tableLeft border weight300">1 a 1/2 Dňa</td>
                <td className="tableRight border weight500">35€</td> 
              </tr>
              <tr>
                <td className="tableLeft border weight300">2 Dni</td>
                <td className="tableRight border weight500">50€</td> 
              </tr>
              <tr>
                <td className="tableLeft border weight300">3 Dni</td>
                <td className="tableRight border weight500">65€</td> 
              </tr>
              <tr>
                <td className="tableLeft border weight300">4 Dni</td>
                <td className="tableRight border weight500">75€</td> 
              </tr>
              <tr>
                <td className="tableLeft border weight300">5 - 8 Dní</td>
                <td className="tableRight border weight500">85€</td> 
              </tr>
              <tr>
                <td className="tableLeft weight300">Každý další deň</td>
                <td className="tableRight weight500">10€</td> 
              </tr>
              </tbody>
            </table>
            <p className="zaloha">Záloha<br />250€</p>
          </div>
          </RoundBox>

          </Col>
          <Col xsOffset={1} xs={10} smOffset={3} sm={6} mdOffset={1} md={5} lgOffset={0} lg={3} className="space">
          <RoundBox modifiers="pozicovna">
            <div className="containerOffer">
          <Head3 style={{textAlign:"center",fontWeight: "250" }}>Lyže + pásy</Head3>
          <table style={{paddingBottom:"30px"}}>
          <tbody>
          <tr>
                <td className="tableLeft border weight300">1 Deň</td>
                <td className="tableRight border weight500">19€</td> 
              </tr>
              <tr>
                <td className="tableLeft border weight300">1 a 1/2 Dňa</td>
                <td className="tableRight border weight500">25€</td> 
              </tr>
              <tr>
                <td className="tableLeft border weight300">2 Dni</td>
                <td className="tableRight border weight500">32€</td> 
              </tr>
              <tr>
                <td className="tableLeft border weight300">3 Dni</td>
                <td className="tableRight border weight500">43€</td> 
              </tr>
              <tr>
                <td className="tableLeft border weight300">4 Dni</td>
                <td className="tableRight border weight500">55€</td> 
              </tr>
              <tr>
                <td className="tableLeft border weight300">5 - 8 Dní</td>
                <td className="tableRight border weight500">71€</td> 
              </tr>
              <tr>
                <td className="tableLeft weight300">Každý další deň</td>
                <td className="tableRight weight500">5€</td> 
              </tr>
              </tbody>
            </table>
            <p className="zaloha">Záloha<br />150€</p>
          </div>
          </RoundBox>
          </Col>
          <Col xsOffset={1} xs={10} smOffset={3} sm={6} mdOffset={1} md={5} lgOffset={0} lg={3} className="space">
          <RoundBox modifiers="pozicovna">
            <div className="containerOffer">
          <Head3 style={{textAlign:"center",fontWeight: "250" }}>Lyžiarky</Head3>
          <table style={{paddingBottom:"30px"}}>
          <tbody>
          <tr>
                <td className="tableLeft border weight300">1 Deň</td>
                <td className="tableRight border weight500">10€</td> 
              </tr>
              <tr>
                <td className="tableLeft border weight300">1 a 1/2 Dňa</td>
                <td className="tableRight border weight500">15€</td> 
              </tr>
              <tr>
                <td className="tableLeft border weight300">2 Dni</td>
                <td className="tableRight border weight500">20€</td> 
              </tr>
              <tr>
                <td className="tableLeft border weight300">3 Dni</td>
                <td className="tableRight border weight500">30€</td> 
              </tr>
              <tr>
                <td className="tableLeft border weight300">4 Dni</td>
                <td className="tableRight border weight500">35€</td> 
              </tr>
              <tr>
                <td className="tableLeft border weight300">5 - 8 Dní</td>
                <td className="tableRight border weight500">40€</td> 
              </tr>
              <tr>
                <td className="tableLeft weight300">Každý další deň</td>
                <td className="tableRight weight500">5€</td> 
              </tr>
              </tbody>
            </table>
            <p className="zaloha">Záloha<br />100€</p>
          </div>
          </RoundBox>
          </Col>
          <Col xsOffset={1} xs={10} smOffset={3} sm={6} mdOffset={1} md={5} lgOffset={0} lg={3} className="space">
          <RoundBox modifiers="pozicovna">
            <div className="containerOffer">
          <Head3 style={{textAlign:"center",fontWeight: "250" }}>Palice</Head3>
          <table style={{paddingBottom:"30px"}}>
          <tbody>
          <tr>
                <td className="tableLeft border weight300">1 Deň</td>
                <td className="tableRight border weight500">5€</td> 
              </tr>
              <tr>
                <td className="tableLeft border weight300">1 a 1/2 Dňa</td>
                <td className="tableRight border weight500">7€</td> 
              </tr>
              <tr>
                <td className="tableLeft border weight300">2 Dni</td>
                <td className="tableRight border weight500">9€</td> 
              </tr>
              <tr>
                <td className="tableLeft border weight300">3 Dni</td>
                <td className="tableRight border weight500">11€</td> 
              </tr>
              <tr>
                <td className="tableLeft border weight300">4 Dni</td>
                <td className="tableRight border weight500">13€</td> 
              </tr>
              <tr>
                <td className="tableLeft border weight300">5 - 8 Dní</td>
                <td className="tableRight border weight500">15€</td> 
              </tr>
              <tr>
                <td className="tableLeft weight300">Každý další deň</td>
                <td className="tableRight weight500">2€</td> 
              </tr>
              </tbody>
            </table>
            <p className="zaloha">Záloha<br />20€</p>
          </div>
          </RoundBox>
          </Col>
      </Row>
      </Container1>

      <Container1>
      <Row between="md">
          <Col xsOffset={1} xs={10} smOffset={1} sm={10} mdOffset={0} md={5} lgOffset={0} lg={5}>
          <Head2 align="center">Zapožičanie</Head2>
          <Para2>Pre zapožičanie je nutné predložiť minimálne jeden platný doklad totožnosti (občiansky
                preukaz, vodičský preukaz, cestovný pas).
                Športová výstroj sa zapožičiava na dobu určitú. Doba zapožičania je záväzná z dôvodu
                ďalších rezervácií.
                Pri zapožičaní sa skladá záloha v hotovosti až do výšky 100% hodnoty výstroja alebo po
                dohode platný doklad okrem občianskeho preukazu! Výška záloh je stanovená
                individuálne v konkrétnej nájomnej zmluve. Zálohu vraciame pri riadnom vrátení
                zapožičanej výstroje. Platbu zálohy neprijímame platobnou kartou.
                Pri zapožičaní výstroje je cena požičovného započítaná už v zálohe (napr. hodnota
                výstroje je 100€, požičovného 50€, ZÁLOHA je 100€ a pri riadnom vrátení Vám vrátime
                50€).
                Pri omeškanom vrátení je záloha krátená o doplatok nájomného.
                Pri predčasnom vrátení sa zostávajúca časť nájomného zaplatená do riadneho termínu
                účtuje 50% z každého dňa.
          </Para2>
          </Col>
          <Col xsOffset={1} xs={10} smOffset={1} sm={10} mdOffset={0} md={5} lgOffset={0} lg={5}>
          <Head2 align="center">Poškodenie výstroje</Head2>
          <Para2>Zapožičanú výstroj si pri prevzatí dôkladne skontrolujte! V prípade zistených nedostatkov
                upozornite obsluhu!
                Pokiaľ bude zrejmé, že zapožičaná výstroj bola nesprávne používaná, zákazník
                zodpovedá v plnej výške za spôsobenú škodu.
                Prevádzkovateľ má v tomto prípade právo použiť zálohu na opravu alebo náhradu
                poškodeného materiálu podľa cenníku servisných prác (poškodenie posudzuje servisný
                technik).
                Bežné opravy vychádzajúce z normálneho používania sú hradené požičovňou.
          </Para2>
          <Head2 align="center">Ostatné</Head2>
          <Para2>Prevádzkovateľ si vyhradzuje právo na zmenu podmienok zapožičania.
          Naša spoločnosť postupuje pri spracovávaní osobných údajov v súlade so zákonom č.
          122/2013 Z. z.</Para2>
          </Col>
      </Row>
      </Container1>
      </Content>
    </Layout>
  </>
)

}
const Content = styled.main`
  padding-top:80px;
  padding-bottom:60px;
  .textBox{
    max-width:660px;
  }

  .containerModels{
    max-width:420px;
    margin:auto;
    padding: 5px 50px 30px 50px;
  }

  .containerOffer{
    max-width:250px;
    min-width:240px;
    margin:auto;
    padding: 10px 20px;
  }

  .zaloha{
    font-weight: normal;
    font-size: 30px;
    line-height: 40px;
    text-align: right;
    color: #234B88;
  }

  .space{
    padding-bottom:20px;
  }

  .icons{
    font-size:40px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding-top:20px;
    
  }

  table{
    width:100%;
    border-collapse:collapse;

    .border{
      border-bottom: 1px solid black;
    }


    tr, td{
      font-weight: 200;
      font-size: 18px;
      line-height: 27px;
      vertical-align:bottom;
      padding: 7px 0;
    }

    .tableLeft{
      text-align:left;
    }

    .tableRight{
      text-align:right;
    }

    .weight300{
      font-weight: 300;
    }

    .weight500{
      font-weight: 500;
    }

  }

`
export default IndexPage
