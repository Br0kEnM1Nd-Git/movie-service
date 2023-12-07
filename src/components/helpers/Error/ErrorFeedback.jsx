import { ErrorFeedbackBackdrop, ErrorFeedbackModal } from './error.styled';

const ErrorFeedback = ({ status, toggle }) => {
  const handleSubmit = e => {
    e.preventDefault();
    e.target.reset();
  };

  return (
    status && (
      <>
        <ErrorFeedbackBackdrop>
          <ErrorFeedbackModal>
            <button type="button" onClick={toggle}>
              Close
            </button>
            <h3>Leave your feedback</h3>
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" />
              <input type="text" name="feedback" />
              <button type="submit">Submit</button>
            </form>
          </ErrorFeedbackModal>
        </ErrorFeedbackBackdrop>
      </>
    )
  );
};

export default ErrorFeedback;
