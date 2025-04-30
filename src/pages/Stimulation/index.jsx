import React, { useState } from "react";
import "./stimulation.scss";
import TextField from "@mui/material/TextField";

const initialFines = [
  {
    name: "Agababa Baghirov",
    type: "Verbal warning",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "2023-08-23",
  },
  {
    name: "Shahin Mammadov",
    type: "Written warning",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "2023-08-21",
  },
  {
    name: "Nargiz Aliyeva",
    type: "Reproach",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "2023-07-12",
  },
  {
    name: "Lala Suleymanlı",
    type: "Severe reproach",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "2023-07-14",
  },
  {
    name: "Eyyub Agalarov",
    type: "Reproach",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae interdum urna. Etiam vitae risus viverra, commodo arcu ac, elementum felis.",
    date: "2023-07-07",
  },
];

const initialBonuses = [
  {
    name: "Agababa Baghirov",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    bonus: "50 AZN",
    date: "2023-08-23",
  },
  {
    name: "Shahin Mammadov",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    bonus: "125 AZN",
    date: "2023-08-21",
  },
  {
    name: "Nargiz Aliyeva",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    bonus: "75 AZN",
    date: "2023-07-12",
  },
  {
    name: "Lala Suleymanlı",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    bonus: "240 AZN",
    date: "2023-07-14",
  },
  {
    name: "Eyyub Agalarov",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae interdum urna. Etiam vitae risus viverra, commodo arcu ac, elementum felis.",
    bonus: "80 AZN",
    date: "2023-07-07",
  },
];

function Stimulation() {
  const [activeTab, setActiveTab] = useState("Fine");
  const [search, setSearch] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [editData, setEditData] = useState(null);
  const [modalType, setModalType] = useState(""); // "Bonus" or "Fine"
  const [teachers, setTeachers] = useState(initialBonuses);
  const [fines, setFines] = useState(initialFines);

  const [newEntry, setNewEntry] = useState({
    name: "",
    comment: "",
    bonus: "",
    type: "",
    date: "",
  });

  const clearAll = () => {
    setSearch("");
    setFromDate("");
    setToDate("");
  };

  const openEditModal = (entry, type) => {
    setModalVisible(true);
    setEditData(entry);
    setModalType(type);
  };

  const openAddModal = () => {
    setModalVisible(true);
    setEditData(null);
    setModalType(activeTab);
    setNewEntry({
      name: "",
      comment: "",
      bonus: "",
      type: "",
      date: "",
    });
  };

  const closeModal = () => {
    setModalVisible(false);
    setEditData(null);
    setModalType("");
  };

  const deleteEntry = () => {
    if (modalType === "Bonus") {
      setTeachers(teachers.filter((t) => t.name !== editData.name));
    } else if (modalType === "Fine") {
      setFines(fines.filter((entry) => entry.name !== editData.name));
    }
    closeModal();
  };

  const saveChanges = () => {
    if (editData) {
      // Only editing functionality
      console.log("Edit functionality placeholder");
    } else {
      // Add new entry
      if (modalType === "Bonus") {
        setTeachers([...teachers, newEntry]);
      } else if (modalType === "Fine") {
        setFines([...fines, newEntry]);
      }
    }
    closeModal();
  };

  const handleNewEntryChange = (field, value) => {
    setNewEntry({ ...newEntry, [field]: value });
  };

  return (
    <div className="part">
      <div className="tabs-wrapper">
        <div className="tabs">
          <div
            className={`tab ${activeTab === "Bonus" ? "active" : ""}`}
            onClick={() => setActiveTab("Bonus")}
          >
            Bonus
          </div>
          <div
            className={`tab ${activeTab === "Fine" ? "active" : ""}`}
            onClick={() => setActiveTab("Fine")}
          >
            Fine
          </div>
        </div>
        <button className="add-btn" onClick={openAddModal}>
          + Add
        </button>
      </div>

      <div className="tab-contentt">
        <div className="filter-bar">
          <div className="searchpart">
            <div className="search-box">
              <span className="icon">🔍</span>
              <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          <div className="date-picker">
            <label>From</label>
            <input
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
            />
          </div>

          <div className="date-picker">
            <label>To</label>
            <input
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
            />
          </div>

          <button className="clear-btn" onClick={clearAll}>
            Clear all
          </button>
          <button className="apply-btn">Apply</button>
        </div>

        <div className="teacher-table">
          <table>
            <thead>
              <tr>
                <th>Teacher name</th>
                {activeTab === "Fine" ? <th>Fine type</th> : <th>Bonus</th>}
                <th>Comment</th>
                <th>Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {(activeTab === "Fine" ? fines : teachers).map((entry, index) => (
                <tr key={index}>
                  <td>{entry.name}</td>
                  {activeTab === "Fine" ? (
                    <td>{entry.type}</td>
                  ) : (
                    <td>{entry.bonus}</td>
                  )}
                  <td>{entry.comment}</td>
                  <td className="datetime">{entry.date}</td>
                  <td className="menu-cell">
                    <div className="menu-wrapper">
                      <span
                        className="dots"
                        onClick={() => openEditModal(entry, activeTab)}
                      >
                        ⋮
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <h2>
              {editData ? "Edit" : "Add"} {modalType}
            </h2>
            {/* <label>Teacher Name:</label> */}
            <TextField
              className="textfield"
              label={"Teacher"}
              id="margin-dense"
              margin="dense"
            />
            {/* <input
              type="text"
              value={editData ? editData.name : newEntry.name}
              onChange={(e) =>
                !editData && handleNewEntryChange("name", e.target.value)
              }
              readOnly={!!editData}
            /> */}
            {/* 
            <label>Comment:</label> */}
            <TextField
              className="textfield"
              label={"Comment"}
              id="margin-dense"
              margin="dense"
            />

            {modalType === "Bonus" && (
              <>
                {/* <label>Bonus:</label> */}
                <TextField
                  className="textfield"
                  label={"Bonus"}
                  id="margin-dense"
                  margin="dense"
                />
              </>
            )}

            {modalType === "Fine" && (
              <>
                {/* <label>Fine Type:</label> */}
                <TextField
                  className="textfield"
                  label={"Fine Type"}
                  id="margin-dense"
                  margin="dense"
                />
                {/* <input
                  type="text"
                  value={editData ? editData.type : newEntry.type}
                  onChange={(e) =>
                    !editData && handleNewEntryChange("type", e.target.value)
                  }
                  readOnly={!!editData}
                /> */}
              </>
            )}

            <div className="modal-actions">
              {editData && (
                <span className="delete-icon" onClick={deleteEntry}>
                  🗑️
                </span>
              )}
              <button className="save" onClick={saveChanges}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Stimulation;
