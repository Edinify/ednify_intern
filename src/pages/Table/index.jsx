import React, { useState } from "react";
import "./Table.scss";
import { FaUser } from "react-icons/fa";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const times = [
  "10:00–11:30",
  "11:30–13:00",
  "13:00–14:30",
  "14:30–16:00",
  "16:00–17:30",
  "17:30–19:00",
];

const schedule = {
  Monday: {
    "10:00–11:30": { title: "Programming", students: 24 },
    "13:00–14:30": { title: "Programming", students: 18 },
  },
  Wednesday: {
    "14:30–16:00": { title: "Programming", students: 15 },
  },
  Friday: {
    "10:00–11:30": { title: "Programming", students: 20 },
  },
};

const Table = () => {
  const [activeTab, setActiveTab] = useState("Current Table");
  const [showModal, setShowModal] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === "Main Table") {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  };

  return (
    <div className="table-wrapper">
      <div className="tabs">
        <button
          className={activeTab === "Name" ? "active" : ""}
          onClick={() => handleTabClick("Name")}
        >
          {activeTab === "Name" ? "Agababa Bagirov" : "Name"}
        </button>
        <button
          className={activeTab === "Main Table" ? "active" : ""}
          onClick={() => handleTabClick("Main Table")}
        >
          Main Table
        </button>
        <button
          className={activeTab === "Current Table" ? "active" : ""}
          onClick={() => handleTabClick("Current Table")}
        >
          Current Table
        </button>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Time</th>
              {days.map((day) => (
                <th key={day}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {times.map((time) => (
              <tr key={time}>
                <td className="time-col">
                  <div className="time-box">
                    <span>{time.split("–")[0]}</span>
                    <span>–</span>
                    <span>{time.split("–")[1]}</span>
                  </div>
                </td>
                {days.map((day) => {
                  const lesson = schedule[day]?.[time];
                  return (
                    <td key={`${day}-${time}`}>
                      {lesson && (
                        <div className="lesson-box">
                          <span className="lesson-title">{lesson.title}</span>
                          <span className="lesson-info">
                            <FaUser className="icon" /> {lesson.students}
                          </span>
                        </div>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div
            className="modal-content new-style"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setShowModal(false)}
              aria-label="Close modal"
            >
              ×
            </button>

            <div className="modal-form-grid">
              <div className="form-field">
                <label>Teacher name</label>
                <select>
                  <option>Agababa</option>
                </select>
              </div>
              <div className="form-field">
                <label>Class</label>
                <select>
                  <option>Programming</option>
                </select>
              </div>
              <div className="form-field">
                <label>Date</label>
                <select>
                  <option>Monday</option>
                </select>
              </div>
              <div className="form-field">
                <label>Time</label>
                <select>
                  <option>10:00 - 11:30</option>
                </select>
              </div>
            </div>

            <div className="students-section">
              <label>Students:</label>
              <button className="add-student-btn">+ Add student</button>
            </div>

            <button className="save-btn">Save</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;
