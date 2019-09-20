import styled from 'styled-components';
import { shadow, rounded } from '../utilities';
import { applyStyleModifiers } from 'styled-components-modifiers';

const DIV_MODIFIERS = {
    servis: () =>`
        ${rounded.radius30};
        ${shadow.main};
    `,

    pozicovna: () =>`
    ${rounded.rentalPrice};
    ${shadow.offerCard};
    `,

    predaj: () =>`
    ${rounded.radius30};
    ${shadow.main};
    width:350px;
    margin: auto;
    `
  };

export const RoundBox = styled.div`

    ${applyStyleModifiers(DIV_MODIFIERS)};

`;