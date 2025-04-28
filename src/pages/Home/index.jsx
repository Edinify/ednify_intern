import { useState } from "react";
import Slider from "@mui/material/Slider";
import "./Dashboard.scss";
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
            <p className="title">Təsdiqlənmiş dərslər</p>
            <p className="value">77</p>
          </div>
        </div>
        <div className="status-box cancelled">
          <div className="icon">❌</div>
          <div className="info">
            <p className="title">Ləğv edilmiş dərslər</p>
            <p className="value">19</p>
          </div>
        </div>
        <div className="status-box pending">
          <div className="icon">❓</div>
          <div className="info">
            <p className="title">Baxılmamış dərslər</p>
            <p className="value">2</p>
          </div>
        </div>

        <div className="subjects-statistics">
          <h4>Fənlərin statistikası</h4>
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
        </div>

        <div className="heard-from">
          <div className="heard-header">
            <h4>Bizi haradan eşidiblər?</h4>
          </div>

          <div className="heard-list">
            {filteredHeardFrom.map((item, index) => {
              const colors = {
                Referral: "green",
                Instagram: "blue",
                Events: "orange",
                "Outdoor advertising": "red",
                Digər: "gray",
              };
              return (
                <div className="heard-item" key={index}>
                  <span
                    className={`dot ${colors[item.source] || "gray"}`}
                  ></span>
                  <div className="details">
                    <span className="source">{item.source}</span>
                    <span className="value">{item.value}</span>
                  </div>
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
              <h4>Tələbələrin sayı</h4>
              <select>
                <option>İllik</option>
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
              <div className="label">Aylıq mədaxil</div>
              <div className="value">1259.95</div>
              <div className="percentage positive">+36.47%</div>
            </div>
            <div className="summary expense">
              <div className="label">Aylıq xərc</div>
              <div className="value">382.54</div>
              <div className="percentage negative">-25.45%</div>
            </div>
            <div className="summary turnover">
              <div className="label">Aylıq dövriyyə</div>
              <div className="value">2497.42</div>
              <div className="percentage positive">+98.12%</div>
            </div>
            <div className="summary profit">
              <div className="label">Aylıq qazanc</div>
              <div className="value">1453.97</div>
              <div className="percentage positive">+72.64%</div>
            </div>
          </div>
        </div>

        <div className="leaderboard">
          <div className="leader-header">
            <h4>Uğur lövhəsi</h4>
            <div className="filters">
              <select>
                <option>Cari ay</option>
              </select>
              <select>
                <option>Ulduzlar</option>
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
