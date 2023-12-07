import Loader from '../Loader';
import { ContentLoaderContainer } from './content-loader.styled';

const ContentLoader = () => {
  return (
    <ContentLoaderContainer>
      <Loader />
    </ContentLoaderContainer>
  );
};

export default ContentLoader;
