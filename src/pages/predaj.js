import React from "react"
import { graphql, useStaticQuery  } from "gatsby"
import Img from "gatsby-image"
import { ImageWrapper,  Head1, Head2, Container1, Container3, RoundBox } from '../elements'
import Layout from "../components/layout"
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
    <SEO title="Predaj" description="Sport Bekr predaj. Predaj skialpinistických lyží, palíc, prilieb a ostatných vecí potrebných ku skialpinizmu."/>
      <Container>
      <Container1>
            <Head1>Predaj skialp vybavenia</Head1>
            <Head2>Mužské skialpinistické lyže</Head2>
      </Container1>
      <Container3>
            <Row className="paddingItems">
            <Col xsOffset={1} xs={10} smOffset={0} sm={6} mdOffset={0} md={6} lgOffset={0} lg={4} className="space">
            <RoundBox modifiers="predaj">
              <div className="containerModels">
                <div className="itemPicture">
                <ImageWrapper modifiers="itemPicture" width="300px" height="300px">
                    <Img fluid={data.pozicovna.childImageSharp.fluid} alt="Lyže Skialp k predaju 1"/>
                </ImageWrapper> 
                </div>

              <table>
              <tbody>
              <tr>
                <td className="tableLeft border weight300">Stav</td>
                <td className="tableRight border">Nové</td>
              </tr>
              <tr>
                <td className="tableLeft border weight300">Značka</td>
                <td className="tableRight border">Bollé Backline Visor</td>
              </tr>
              <tr>
                <td className="tableLeft border weight300">Dĺžka</td>
                <td className="tableRight border">150 - 160 cm</td>
              </tr>
              <tr>
                <td colSpan="2" className="priceItem">90€</td>
              </tr>
              </tbody>
            </table>
              </div>
            </RoundBox>
            </Col>
            <Col xsOffset={1} xs={10} smOffset={0} sm={6} mdOffset={0} md={6} lgOffset={0} lg={4} className="space">
            <RoundBox modifiers="predaj">
              <div className="containerModels">
                <div className="itemPicture">
                <ImageWrapper modifiers="itemPicture" width="300px" height="300px">
                    <Img fluid={data.pozicovna.childImageSharp.fluid} alt="Lyže Skialp k predaju 2"/>
                </ImageWrapper> 
                </div>

              <table>
              <tbody>
              <tr>
                <td className="tableLeft border weight300">Stav</td>
                <td className="tableRight border">Nové</td>
              </tr>
              <tr>
                <td className="tableLeft border weight300">Značka</td>
                <td className="tableRight border">Bollé Backline Visor</td>
              </tr>
              <tr>
                <td className="tableLeft border weight300">Dĺžka</td>
                <td className="tableRight border">150 - 160 cm</td>
              </tr>
              <tr>
                <td colSpan="2" className="priceItem">90€</td>
              </tr>
              </tbody>
            </table>
              </div>
            </RoundBox>
            </Col>
            <Col xsOffset={1} xs={10} smOffset={0} sm={6} mdOffset={0} md={6} lgOffset={0} lg={4} className="space">
            <RoundBox modifiers="predaj">
              <div className="containerModels">
                <div className="itemPicture">
                <ImageWrapper modifiers="itemPicture" width="300px" height="300px">
                    <Img fluid={data.pozicovna.childImageSharp.fluid} alt="Lyže Skialp k predaju 3"/>
                </ImageWrapper> 
                </div>

              <table>
              <tbody>
              <tr>
                <td className="tableLeft border weight300">Stav</td>
                <td className="tableRight border">Nové</td>
              </tr>
              <tr>
                <td className="tableLeft border weight300">Značka</td>
                <td className="tableRight border">Bollé Backline Visor</td>
              </tr>
              <tr>
                <td className="tableLeft border weight300">Dĺžka</td>
                <td className="tableRight border">150 - 160 cm</td>
              </tr>
              <tr>
                <td colSpan="2" className="priceItem">90€</td>
              </tr>
              </tbody>
            </table>
              </div>
            </RoundBox>
            </Col>
            <Col xsOffset={1} xs={10} smOffset={0} sm={6} mdOffset={0} md={6} lgOffset={0} lg={4} className="space">
            <RoundBox modifiers="predaj">
              <div className="containerModels">
                <div className="itemPicture">
                <ImageWrapper modifiers="itemPicture" width="300px" height="300px">
                    <Img fluid={data.pozicovna.childImageSharp.fluid} alt="Lyže Skialp k predaju 4"/>
                </ImageWrapper> 
                </div>

              <table>
              <tbody>
              <tr>
                <td className="tableLeft border weight300">Stav</td>
                <td className="tableRight border">Nové</td>
              </tr>
              <tr>
                <td className="tableLeft border weight300">Značka</td>
                <td className="tableRight border">Bollé Backline Visor</td>
              </tr>
              <tr>
                <td className="tableLeft border weight300">Dĺžka</td>
                <td className="tableRight border">150 - 160 cm</td>
              </tr>
              <tr>
                <td colSpan="2" className="priceItem">90€</td>
              </tr>
              </tbody>
            </table>
              </div>
            </RoundBox>
            </Col>
            </Row>
          
      </Container3>
      <Container1>
            <Head2>Mužské skialpinistické lyže</Head2>
      </Container1>
      <Container3>
            <Row className="paddingItems">
            <Col xsOffset={1} xs={10} smOffset={0} sm={6} mdOffset={0} md={6} lgOffset={0} lg={4} className="space">
            <RoundBox modifiers="predaj">
              <div className="containerModels">
                <div className="itemPicture">
                <ImageWrapper modifiers="itemPicture" width="300px" height="300px">
                    <Img fluid={data.pozicovna.childImageSharp.fluid} alt="Lyže Skialp k predaju 5"/>
                </ImageWrapper> 
                </div>

              <table>
              <tbody>
              <tr>
                <td className="tableLeft border weight300">Stav</td>
                <td className="tableRight border">Nové</td>
              </tr>
              <tr>
                <td className="tableLeft border weight300">Značka</td>
                <td className="tableRight border">Bollé Backline Visor</td>
              </tr>
              <tr>
                <td className="tableLeft border weight300">Dĺžka</td>
                <td className="tableRight border">150 - 160 cm</td>
              </tr>
              <tr>
                <td colSpan="2" className="priceItem">90€</td>
              </tr>
              </tbody>
            </table>
              </div>
            </RoundBox>
            </Col>
            <Col xsOffset={1} xs={10} smOffset={0} sm={6} mdOffset={0} md={6} lgOffset={0} lg={4} className="space">
            <RoundBox modifiers="predaj">
              <div className="containerModels">
                <div className="itemPicture">
                <ImageWrapper modifiers="itemPicture" width="300px" height="300px">
                    <Img fluid={data.pozicovna.childImageSharp.fluid} alt="Lyže Skialp k predaju 6"/>
                </ImageWrapper> 
                </div>

              <table>
              <tbody>
              <tr>
                <td className="tableLeft border weight300">Stav</td>
                <td className="tableRight border">Nové</td>
              </tr>
              <tr>
                <td className="tableLeft border weight300">Značka</td>
                <td className="tableRight border">Bollé Backline Visor</td>
              </tr>
              <tr>
                <td className="tableLeft border weight300">Dĺžka</td>
                <td className="tableRight border">150 - 160 cm</td>
              </tr>
              <tr>
                <td colSpan="2" className="priceItem">90€</td>
              </tr>
              </tbody>
            </table>
              </div>
            </RoundBox>
            </Col>
            <Col xsOffset={1} xs={10} smOffset={0} sm={6} mdOffset={0} md={6} lgOffset={0} lg={4} className="space">
            <RoundBox modifiers="predaj">
              <div className="containerModels">
                <div className="itemPicture">
                <ImageWrapper modifiers="itemPicture" width="300px" height="300px">
                    <Img fluid={data.pozicovna.childImageSharp.fluid} alt="Lyže Skialp k predaju 7"/>
                </ImageWrapper> 
                </div>

              <table>
              <tbody>
              <tr>
                <td className="tableLeft border weight300">Stav</td>
                <td className="tableRight border">Nové</td>
              </tr>
              <tr>
                <td className="tableLeft border weight300">Značka</td>
                <td className="tableRight border">Bollé Backline Visor</td>
              </tr>
              <tr>
                <td className="tableLeft border weight300">Dĺžka</td>
                <td className="tableRight border">150 - 160 cm</td>
              </tr>
              <tr>
                <td colSpan="2" className="priceItem">90€</td>
              </tr>
              </tbody>
            </table>
              </div>
            </RoundBox>
            </Col>
            <Col xsOffset={1} xs={10} smOffset={0} sm={6} mdOffset={0} md={6} lgOffset={0} lg={4} className="space">
            <RoundBox modifiers="predaj">
              <div className="containerModels">
                <div className="itemPicture">
                <ImageWrapper modifiers="itemPicture" width="300px" height="300px">
                    <Img fluid={data.pozicovna.childImageSharp.fluid} alt="Lyže Skialp k predaju 8"/>
                </ImageWrapper> 
                </div>

              <table>
              <tbody>
              <tr>
                <td className="tableLeft border weight300">Stav</td>
                <td className="tableRight border">Nové</td>
              </tr>
              <tr>
                <td className="tableLeft border weight300">Značka</td>
                <td className="tableRight border">Bollé Backline Visor</td>
              </tr>
              <tr>
                <td className="tableLeft border weight300">Dĺžka</td>
                <td className="tableRight border">150 - 160 cm</td>
              </tr>
              <tr>
                <td colSpan="2" className="priceItem">90€</td>
              </tr>
              </tbody>
            </table>
              </div>
            </RoundBox>
            </Col>
            </Row>
          
      </Container3>
      </Container>
    </Layout>
  </>
)

}
const Container = styled.main`
  padding-top:80px;
  padding-bottom:60px;

  .containerModels{
    max-width:430px;
    margin:auto;
    padding: 30px 40px;
  }

  .containerOffer{
    max-width:250px;
    min-width:240px;
    margin:auto;
    padding: 10px 20px;
  }

  .priceItem{
    font-weight: normal;
    font-size: 27px;
    line-height: 35px;
    text-align: center;
    color: #234B88;
    padding-top:20px;
  }

  .space{
    padding-bottom:3vw;
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
