import styled from 'styled-components';
import { color, rounded } from '../utilities';
import { applyStyleModifiers } from 'styled-components-modifiers';

const DIV_MODIFIERS = {
  left: () =>`
    background: ${color.grey};
    ${rounded.faqLeft};
    color: ${color.black};  
  `,

  right: () =>`
    background: ${color.gradient};
    ${rounded.faqRight};
    color: ${color.white};
    align-self: flex-end;
  `
};

export const Messenger = styled.div`

    padding: 10px 20px;
    border:none; 
    max-width:${(props) => props.size};
    ${applyStyleModifiers(DIV_MODIFIERS)};
    margin-bottom:30px;

  p{
    margin:0;
    font-weight: 300;
    font-size: 25px;
    line-height: 45px;
  }
`;
