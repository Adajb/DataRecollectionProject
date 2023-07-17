import { useState, useEffect } from 'react';
import axios from 'axios';
import Form from '../components/Form/Form';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const FormManagementPage = () => {
    const [forms, setForms] = useState([]);
    const { register, handleSubmit } = useForm();

    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

    useEffect(() => {
        const getForms = async () => {
            try {
                const res = await axios.get(`${API_URL}/api/v1/forms/`);
                setForms(res.data);
            } catch (err) {
                console.error(err);
            }
        };

        getForms();
    }, []);

    const onSubmit = (data) => {
        console.log(data);
        axios.post(`${API_URL}/api/v1/forms/`, data);
        setForms([...forms, data]);
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
            <h1 className="text-4xl mb-8">Form Management</h1>
            <h2 className="text-2xl mb-8">Create a new form</h2>
            <Form onSubmit={handleSubmit(onSubmit)} register={register} />
            <div className="grid grid-cols-3 gap-4 mt-8 w-3/4 max-w-4xl">
            {forms.map((form, formIndex) => (
                <div key={formIndex} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 justify-center items-center p-6">
                    <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{form.title}</h2>
                    {form.questions.map((question, questionIndex) => (
                        <p key={questionIndex}>{question}</p>
                    ))}
                    <Link to={`/form/${formIndex}`} className="mt-4 inline-block py-1 px-2 bg-blue-500 text-white rounded hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        Go to Form
                    </Link>
                </div>
            ))}
            </div>
        </div>
    );
};

export default FormManagementPage;
