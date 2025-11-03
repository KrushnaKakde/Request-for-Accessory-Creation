import React from "react";
import "../styles/Avatars.css";
import Header from "./Header";
import EmployeeProfile from "./EmployeeProfile";
import RequiredInfo from "../assets/svg/RequiredInfo";
import AccessoryType from "./AccessoryType";

const Avatars = () => {
  const handleBackClick = () => {
    console.log("Back button clicked");
  };

  const handleClockClick = () => {
    console.log("Clock icon clicked");
  };

  const handleAvatarClick = () => {
    console.log("Avatar clicked");
  };

  const handleNameClick = () => {
    console.log("Name clicked");
  };

  const handleEmailClick = () => {
    console.log("Email clicked");
  };

  const handleRequiredInfoClick = () => {
    console.log("Required Information clicked");
  };

  const handleDesignationClick = () => {
    console.log("Designation clicked");
  };

  const handleDivisionClick = () => {
    console.log("Division clicked");
  };

  const handleLocationClick = () => {
    console.log("Location clicked");
  };

  const handleManagerClick = () => {
    console.log("Manager clicked");
  };

  const employeeData = {
    initials: "MK",
    name: "Manoj Kandan M",
    genId: "255048778",
    email: "Manoj.kandan@partner.samsung.com",
    designation: "Outsourcing",
    division:
      "Tech Strategy Team\\Smart Infra Group\\Information System & AI Tools",
    location: "Bangalore",
    manager: "Ravindra S R (06786669)",
    isOnline: true,
  };

  return (
    <div className="avatars-container">
      <Header
        breadcrumb="My Workspace > Diversity, Equity & Inclusion Module Training Video"
        title="Request for Accessory Creation - IT Store Initiation"
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

      <RequiredInfo onClick={handleRequiredInfoClick} />

      <AccessoryType />
    </div>
  );
};

export default Avatars;
