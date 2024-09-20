import { useState } from 'react';
import { StarBucksFormContainer } from './style';
import { useEffect } from 'react';

const StarBucksForm = ({ searchContent }) => {
    const [value, setValue] = useState('');
    const [option, setOption] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        searchContent(option, value);
    };

    useEffect(() => {
        const regex = new RegExp(value, 'gi');
        searchContent(option, regex);
    }, [value]);

    useEffect(() => {
        option == 'name' && alert('카테고리는 영문으로 입력해주세요');
    }, [option]);
    return (
        <StarBucksFormContainer onSubmit={onSubmit}>
            <select onChange={(e) => setOption(e.target.value)}>
                <option value=''>===검색===</option>
                <option value='name'>카테고리</option>
                <option value='title'>상품명</option>
            </select>
            <input
                type='text'
                value={value}
                placeholder='제품명을 입력하세요'
                onChange={(e) => setValue(e.target.value)}
            />
        </StarBucksFormContainer>
    );
};

export default StarBucksForm;
