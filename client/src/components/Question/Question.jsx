import PropTypes from 'prop-types';

import QuestionType from './QuestionType';

const Question = ({ question, index, register, control }) => {
  return (
    <div className="my-4">
      <label htmlFor={`questions[${index}]`}>{question.title}</label>
      <QuestionType
        register={register}
        control={control}
        name={`questions[${index}]`}
        type={question.type}
      />
    </div>
  );
};

Question.propTypes = {
  question: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  register: PropTypes.func.isRequired,
  control: PropTypes.object.isRequired,
};

export default Question;