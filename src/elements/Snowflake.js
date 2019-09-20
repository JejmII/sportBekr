import styled from 'styled-components';

export const Snow = styled.div`
    img{    
        z-index:-10;
        right:${(props) => props.right} ;
        left:${(props) => props.left} ;
        top:${(props) => props.top} ;
        bottom:${(props) => props.bottom} ;
        transform: rotate(${(props) => props.rotate});
        position:absolute;
        z-index: -10px;
        user-select: none;
    }
`;