import ContentLoader from '../ContentLoader';
import Error from '../Error';

const Loading = ({ isLoading, error, children }) => {
  return isLoading ? (
    <ContentLoader />
  ) : error ? (
    <Error error={error} />
  ) : (
    children
  );
};

export default Loading;
