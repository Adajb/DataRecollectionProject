import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FormManagementPage from './pages/FormManagementPage';
import FormPage from './pages/FormPage';
import AnswersPage from './pages/AnswersPage';

import { FormProvider } from './contexts/FormContext';

function App() {
  return (
    <FormProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/form-management" element={<FormManagementPage />} />
          <Route path="/form/:formId" element={<FormPage />} />
          <Route path="/answers" element={<AnswersPage />} />
      </Routes>
    </Router>
    </FormProvider>
  );
}

export default App;
