import styled from 'styled-components';

export const ContentItemContainer = styled.li`
    width: 350px;
    margin-right: 20px;
    margin-bottom: 25px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.03);
    border-radius: 10px;
    padding: 15px;
    transition: 0.3s;
    cursor: pointer;
    &:nth-child(3n) {
        margin-right: 0;
    }
    img {
        width: 350px;
    }
    h3 {
        font-size: 20px;
        color: tomato;
        margin-bottom: 5px;
        margin-top: 15px;
    }
    p {
        margin-bottom: 5px;
    }
    &:hover {
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.2);
        transform: scale(1.03);
    }
`;
