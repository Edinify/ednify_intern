import "./mainPanelTable.scss";

const MainPanelTable = () => {
  const days = ["Mon.", "Tue.", "Wed.", "Thu", "Fri.", "Sat.", "Sun."];
  const dates = ["14 Mar.", "15 Mar.", "16 Mar.", "17 Mar.", "18 Mar.", "19 Mar.", "20 Mar."];
  const timeSlots = [
    "10:00 - 11:30", "11:30 - 13:00", "13:00 - 14:30",
    "14:30 - 16:00", "16:00 - 17:30", "17:30 - 19:00"
  ];
  
  return (
    <div className="schedule-container">
     <div className="table-wrapper">
     <table className="schedule-table">
        <thead>
          <tr>
            <th></th>
            {days.map((day, index) => (
              <th key={index} className="week-days">
                <span className="day">{day}</span>
                <span className="date">{dates[index]}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timeSlots.map((slot, rowIndex) => (
            <tr key={rowIndex} className="time-slot-row">
              <td className="time-slot">{slot}</td>
              {days.map((_, colIndex) => (
                <td key={colIndex} className="empty-slot"></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
     </div>
    </div>
  );
};

export default MainPanelTable;
