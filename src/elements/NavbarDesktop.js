import React from 'react'
import styled from'styled-components'
import { Link } from "gatsby"
import { color } from "../utilities"
import { Container1 } from "../elements"

class NavDesktop extends React.Component {

      render() {
      return (
        <Navbar>
          <Container1>
            <Menu>
              <Link to="/"><img src={require('../images/Logo.svg')} alt="Logo firmy | Sport Bekr" loading="lazy"/></Link>
              <ul>
                  <li><Link activeClassName="active" to="/servis">Servis</Link></li>
                  <li><Link activeClassName="active" to="/pozicovna">Požičovňa</Link></li>
                  <li><Link activeClassName="active" to="/predaj">Predaj</Link></li>
                  <li><Link activeClassName="active" to="/kontakty">Kontakty</Link></li>
              </ul>
            </Menu>
          </Container1>
        </Navbar>
      );
    }
  }


const Navbar = styled.header`
  background: ${color.white};
  height: 80px;
  width:100%;
`

const Menu = styled.nav`
    margin:0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    

    img{
      height:60px;
      padding-left: 6.2%;
    }

    ul {
        color: ${color.black};
        display: flex;

        li {
            list-style:none;
            padding: 0 20px;
            font-weight: 200;
            font-size: 30px;
            line-height: 45px;

            a{
                text-decoration:none;
                color: ${color.black};
                letter-spacing: .1em;
                transition: text-shadow .3s;
            }

            a:hover{
                text-shadow: 0 0 1.20px ${color.black}, 0 0 1.20px ${color.black};
            }

            .active{
              text-shadow: 0 0 1.20px ${color.black}, 0 0 1.20px ${color.black};
            }
        }
    }
`
  export default NavDesktop