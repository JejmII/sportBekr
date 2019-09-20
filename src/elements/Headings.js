import styled from 'styled-components';

export const Head1 = styled.h1`

font-weight: 200;
font-size: 65px;
line-height: 90px;
color: #111212;
`;

export const Head2 = styled.h2`

font-weight: 200;
font-size: 45px;
line-height: 67px;
color: #111212;
text-align:${(props) => props.align};
`;

export const Head3 = styled.h3`

font-weight: 300;
font-size: 35px;
line-height: 52px;
color: #111212;
`;

export const Head4 = styled.h4`

font-weight: 300;
font-size: 25px;
line-height: 37px;
color: #111212;
`;