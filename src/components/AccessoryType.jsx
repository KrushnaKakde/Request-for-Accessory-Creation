import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AccessoryType.css";
import Vector from "./Vector";
import RequiredInfoIcon from "./RequiredInfoIcon";
import RadioChecked from "../assets/svg/RadioChecked";
import RadioUnchecked from "../assets/svg/RadioUnchecked";
import CalendarDropIcon from "../assets/svg/CalendarDropIcon";
import DropdownIcon from "../assets/svg/DropdownIcon";
import SubmitButtonIcon from "../assets/svg/SubmitButtonIcon";
import AddButtonIcon from "../assets/svg/AddButtonIcon";
import FileIcon from "../assets/svg/FileIcon";
import PlusIcon from "../assets/svg/PlusIcon";
import MinusIcon from "../assets/svg/MinusIcon";

const AccessoryType = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState("RAM");
  const [selectedAccessory, setSelectedAccessory] = useState("RAM - 32 GB");
  const [make, setMake] = useState("New");
  const [acqDate, setAcqDate] = useState("24-May-2025");
  const [accessoryCount, setAccessoryCount] = useState(10);
  const [productStatus, setProductStatus] = useState("New");
  const [remarks, setRemarks] = useState("xxx-xxx-xx-xxx-x");
  const [comment, setComment] = useState("xxx-xxx-xx-xxx-x");

  const [accessoryDetails, setAccessoryDetails] = useState([
    {
      accessoryType: "RAM",
      accessoryName: "RAM - 8GB",
      make: "New",
      acqDate: "24-May-2025",
      accessoryCount: 3,
      productStatus: "New",
      remarks: "xxx-xxxx-xxx-xx-xxxxx-xxx"
    },
    {
      accessoryType: "RAM",
      accessoryName: "RAM - 16GB",
      make: "New",
      acqDate: "24-May-2025",
      accessoryCount: 3,
      productStatus: "Reuse",
      remarks: "xxx-xxxx-xxx-xx-xxxxx-xxx"
    }
  ]);

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  const handleAdd = () => {
    const newAccessory = {
      accessoryType: selectedType,
      accessoryName: selectedAccessory,
      make,
      acqDate,
      accessoryCount,
      productStatus,
      remarks
    };
    setAccessoryDetails([...accessoryDetails, newAccessory]);
  };

  const handleDelete = (index) => {
    const updatedDetails = accessoryDetails.filter((_, i) => i !== index);
    setAccessoryDetails(updatedDetails);
  };

  const handleSubmit = () => {
    if (accessoryDetails.length === 0) {
      alert('Please add at least one accessory before submitting.');
      return;
    }
    navigate('/2');
  };

  return (
    <div className="accessory-main-container">
      <div className="accessory-details-header">
        <RequiredInfoIcon />
        <span><h3>Required Information</h3></span>
      </div>
      <div className="accessory-type-container">
      <div className="accessory-type-form">
        <div className="form-header">
          <h3>Accessory Type</h3>
        </div>

        <div className="radio-group">
          <label className={`radio-option ${selectedType === "RAM" ? "selected" : ""}`} onClick={() => handleTypeChange("RAM")}>
            {selectedType === "RAM" ? <RadioChecked /> : <RadioUnchecked />}
            <span className="radio-text">RAM</span>
          </label>
          <label className={`radio-option ${selectedType === "Other Accessories" ? "selected" : ""}`} onClick={() => handleTypeChange("Other Accessories")}>
            {selectedType === "Other Accessories" ? <RadioChecked /> : <RadioUnchecked />}
            <span className="radio-text">Other Accessories</span>
          </label>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Select Accessory <span aria-hidden="true" className="required-indicator">*</span></label>
            <div className="select-wrapper">
              <select
                value={selectedAccessory}
                onChange={(e) => setSelectedAccessory(e.target.value)}
                className="form-select"
              >
                <option value="RAM - 32 GB">RAM - 32 GB</option>
                <option value="RAM - 16 GB">RAM - 16 GB</option>
                <option value="RAM - 8 GB">RAM - 8 GB</option>
              </select>
              <DropdownIcon className="dropdown-icon" />
            </div>
          </div>
          <div className="form-group">
            <label>Make</label>
            <select
              value={make}
              onChange={(e) => setMake(e.target.value)}
              className="form-select default-select"
            >
              <option value="New">New</option>
              <option value="Used">Used</option>
            </select>
          </div>
          <div className="form-group">
            <label>Acq. Date <span aria-hidden="true" className="required-indicator">*</span></label>
            <div className="date-input-wrapper">
              <input
                type="text"
                value={acqDate}
                onChange={(e) => setAcqDate(e.target.value)}
                className="date-input"
                placeholder="24-May-2025"
              />
              <CalendarDropIcon className="calendar-icon" />
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Accessory Count</label>
            <div className="count-input-group">
              <button
                type="button"
                className="count-btn"
                onClick={() => setAccessoryCount(Math.max(0, accessoryCount - 1))}
              >
                <MinusIcon />
              </button>
              <input
                type="number"
                value={accessoryCount}
                onChange={(e) => setAccessoryCount(parseInt(e.target.value) || 0)}
                className="count-input"
              />
              <button
                type="button"
                className="count-btn"
                onClick={() => setAccessoryCount(accessoryCount + 1)}
              >
                <PlusIcon />
              </button>
            </div>
          </div>
          <div className="form-group">
            <label>Product Status</label>
            <div className="select-wrapper">
              <select
                value={productStatus}
                onChange={(e) => setProductStatus(e.target.value)}
                className="form-select"
              >
                <option value="New">New</option>
                <option value="Reuse">Reuse</option>
                <option value="Refurbished">Refurbished</option>
              </select>
              <DropdownIcon className="dropdown-icon" />
            </div>
          </div>
          <div className="form-group form-group-empty">
          </div>
        </div>

        <div className="form-group remarks-group">
          <label>Remarks</label>
          <textarea
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
            className="comment-text"
            rows="3"
            placeholder="xxx-xxx-xx-xxx-x"
          />
        </div>

        <div className="add-button-container">
          <button type="button" className="add-btn" onClick={handleAdd}>
            <AddButtonIcon />
          </button>
        </div>

        <div className="accessory-details-section">
          <h4>Accessory Details</h4>
          <div className="table-container">
            <table className="accessory-table">
              <thead>
                <tr>
                  <th>&nbsp;&nbsp;&nbsp;&nbsp;Accessory Type</th>
                  <th>Accessory Name</th>
                  <th>Make</th>
                  <th>Acq Date</th>
                  <th>Accessory Count</th>
                  <th>Product Status</th>
                  <th>Remarks</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {accessoryDetails.map((detail, index) => (
                  <tr key={index}>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{detail.accessoryType}</td>
                    <td>&nbsp;{detail.accessoryName}</td>
                    <td>{detail.make}</td>
                    <td>{detail.acqDate}</td>
                    <td>{detail.accessoryCount}</td>
                    <td>{detail.productStatus}</td>
                    <td>{detail.remarks}</td>
                    <td>
                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(index)}
                      >
                        <Vector />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="form-group comment-group">
          <label>Comment (Max 500 Chars)</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="comment-text"
            rows="4"
            maxLength="500"
            placeholder="xxx-xxx-xx-xxx-x"
          />
        </div>

        <div className="submit-container">
          <SubmitButtonIcon className="submit-btn" onClick={handleSubmit} />
        </div>

        <div className="view-policies">
          <FileIcon className="file-icon" />
          <span>View Policies</span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AccessoryType;
