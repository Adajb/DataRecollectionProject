import SubmitButton from './SubmitButton';
import FormError from './FormError';

import PropTypes from 'prop-types';

const Form = ({ onSubmit, errors }) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="title" className='mt-4'>Title</label>
        <input id="title" name="title" className='border border-gray-400 rounded-md w-full p-2' />
        {errors && errors.title && <FormError message="Title is required" />}
      </div>
      <div>
        <label htmlFor="questions" className='mt-4'>Questions</label>
        <input id="questions" name="questions" className='border border-gray-400 rounded-md w-full p-2' />
        {errors && errors.questions && <FormError message="Questions are required" />}
      </div>
      <SubmitButton />
    </form>
  );
};
Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default Form;