import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

const QuestionType = ({ register, control, name, type, options }) => {
  if (type === 'short-answer') {
    return (
      <input
        id={name}
        {...register(name)}
        type="text"
        className="w-full mt-2 p-2 border-2 border-gray-200 rounded"
      />
    );
  } else if (type === 'multiple-choice') {
    return (
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <select
            id={name}
            {...field}
            className="w-full mt-2 p-2 border-2 border-gray-200 rounded"
          >
            <option value="">Select...</option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
      />
    );
  } else {
    return null;
  }
};

QuestionType.propTypes = {
  register: PropTypes.func.isRequired,
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
};

export default QuestionType;
