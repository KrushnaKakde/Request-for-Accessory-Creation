import React from 'react';
import '../styles/SubmissionPage.css';
import Header from './Header';
import EmployeeProfile from './EmployeeProfile';
import RequiredInfo from './RequiredInfo';
import FileIcon from '../assets/svg/FileIcon';
import BlackIcon from '../assets/svg/BlackIcon';
import TransferIcon from '../assets/svg/TransferIcon';
import RejectIcon from '../assets/svg/RejectIcon';
import ApproveButtonIcon from '../assets/svg/ApproveButtonIcon';
import TransportArrowIcon from '../assets/svg/TransportArrowIcon';

const SubmissionPage = ({ onApprove, onReject }) => {
  const handleBackClick = () => {
    console.log('Back button clicked');
  };

  const handleClockClick = () => {
    console.log('Clock icon clicked');
  };

  const handleAvatarClick = () => {
    console.log('Avatar clicked');
  };

  const handleNameClick = () => {
    console.log('Name clicked');
  };

  const handleEmailClick = () => {
    console.log('Email clicked');
  };

  const handleRequiredInfoClick = () => {
    console.log('Required Information clicked');
  };

  const handleDesignationClick = () => {
    console.log('Designation clicked');
  };

  const handleDivisionClick = () => {
    console.log('Division clicked');
  };

  const handleLocationClick = () => {
    console.log('Location clicked');
  };

  const handleManagerClick = () => {
    console.log('Manager clicked');
  };

  const employeeData = {
    initials: 'MK',
    name: 'Manoj Kandan M',
    genId: '255048778',
    email: 'Manoj.kandan@partner.samsung.com',
    designation: 'Outsourcing',
    division:
      'Tech Strategy Team\\Smart Infra Group\\Information System & AI Tools',
    location: 'Bangalore',
    manager: 'Ravindra S R (06786669)',
    isOnline: true,
  };

  return (
    <div className="submission-page-container">
      <Header
        breadcrumb="My Workspace > Request for Accessory Creation"
        title="Request for Accessory Creation - (IT Manager Approval)"
        onBackClick={handleBackClick}
        onClockClick={handleClockClick}
      />

      <EmployeeProfile
        employee={employeeData}
        onAvatarClick={handleAvatarClick}
        onNameClick={handleNameClick}
        onEmailClick={handleEmailClick}
        onDesignationClick={handleDesignationClick}
        onDivisionClick={handleDivisionClick}
        onLocationClick={handleLocationClick}
        onManagerClick={handleManagerClick}
      />

      <div className="request-header1">
        <BlackIcon className="black-icon" />
        <span>Request for Accessory Creation Details</span>
      </div>

      <RequiredInfo onClick={handleRequiredInfoClick} />

      <div className="request-details-section">
        <div className="accessory-details">
          <h4>Accessory Details</h4>
          <table className="approved-details-table">
            <thead>
              <tr>
                <th>&nbsp;&nbsp;&nbsp;&nbsp;Accessory Type</th>
                <th>Accessory Name</th>
                <th>Make</th>
                <th>Acq.Date</th>
                <th>Accessory Count</th>
                <th>Product Status</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;RAM</td>
                <td>RAM - 8GB</td>
                <td>New</td>
                <td>24-May-2025</td>
                <td>3</td>
                <td>New</td>
                <td>xxx-xxxx-xxx-xx-xxxxx-xxx</td>
              </tr>
              <tr>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;RAM</td>
                <td>RAM - 16GB</td>
                <td>New</td>
                <td>24-May-2025</td>
                <td>3</td>
                <td>Reuse</td>
                <td>xxx-xxxx-xxx-xx-xxxxx-xxx</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="comment-section">
          <h4>Comment (Max 500 Chars)</h4>
          <textarea
            className="comment-text"
            defaultValue="xxx-xxx-xx-xxx-x"
            maxLength="500"
            rows="4"
          ></textarea>
        </div>

        <div className="action-buttons">
          <RejectIcon onClick={onReject} />
          <ApproveButtonIcon onClick={onApprove} />
        </div>

        <div className="transfer-workflow">
          <TransferIcon className="transfer-icon" />
          <span>Transfer Workflow</span>
          <TransportArrowIcon className="arrow" />
        </div>

        <div className="view-policies">
          <FileIcon className="policies-icon" />
          <span>View Policies</span>
        </div>
      </div>
    </div>
  );
};

export default SubmissionPage;