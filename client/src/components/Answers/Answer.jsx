import PropTypes from 'prop-types';

const Answer = ({ answer }) => {
  return (
    <div className="p-4 border-2 border-gray-200 my-4 rounded">
      <h3 className="font-bold">{answer.question}</h3>
      <p>{answer.response}</p>
    </div>
  );
};

Answer.propTypes = {
  answer: PropTypes.object.isRequired,
};

export default Answer;
