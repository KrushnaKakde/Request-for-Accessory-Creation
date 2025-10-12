import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Avatars from "./components/Avatars.jsx";
import SubmissionPage from "./components/SubmissionPage.jsx";
import ApprovedPage from "./components/ApprovedPage.jsx";

// Form Page Component (Route /1)
const FormPage = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/2');
  };

  return <Avatars onSubmit={handleSubmit} />;
};

// Submission Page Component (Route /2)
const SubmissionPageRoute = () => {
  const navigate = useNavigate();

  const handleApprove = () => {
    navigate('/3');
  };

  const handleReject = () => {
    navigate('/1');
  };

  return (
    <SubmissionPage
      onApprove={handleApprove}
      onReject={handleReject}
    />
  );
};

// Approved Page Component (Route /3)
const ApprovedPageRoute = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/1');
  };

  return <ApprovedPage onBack={handleBack} />;
};

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/1" element={<FormPage />} />
        <Route path="/2" element={<SubmissionPageRoute />} />
        <Route path="/3" element={<ApprovedPageRoute />} />
        {/* Default redirect to /1 */}
        <Route path="/" element={<FormPage />} />
      </Routes>
    </>
  );
}

export default App;
