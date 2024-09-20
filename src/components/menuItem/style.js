import styled from 'styled-components';

export const MenuItemContainer = styled.li`
    padding: 8px 30px;
    font-size: 16px;
    border: none;
    background: #333;
    color: #fff;
    margin-right: 14px;
    cursor: pointer;
    user-select: none;
    border-radius: 25px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.03);
    transition: 0.3s;
    &:last-child {
        margin-right: 0;
    }
    &.on {
        background: #046241;
        transform: scale(1.05);
    }
`;
