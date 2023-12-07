import { useState } from 'react';
import { ErrorContainer } from './error.styled';
import ErrorFeedback from './ErrorFeedback';

const Error = ({ error }) => {
  const [feedback, setFeedback] = useState(false);
  const toggleFeedback = () => {
    setFeedback(prev => !prev);
  };

  return (
    <>
      <ErrorContainer>
        <h2>Oops...looks like an error happened</h2>
        <p>
          Refresh the page or give us a
          <div onClick={toggleFeedback}>feedback</div>
        </p>
        <p>{error}</p>
        <ErrorFeedback status={feedback} toggle={toggleFeedback} />
      </ErrorContainer>
    </>
  );
};

export default Error;
