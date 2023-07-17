import { createContext, useState } from "react";

export const FormContext = createContext();

import PropTypes from 'prop-types';

export function FormProvider({ children }) {
    const [forms, setForms] = useState([]);

    return (
        <FormContext.Provider value={{ forms, setForms }}>
            {children}
        </FormContext.Provider>
    );
}

FormProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
