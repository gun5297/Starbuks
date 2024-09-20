import { ContentItemContainer } from './style';

const ContentItem = ({ id, title, name, price, img, desc }) => {
    return (
        <ContentItemContainer>
            <img src={img} alt={name} />
            <h3>{title}</h3>
            <p>가격 : {price}</p>
            <p>정보 : {desc}</p>
        </ContentItemContainer>
    );
};

export default ContentItem;
