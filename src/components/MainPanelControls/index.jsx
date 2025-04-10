import React, { useState } from "react";
import {
  Box,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";

import "./mainPanelControls.scss";
import Button from "../../components/Button";

const MainPanelControls = ({ onApply, onClear }) => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  const handleApply = () => {
    onApply({ name, status, fromDate, toDate });
  };

  const handleClear = () => {
    setName("");
    setStatus("");
    setFromDate(null);
    setToDate(null);
    onClear();
  };

  return (
    <div className="schedule-controls ">
      <div className="dropdown-wrapper ">
        {/* Name dropdown */}
        <FormControl className="control-dropdown">
          <select
            className={`custom-select ${!name ? 'placeholder' : ''}`}
            value={name}
            onChange={(e) => setName(e.target.value)}
          >
            <option value="" disabled hidden>
              Name
            </option>
            <option value="Agababa Bagirov">Agababa Bagirov</option>
            <option value="Sabina Jafarova">Sabina Jafarova</option>
            <option value="Aysun Khipiyeva">Aysun Khipiyeva</option>
            <option value="Gultac Jafarova">Gultac Jafarova</option>
          </select>
        </FormControl>

        {/* Status dropdown */}
        <FormControl className="control-dropdown">
          <select
            className={`custom-select ${!status ? 'placeholder' : ''}`}
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="" disabled hidden>
              All Status
            </option>
            <option value="confirmed">Confirmed</option>
            <option value="unviewed">Unviewed</option>
            <option value="canceled">Canceled</option>
          </select>
        </FormControl>
      </div>

      {/* Date pickers */}
      <div className="dateP-wrapper ">
        <div className="date-picker">
          <label>From</label>
          <input
            type="date"
            value={fromDate || ""}
            onChange={(e) => setFromDate(e.target.value)}
          />
        </div>

        <div className="date-picker">
          <label>To</label>
          <input
            type="date"
            value={toDate || ""}
            onChange={(e) => setToDate(e.target.value)}
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="button-wrapper ">
        <Button text="Clear" onClick={handleClear} bgColor="transparent" color="#9A9A9A"/>
        <Button text="Apply" onClick={handleApply} />
      </div>
    </div>
  );
};

export default MainPanelControls;
