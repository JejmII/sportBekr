import styled from 'styled-components';
import { rounded, shadow } from '../utilities';
import { applyStyleModifiers } from 'styled-components-modifiers';

const IMG_MODIFIERS = {
  portret: () =>`
    ${rounded.portret};
    ${shadow.main};
  `,

  underNav: () =>`
    ${rounded.imgUnderNav};
    ${shadow.main};
  `,

  itemPicture: () =>`
  margin:0px;
  padding-bottom:10px;
  `

};

export const ImageWrapper = styled.div`
    margin:50px;
    max-width:${(props) => props.width};
    max-height:${(props) => props.height};
    ${applyStyleModifiers(IMG_MODIFIERS)};
    overflow: hidden;

  img {
    width:100%;
    height:auto;
  }
`;
