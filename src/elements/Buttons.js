import styled from 'styled-components';
import { color, shadow, rounded } from '../utilities';

export const Button = styled.button`

  width:220px;
  height:84px;
  padding: 10px 50px; 

  background: ${color.gradient};
  color: ${color.white};  
  ${rounded.button};
  ${shadow.button};
  border:none;  

  font-weight: 300;
  font-size: 25px;
  line-height: 37px;

`;
