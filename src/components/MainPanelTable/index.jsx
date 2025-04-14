import "./mainPanelTable.scss";
import PersonIcon from "@mui/icons-material/Person";

const MainPanelTable = () => {
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
                <td className="time-slot">{slot}</td>
                {days.map((_, colIndex) => {
                  const key = `${rowIndex}-${colIndex}`;
                  const cell = schedule[key];
                  return (
                    <td
                      key={colIndex}
                      className={`${cell ? getStatusClass(cell.status) : ""} day-off`}
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
    </div>
  );
};

export default MainPanelTable;
