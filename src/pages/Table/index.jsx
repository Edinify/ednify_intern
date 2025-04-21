import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import "./table.scss";

function Table() {
  const [activeTab, setActiveTab] = useState("current");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="table-switcher">
      {/* Dropdown */}
      <div className="dropdown">
        <button
          className="dropdown-button"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          Name
          <ChevronDown className="dropdown-icon" />
        </button>
        {dropdownOpen && (
          <div className="dropdown-menu">
            <button
              className="dropdown-item"
              onClick={() => setDropdownOpen(false)}
            >
              Option 1
            </button>
            <button
              className="dropdown-item"
              onClick={() => setDropdownOpen(false)}
            >
              Option 2
            </button>
          </div>
        )}
      </div>

      {/* Tabs */}
      <div className="tabs">
        <button
          className={`tab ${activeTab === "main" ? "active-main" : ""}`}
          onClick={() => setActiveTab("main")}
        >
          Main table
        </button>
        <button
          className={`tab ${activeTab === "current" ? "active-current" : ""}`}
          onClick={() => setActiveTab("current")}
        >
          Current table
        </button>
      </div>
    </div>
  );
}
export default Table;
