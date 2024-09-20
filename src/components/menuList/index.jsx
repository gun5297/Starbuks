import MenuItem from '../menuItem';
import { MenuListContainer } from './style';

const MenuList = ({ menu, changeContent }) => {
    return (
        <MenuListContainer>
            {menu.map((item) => (
                <MenuItem key={item.id} {...item} changeContent={changeContent} />
            ))}
        </MenuListContainer>
    );
};

export default MenuList;
