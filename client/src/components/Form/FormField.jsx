import PropTypes from 'prop-types';

const FormField = ({ register, name, ...rest }) => (
    <input name={name} ref={register} {...rest} />
);

FormField.propTypes = {
    register: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
};

export default FormField;
