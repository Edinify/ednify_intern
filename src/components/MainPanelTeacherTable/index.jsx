import "./mainPanelTable.scss";
import PersonIcon from "@mui/icons-material/Person";
import React, { useState } from "react";
import MainTeacherModal from "../MainTeacherModal";

const MainPanelTeacherTable = () => {
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
    "18 Mar.",
    "19 Mar.",
    "20 Mar.",
    "21 Mar.",
    "22 Mar.",
    "23 Mar.",
  ];
  const timeSlots = [
    "10:00 - 11:30",
    "11:30 - 13:00",
    "13:00 - 14:30",
    "14:30 - 16:00",
    "16:00 - 17:30",
    "17:30 - 19:00",
  ];

  const scheduleDays = dates.map((date, index) => ({
    day: days[index % days.length], 
    date,
  }));
  

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
  const getCellData = (key) => {
    const [colIndex, rowIndex] = key.split("-").map(Number);
    const cell = schedule[key];
    if (!cell) return null;
  
    const time = timeSlots[rowIndex];
    const { day, date } = scheduleDays[colIndex];
  
    return {
      subject: cell.subject,
      status: cell.status,
      day,
      date,
      time,
      teacher: cell.teacher || "Unknown",
    };
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
         <div className={`table-wrapper ${dates.length > 7 ? "scrollable" : ""}`}>
      <table className="schedule-table">
        <thead>
          <tr>
            <th></th>
            {scheduleDays.map((item, index) => (
              <th key={index}>
                  <span className="day">{item.day}</span>
                  <span className="date">{item.date}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timeSlots.map((slot, rowIndex) => (
            <tr key={rowIndex}>
               <td className="time-slot">
        <span>{slot.split("-")[0]}</span>
        <span>-</span>
        <span>{slot.split("-")[1]}</span>
      </td>
              {scheduleDays.map((_, colIndex) => {
                const key = `${colIndex}-${rowIndex}`;
                const cell = schedule[key];
               
                return (
                  <td
                    key={key}
                    className={`day-off ${cell? getStatusClass(cell.status) : ""}`}
                    onClick={() => handleCellClick(key)}
                  >
                    {cell && (   <div className="class-info">
                <div className="class-name">{cell.subject}</div>
                <div className="status-text">
                  {cell.status.charAt(0).toUpperCase() + cell.status.slice(1)}
                </div>
              </div>)}
                    
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
  </div>
      {open && selectedCell &&(
        <MainTeacherModal open={open} setOpen={setOpen} selectedCell={selectedCell} cellData={getCellData(selectedCell)}/>
      )}
    
    </div>
 
  );
};

export default MainPanelTeacherTable;  