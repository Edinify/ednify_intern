import "./mainPanelTable.scss";
import PersonIcon from "@mui/icons-material/Person";
import React, { useState } from "react";
import MainTeacherModal from "../MainTeacherModal";

const MainPanelTable = () => {
  const [open, setOpen] = useState(false);
  const [selectedCell, setSelectedCell] = useState(null);

  const days = ["Mon.", "Tue.", "Wed.", "Thu", "Fri.", "Sat.", "Sun."];
  const dates = [
    "14 Mar.",
    "15 Mar.",
    "16 Mar.",
    "17 Mar.",
    "18 Mar.",
    "19 Mar.",
    "20 Mar.",
  ];
  const timeSlots = [
    "10:00 - 11:30",
    "11:30 - 13:00",
    "13:00 - 14:30",
    "14:30 - 16:00",
    "16:00 - 17:30",
    "17:30 - 19:00",
  ];

  const schedule = {
    "0-0": { subject: "Programming", status: "unviewed" }, // Mon, 10:00
    "1-1": { subject: "Programming", status: "canceled" }, // Tue, 11:30
    "2-0": { subject: "Programming", status: "unviewed" }, // Mon, 13:00
    "3-2": { subject: "Programming", status: "confirmed" }, // Wed, 14:30
    "3-3": { subject: "Programming", status: "confirmed", count: 12 }, // Thu, 14:30
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "unviewed":
        return "unviewed";
      case "canceled":
        return "canceled";
      case "confirmed":
        return "confirmed";
      default:
        return "";
    }
  };
  const handleCellClick = (key) => {
    if (selectedCell === key) {
      // İkinci dəfə klik – modalı aç
      setOpen(true);
    } else {
      // İlk klik – hüceyrəni seç
      setSelectedCell(key);
    }
  };


  return (
    <div className="schedule-container">
      <div className="table-wrapper">
        <table className="schedule-table">
          <thead>
            <tr>
              <th></th>
              {days.map((day, index) => (
                <th key={index}>
                  <span className="day">{day}</span>
                  <span className="date">{dates[index]}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {timeSlots.map((slot, rowIndex) => (
             
              <tr key={rowIndex}>
                <td className="time-slot" onClick={()=>{console.log(slot.split("-")[0]);}}> 
                  <span>{slot.split("-")[0]}</span>
                  <span>-</span>
                  <span>{slot.split("-")[1]}</span>
                </td>
                {days.map((_, colIndex) => {
                  const key = `${rowIndex}-${colIndex}`;
                  const cell = schedule[key];
                  return (
                    <td
                      key={colIndex}
                      className={`${cell ? getStatusClass(cell.status) : ""} day-off`}
                      onClick={() => handleCellClick(`${rowIndex}-${colIndex}`)}
                    >
                      {cell && (
                        <div className="class-info">
                          <div className="class-name">{cell.subject}</div>
                          {/* {cell.status === "confirmed" && cell.count && (
                            <div className="student-count">
                              <PersonIcon
                                sx={{ fontSize: 14, marginRight: "4px" }}
                              />
                              {cell.count}
                            </div>
                          )} */}
                          <div className="status-text">
                            {cell.status.charAt(0).toUpperCase() +
                              cell.status.slice(1)}
                          </div>
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
 <MainTeacherModal open={open} setOpen={setOpen}/>
         
    </div>
 
  );
};

export default MainPanelTable;
