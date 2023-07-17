import PropTypes from 'prop-types';

const FormError = ({ errors }) => {
    return (
        <div className="p-4 text-white bg-red-500 rounded">
            {Object.keys(errors).map((fieldName, index) => (
                <p key={index}>{errors[fieldName].message}</p>
            ))}
        </div>
    );
};

FormError.propTypes = {
    errors: PropTypes.objectOf(
        PropTypes.shape({
            message: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default FormError;
