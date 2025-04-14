import React, { useState } from "react";
import "./stimulation.scss";

const data = [
  {
    name: "Agababa Baghirov",
    type: "Verbal warning",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "23.08.2023",
  },
  {
    name: "Shahin Mammadov",
    type: "Written warning",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "21.08.2023",
  },
  {
    name: "Nargiz Aliyeva",
    type: "Reproach",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "12.07.2023",
  },
  {
    name: "Lala Suleymanlı",
    type: "Severe reproach",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "14.07.2023",
  },
  {
    name: "Eyyub Agalarov",
    type: "Reproach",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae interdum urna. Etiam vitae risus viverra, commodo arcu ac, elementum felis.",
    date: "07.07.2023",
  },
];

const teachers = [
  {
    name: "Agababa Baghirov",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    bonus: "50 AZN",
    date: "23.08.2023",
  },
  {
    name: "Shahin Mammadov",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    bonus: "125 AZN",
    date: "21.08.2023",
  },
  {
    name: "Nargiz Aliyeva",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    bonus: "75 AZN",
    date: "12.07.2023",
  },
  {
    name: "Lala Suleymanlı",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    bonus: "240 AZN",
    date: "14.07.2023",
  },
  {
    name: "Eyyub Agalarov",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae interdum urna. Etiam vitae risus viverra, commodo arcu ac, elementum felis.",
    bonus: "80 AZN",
    date: "07.07.2023",
  },
];

function Stimulation() {
  const [openMenu, setOpenMenu] = useState(null);
  const [activeTab, setActiveTab] = useState("Fine");
  const [search, setSearch] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [modalData, setModalData] = useState({
    name: "",
    comment: "",
    bonus: "",
    type: "",
    commitment: "",
  });

  const clearAll = () => {
    setSearch("");
    setFromDate("");
    setToDate("");
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    const entry = activeTab === "Bonus" ? teachers[index] : data[index];
    setModalData({
      name: entry.name,
      comment: entry.comment,
      bonus: entry.bonus || "",
      type: entry.type || "",
      commitment: entry.commitment || "",
    });
    setShowModal(true);
  };

  const handleDelete = () => {
    if (activeTab === "Bonus") {
      teachers.splice(editIndex, 1);
    } else {
      data.splice(editIndex, 1);
    }
    setShowModal(false);
    setEditIndex(null);
  };

  const Modal = ({ onClose }) => {
    const handleSubmit = (e) => {
      e.preventDefault();
      setShowModal(false);
      setEditIndex(null);
    };

    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
          <h2>
            {editIndex === null ? `Add ${activeTab}` : `Edit ${activeTab}`}
          </h2>
          <form className="modal-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Teacher name"
              value={modalData.name}
              onChange={(e) =>
                setModalData({ ...modalData, name: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Comment"
              value={modalData.comment}
              onChange={(e) =>
                setModalData({ ...modalData, comment: e.target.value })
              }
            />
            {activeTab === "Bonus" ? (
              <input
                type="text"
                placeholder="Bonus (e.g. 100 AZN)"
                value={modalData.bonus}
                onChange={(e) =>
                  setModalData({ ...modalData, bonus: e.target.value })
                }
              />
            ) : (
              <>
                <input
                  type="text"
                  placeholder="Fine type (e.g. Reproach)"
                  value={modalData.type}
                  onChange={(e) =>
                    setModalData({ ...modalData, type: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Commitment"
                  value={modalData.commitment}
                  onChange={(e) =>
                    setModalData({ ...modalData, commitment: e.target.value })
                  }
                />
              </>
            )}
          </form>
          <div>
            <div className="savedelete">
              <div className="save">
                <button type="submit">Save</button>
              </div>
              <div>
                <button className="delete-btn" onClick={handleDelete}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
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
        <button className="add-btn" onClick={() => setShowModal(true)}>
          + Add
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "Bonus" && (
          <div>
            <div className="filter-bar">
              <div className="search-box">
                <span className="icon">🔍</span>
                <input type="text" placeholder="Search" />
              </div>
              <div></div>

              <div className="date-picker">
                <label>From</label>
                <input type="date" />
              </div>

              <div className="date-picker">
                <label>To</label>
                <input type="date" />
              </div>

              <button className="clear-btn">Clear all</button>
              <button className="apply-btn">Apply</button>
            </div>

            <div className="teacher-table">
              <table>
                <thead>
                  <tr>
                    <th>Teacher name</th>
                    <th>Comment</th>
                    <th>Bonus</th>
                    <th>Date</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {teachers.map((t, index) => (
                    <tr key={index}>
                      <td>{t.name}</td>
                      <td>{t.comment}</td>
                      <td>{t.bonus}</td>
                      <td>{t.date}</td>
                      <td className="menu-cell">
                        <div className="menu-wrapper">
                          <span
                            className="dots"
                            onClick={() => handleEdit(index)}
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
        )}

        {activeTab === "Fine" && (
          <div>
            <div className="filter-bar">
              <div className="search-box">
                <span className="icon">🔍</span>
                <input type="text" placeholder="Search" />
              </div>
              <div></div>

              <div className="date-picker">
                <label>From</label>
                <input type="date" />
              </div>

              <div className="date-picker">
                <label>To</label>
                <input type="date" />
              </div>

              <button className="clear-btn">Clear all</button>
              <button className="apply-btn">Apply</button>
            </div>
            <div className="warnings-table">
              <table>
                <thead>
                  <tr>
                    <th>Teacher name</th>
                    <th>Fine type</th>
                    <th>Comment</th>
                    <th>Date</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((entry, index) => (
                    <tr key={index}>
                      <td>{entry.name}</td>
                      <td>{entry.type}</td>
                      <td>{entry.comment}</td>
                      <td>{entry.date}</td>
                      <td className="actions">
                        <span
                          className="dots"
                          onClick={() => handleEdit(index)}
                        >
                          ⋮
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default Stimulation;
