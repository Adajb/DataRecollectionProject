import PropTypes from 'prop-types';

import Answer from './Answer';

const AnswersList = ({ answers }) => {
  return (
    <div>
      {answers.map((answer, index) => (
        <Answer key={index} answer={answer} />
      ))}
    </div>
  );
};

AnswersList.propTypes = {
  answers: PropTypes.array.isRequired,
};

export default AnswersList;