import { MenuItemContainer } from './style';

const MenuItem = ({ id, category, name, isClass, changeContent }) => {
    return (
        <MenuItemContainer className={isClass ? 'on' : ''} onClick={() => changeContent(name)}>
            {category}
        </MenuItemContainer>
    );
};

export default MenuItem;
