import ContentItem from '../contentItem';
import { ContentListContainer } from './style';

const ContentList = ({ data }) => {
    return (
        <ContentListContainer>
            {data.map((item) => (
                <ContentItem key={item.id} {...item} />
            ))}
        </ContentListContainer>
    );
};

export default ContentList;
