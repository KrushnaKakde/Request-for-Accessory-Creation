import React from 'react';
import '../styles/ApprovedPage.css';
import Header from './Header';
import EmployeeProfile from './EmployeeProfile';
import RequiredInfo from './RequiredInfo';
import FileIcon from '../assets/svg/FileIcon';
import BlackIcon from '../assets/svg/BlackIcon';

const ApprovedPage = ({ onBack }) => {
  const handleBackClick = () => {
    if (onBack) onBack();
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
    <div className="approved-page-container">
      <Header
        breadcrumb="My Workspace > Request for Accessory Creation"
        title="Request for Accessory Creation - (Approved)"
        onBackClick={handleBackClick}
        onClockClick={handleClockClick}
      />

      <EmployeeProfile
        employee={employeeData}
        onAvatarClick={handleAvatarClick}
        onNameClick={handleNameClick}
        onEmailClick={handleEmailClick}
      />

      <div className="request-header">
        <BlackIcon className="black-icon" />
        <span>Request for Accessory Creation Report</span>
      </div>

      <div className="approved-request-details-section">
        <div className="approved-accessory-details">
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
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RAM</td>
                <td>RAM - 8GB</td>
                <td>New</td>
                <td>24-May-2025</td>
                <td>3</td>
                <td>New</td>
                <td>xxx-xxxx-xxx-xx-xxxxx-xxx</td>
              </tr>
              <tr>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RAM</td>
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

        <div className="approved-view-policies">
          <FileIcon className="approved-policies-icon" />
          <span>View Policies</span>
        </div>
      </div>

      <RequiredInfo onClick={handleRequiredInfoClick} />
    </div>
  );
};

export default ApprovedPage;
