import { useState, useContext } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { FormContext } from '../contexts/FormContext';

function useSubmitForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { forms, setForms } = useContext(FormContext);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await axios.post('/api/formSubmitEndpoint', data);
      if(response.status === 200){
        setForms([...forms, data]);
        setIsSubmitting(false);
      }
    } catch (error) {
      setIsSubmitting(false);
      console.log(error);
    }
  };

  return { register, handleSubmit, errors, onSubmit, isSubmitting };
}

export default useSubmitForm;
