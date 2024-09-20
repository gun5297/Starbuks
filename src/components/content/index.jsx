import ContentList from '../contentList';
import { ContentContainer } from './style';

const Content = ({ data }) => {
    return (
        <ContentContainer>
            <ContentList data={data} />
        </ContentContainer>
    );
};

export default Content;
