import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Avatars from "./components/Avatars.jsx";
import SubmissionPage from "./components/SubmissionPage.jsx";
import ApprovedPage from "./components/ApprovedPage.jsx";

function App() {
  const [pageState, setPageState] = useState('form'); // 'form', 'approval', 'approved'

  const handleSubmit = () => {
    setPageState('approval');
  };

  const handleApprove = () => {
    setPageState('approved');
  };

  const handleReject = () => {
    setPageState('form');
  };

  const handleBackFromApproved = () => {
    setPageState('form');
  };

  return (
    <>
      <Navbar />
      {pageState === 'form' && <Avatars onSubmit={handleSubmit} />}
      {pageState === 'approval' && (
        <SubmissionPage 
          onApprove={handleApprove} 
          onReject={handleReject}
        />
      )}
      {pageState === 'approved' && (
        <ApprovedPage onBack={handleBackFromApproved} />
      )}
    </>
  );
}

export default App;
