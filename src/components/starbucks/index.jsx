import Content from '../content';
import MenuList from '../menuList';
import dataList from '../../assets/api/starbucksData';
import { useState } from 'react';
import { StarBucksContainer } from './style';
import StarBucksForm from '../starbucksForm';
import { useEffect } from 'react';

// const menuList = ['All', ...new Set(dataList.map((item) => item.name))];
const menuList = [
    { id: 1, category: 'All', name: 'all', isClass: true },
    { id: 2, category: 'Coldbrew', name: 'coldbrew', isClass: false },
    { id: 3, category: 'Espresso', name: 'espresso', isClass: false },
    { id: 4, category: 'Frappuccino', name: 'frappuccino', isClass: false },
    { id: 5, category: 'Fizzio', name: 'fizzio', isClass: false },
];

const StarBucks = () => {
    const [data, setData] = useState(dataList);
    const [starBucks, setStarBucks] = useState(data);
    const [menu, setMenu] = useState(menuList);

    /** 카테고리 클릭 시 해당 카테고리에 맞는 상품 출력 */
    const changeContent = (name) => {
        name !== 'all'
            ? setData(dataList.filter((item) => item.name == name)) &
              setStarBucks(dataList.filter((item) => item.name == name))
            : setData(dataList) & setStarBucks(dataList);
        setMenu(
            menu.map((item) =>
                item.name == name ? { ...item, isClass: true } : { ...item, isClass: false }
            )
        );
    };

    const searchContent = (option, value) => {
        option && value
            ? setData(starBucks.filter((item) => item[option].match(value)))
            : setData(dataList);
    };

    return (
        <StarBucksContainer width='1200px'>
            <h1>StarBucks Menu</h1>
            <MenuList menu={menu} changeContent={changeContent} />
            <StarBucksForm searchContent={searchContent} />
            <Content data={data} />
        </StarBucksContainer>
    );
};

export default StarBucks;
