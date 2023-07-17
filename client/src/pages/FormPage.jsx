import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getFormById } from '../services/formService';
import Question from '../components/Question/Question';


const FormPage = () => {
    const { formId } = useParams();
    const [form, setForm] = useState(null);

    useEffect(() => {
        getFormById(formId)
            .then(fetchedForm => setForm(fetchedForm))
            .catch(error => console.log(error));
    }, [formId]);

    if (!form) {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
                <h1 className="text-4xl mb-8">Loading...</h1>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
            <h1 className="text-4xl mb-8">{form.title}</h1>
            {form.questions.map((question, index) => (
                <Question key={index} {...question} />
            ))}
        </div>
    );
};

export default FormPage;