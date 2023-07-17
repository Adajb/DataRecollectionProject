import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
            <h1 className="text-4xl mb-8">Welcome to our form builder!</h1>
            <Link to="/form-management" className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-400">
                Go to Form Management
            </Link>
        </div>
    );
};

export default HomePage;
