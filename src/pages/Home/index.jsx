import { useState } from "react";
import Slider from "@mui/material/Slider";
import "./Dashboard.scss";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { useTranslation } from "react-i18next";
import "./../../i18n.js";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const chartData = [
  { month: "Jan", students: 50 },
  { month: "Feb", students: 80 },
  { month: "Mar", students: 130 },
  { month: "Apr", students: 120 },
  { month: "May", students: 90 },
  { month: "Jun", students: 60 },
  { month: "Jul", students: 40 },
  { month: "Aug", students: 180 },
  { month: "Sep", students: 140 },
  { month: "Oct", students: 170 },
  { month: "Nov", students: 150 },
  { month: "Dec", students: 130 },
];

const subjectData = [
  { name: "Digital art", value: 400 },
  { name: "Programming", value: 300 },
  { name: "Science", value: 300 },
  { name: "Robotics", value: 200 },
  { name: "English", value: 100 },
  { name: "Digər", value: 50 },
];

const COLORS = [
  "#00c853",
  "#ff9800",
  "#f44336",
  "#3f51b5",
  "#2196f3",
  "#9e9e9e",
];

const heardFromData = [
  { source: "Referral", value: "6.4%" },
  { source: "Instagram", value: "23.9%" },
  { source: "Events", value: "28.4%" },
  { source: "Outdoor advertising", value: "31.2%" },
  { source: "Digər", value: "10.1%" },
];

const Dashboard = () => {
  const [filter, setFilter] = useState("All");
  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const data = [
    {
      teacher: "Agababa Bagirov",
      date: "14 Mar",
      week: "Mon",
      time: "10:00-11:30",
    },
    {
      teacher: "Elgun Mammadeliyev",
      date: "17 Mar",
      week: "Thu",
      time: "16:00-17:30",
    },
    {
      teacher: "Elgun Mammadeliyev",
      date: "02 Feb",
      week: "Sat",
      time: "17:30-19:00",
    },
    {
      teacher: "Elgun Mammadeliyev",
      date: "05 May",
      week: "Mon",
      time: "09:00-10:30",
    },
    {
      teacher: "Xeyyam Omarov",
      date: "12 Jan",
      week: "Wed",
      time: "11:30-13:00",
    },
    {
      teacher: "Xeyyam Omarov",
      date: "21 Nov",
      week: "Sun",
      time: "13:00-14:30",
    },
  ];
  const groupedData = data.reduce((acc, curr) => {
    if (!acc[curr.teacher]) acc[curr.teacher] = [];
    acc[curr.teacher].push(curr);
    return acc;
  }, {});

  const filteredHeardFrom =
    filter === "All"
      ? heardFromData
      : heardFromData.filter((item) => item.source === filter);

  return (
    <div className="dashboardd">
      <div className="left-panel">
        <div className="status-box confirmed">
          <div className="icon">✅</div>
          <div className="info">
            <p className="title">{t("Confirmed lessons")}</p>
            <p className="value">77</p>
          </div>
          <CalendarTodayIcon className="calendar" />
        </div>

        <div className="status-box cancelled">
          <div className="icon">❌</div>
          <div className="info">
            <p className="title">{t("Canceled lessons")}</p>
            <p className="value">19</p>
          </div>
          <CalendarTodayIcon className="calendar" />
        </div>
        <div className="status-box">
          <div className="icon-box">
            <span className="icon">❓</span>
          </div>
          <div className="text-info">
            <p className="title">{t("Unviewed lessons")}</p>
            <p className="count">0</p>
          </div>
          <div className="dots" onClick={() => setIsModalOpen(true)}>
            ⋯
          </div>
        </div>

        {isModalOpen && (
          <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <h3>{t("Unviewed Lesson Details")}</h3>
              <table>
                <thead>
                  <tr>
                    <th>{t("Teacher Name")}</th>
                    <th>{t("Date")}</th>
                    <th>{t("Week")}</th>
                    <th>{t("Time")}</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(groupedData).map(([teacher, lessons]) =>
                    lessons.map((lesson, idx) => (
                      <tr key={`${teacher}-${idx}`}>
                        {idx === 0 && (
                          <td rowSpan={lessons.length}>{teacher}</td>
                        )}
                        <td>{lesson.date}</td>
                        <td>{lesson.week}</td>
                        <td>{lesson.time}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* <div className="subjects-statistics">
          <h4>{t("Class statistics")}</h4>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={subjectData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={70}
                fill="#8884d8"
                dataKey="value"
              >
                {subjectData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <CalendarTodayIcon className="calendar" />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div> */}
        <div className="subjects-statistics">
          <h4>{t("Class statistics")}</h4>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={subjectData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={70}
                fill="#8884d8"
                dataKey="value"
              >
                {subjectData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
          <CalendarTodayIcon className="calendar" />
        </div>

        <div className="heard-from">
          <div className="heard-header">
            <h4>Where did they hear us from?</h4>
          </div>
          <div className="heard-list">
            {filteredHeardFrom.map((item, index) => {
              const colors = {
                Referral: "#00C49F",
                Instagram: "#00BFFF",
                Events: "#FFBB28",
                "Outdoor advertising": "#FF4C4C",
                Digər: "#A9A9A9",
              };
              return (
                <div className="heard-item" key={index}>
                  <div className="left">
                    <span
                      className="dot"
                      style={{ backgroundColor: colors[item.source] || "#ccc" }}
                    ></span>
                    <span className="source">{item.source}</span>
                  </div>
                  <span className="value">{item.value}%</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="right-panel">
        <div className="part">
          <div className="chart-box">
            <div className="header">
              <h4>{t("Amount of students")}</h4>
              <select>
                <option>{t("Annual")}</option>
              </select>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="students"
                  stroke="#4F46E5"
                  strokeWidth={2}
                  dot={{ r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="summary-boxes">
            <div className="summary income">
              <div className="label">{t("Monthly income")}</div>
              <div className="value">1259.95</div>
              <div className="percentage positive">+36.47%</div>
            </div>
            <div className="summary expense">
              <div className="label">{t("Monthly expense")}</div>
              <div className="value">382.54</div>
              <div className="percentage negative">-25.45%</div>
            </div>
            <div className="summary turnover">
              <div className="label">{t("Monthly turnover")}</div>
              <div className="value">2497.42</div>
              <div className="percentage positive">+98.12%</div>
            </div>
            <div className="summary profit">
              <div className="label">{t("Monthly profit")}</div>
              <div className="value">1453.97</div>
              <div className="percentage positive">+72.64%</div>
            </div>
          </div>
        </div>

        <div className="leaderboard">
          <div className="leader-header">
            <h4>{t("Leaderboard")}</h4>
            <div className="filters">
              <select>
                <option>{t("Current month")}</option>
              </select>
              <select>
                <option>{t("Stars")}</option>
              </select>
            </div>
          </div>

          <div className="top-three">
            <div className="user second">
              <img
                src="https://thumbs.dreamstime.com/b/close-up-photo-positive-cheerful-satisfied-lady-people-indicate-advertisement-decide-choose-indication-selection-tip-promotion-148225779.jpg"
                alt="Nərgiz"
              />
              <p className="name">Nərgiz</p>
              <span className="score">2nd • 533</span>
            </div>
            <div className="user first">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
                alt="Ağababa"
              />
              <p className="name">Ağababa</p>
              <span className="score">1st • 648</span>
            </div>
            <div className="user third">
              <img
                src="https://th.bing.com/th/id/OIP.lMou0iYtO6igVEgTPPM24wHaE7?rs=1&pid=ImgDetMain"
                alt="Ceyhun"
              />
              <p className="name">Ceyhun</p>
              <span className="score">3rd • 482</span>
            </div>
          </div>

          <ul className="ranking">
            <li>
              <span className="rank">4.</span> Raya Hasanova{" "}
              <span className="points">389</span>
            </li>
            <li>
              <span className="rank">5.</span> Nərgiz Seyidzadə{" "}
              <span className="points">375</span>
            </li>
            <li>
              <span className="rank">6.</span> Ortoğrul Rəşid{" "}
              <span className="points">351</span>
            </li>
            <li>
              <span className="rank">7.</span> İmamnəzər Şahbazov{" "}
              <span className="points">286</span>
            </li>
            <li>
              <span className="rank">8.</span> Cahan Şahbazlı{" "}
              <span className="points">243</span>
            </li>
            <li>
              <span className="rank">9.</span> Lala Eyubova{" "}
              <span className="points">218</span>
            </li>
            <li>
              <span className="rank">10.</span> Türkanə Qəhrəmanlı{" "}
              <span className="points">145</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
