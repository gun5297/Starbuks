import styled from 'styled-components';

export const StarBucksContainer = styled.div`
    width: ${(props) => (props.width ? props.width : '1200px')};
    margin: 50px auto;
    h1 {
        font-size: 40px;
        text-align: center;
        font-weight: 500;
        text-transform: uppercase;
        margin-bottom: 20px;
        padding: 20px 0;
    }
`;
