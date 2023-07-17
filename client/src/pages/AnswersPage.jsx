import { useState, useEffect } from 'react';
import { getAllAnswers } from '../services/answerService';

const AnswersPage = () => {
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        getAllAnswers()
            .then(fetchedAnswers => setAnswers(fetchedAnswers))
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
            <h1 className="text-4xl mb-8">Answers Page</h1>
            {answers.map((answer, index) => (
                <div key={index} className="p-4 border-2 border-gray-200 rounded mb-4">
                    <h2 className="text-2xl mb-2">{answer.formTitle}</h2>
                    <h3 className="text-xl mb-1">{answer.question}</h3>
                    <p>{answer.content}</p>
                </div>
            ))}
        </div>
    );
};

export default AnswersPage;
