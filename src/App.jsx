import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Avatars from "./components/Avatars.jsx";
import SubmissionPage from "./components/SubmissionPage.jsx";

function App() {
  const [pageState, setPageState] = useState('form'); // 'form', 'approval', 'completed'

  const handleSubmit = () => {
    setPageState('approval');
  };

  const handleApprove = () => {
    setPageState('completed');
  };

  const handleReject = () => {
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
      {pageState === 'completed' && (
        <div className="completion-message">
          <h2>Request Approved Successfully!</h2>
          <p>The accessory request has been approved.</p>
        </div>
      )}
    </>
  );
}

export default App;
