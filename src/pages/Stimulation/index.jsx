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

  const toggleMenu = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  const [activeTab, setActiveTab] = useState("Fine");
  const [search, setSearch] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const clearAll = () => {
    setSearch("");
    setFromDate("");
    setToDate("");
  };

  return (
    <div class="part">
      <div class="dashboard"></div>

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
        <button className="add-btn">+ Add</button>
      </div>
      <div className="tab-contentt">
        {activeTab === "Bonus" && (
          <div>
            <div className="filter-bar">
              <div class="searchpart">
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
                            onClick={() => toggleMenu(index)}
                          >
                            ⋮
                          </span>
                          {openMenu === index && (
                            <div className="menu">
                              <div>Edit</div>
                              <div>Delete</div>
                            </div>
                          )}
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
            <div className="table-container">
              <table className="warnings-table">
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
                      <td className="actions">⋮</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Stimulation;
