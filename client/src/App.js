import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import CreateForm from './pages/CreateForm';
import FormResponses from './pages/FormResponses';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/create-form" element={<CreateForm />} />
          <Route path="/form-responses/:formId" element={<FormResponses />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
