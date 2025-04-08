import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import SyncIcon from "@mui/icons-material/Sync";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import { Button, MenuItem, Select } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import "./finance.scss";
import "../../styles/grid.scss";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const transactions = [
  {
    category: "Tuition fees",
    appointment: "Agababa Bagirov",
    amount: "100 AZN",
    date: "23.08.2023",
  },
  {
    category: "Tuition fees",
    appointment: "Lala Qasimova",
    amount: "240 AZN",
    date: "21.08.2023",
  },
  {
    category: "Other",
    appointment: "Property sale",
    amount: "1050 AZN",
    date: "12.07.2023",
  },
  {
    category: "Tuition fees",
    appointment: "Nargiz Omarov",
    amount: "80 AZN",
    date: "14.07.2023",
  },
  {
    category: "Other",
    appointment: "Refund",
    amount: "125 AZN",
    date: "07.07.2023",
  },
];
const data = [
  { name: "Sep", income: 120, expense: 60, turnover: 200, profit: 100 },
  { name: "Oct", income: 180, expense: 90, turnover: 250, profit: 150 },
  { name: "Nov", income: 240, expense: 120, turnover: 350, profit: 200 },
];

const statsData = [
  {
    title: "Income",
    amount: "₦ 1259.95",
    percentage: "+36.47%",
    icon: <ArrowDownwardIcon />,
    color: "#2ca9e1",
  },
  {
    title: "Expense",
    amount: "₦ 382.54",
    percentage: "-25.45%",
    icon: <ArrowUpwardIcon />,
    color: "#e14b31",
  },
  {
    title: "Turnover",
    amount: "₦ 2497.42",
    percentage: "+38.12%",
    icon: <SyncIcon />,
    color: "#f7b731",
  },
  {
    title: "Profit",
    amount: "₦ 1453.97",
    percentage: "+72.64%",
    icon: <ShowChartIcon />,
    color: "#28a745",
  },
];

const Finance = () => {
  const [selected, setSelected] = useState("last3");

  const filters = [
    { id: "current", label: "Current month" },
    { id: "last3", label: "Last 3 month" },
    { id: "last6", label: "Last 6 month" },
    { id: "yearly", label: "Yearly" },
    { id: "choose", label: "Choose date" },
  ];
  const [sortBy, setSortBy] = useState("date");
  return (
    <>
      <div class="part">
        <div className="search-container">
          <div className="filter-buttons">
            {filters.map((filter) => (
              <button
                key={filter.id}
                className={`${
                  selected === filter.id ? "active" : ""
                } button-type`}
                onClick={() => setSelected(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
          <div class="dashboard">
            <h2>Finance</h2>

            <div className="container">
              <div className="row ">
                <div className="col-7">
                  <div className="chart-container">
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="income" stroke="blue" />
                        <Line type="monotone" dataKey="expense" stroke="red" />
                        <Line
                          type="monotone"
                          dataKey="turnover"
                          stroke="orange"
                        />
                        <Line type="monotone" dataKey="profit" stroke="green" />
                      </LineChart>
                    </ResponsiveContainer>
                    <div className="button-part">
                      <div className="button-group">
                        <button className="btn income">Income</button>
                        <button className="btn expense">Expense</button>
                        <button className="btn turnover">Turnover</button>
                        <button className="btn profit">Profit</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-5 col-md-5">
                  <div className="stats-container">
                    {statsData.map((stat, index) => (
                      <div key={index} className="stats-card">
                        <div
                          className="icon-container"
                          style={{ backgroundColor: `${stat.color}20` }}
                        >
                          <span className="icon" style={{ color: stat.color }}>
                            {stat.icon}
                          </span>
                        </div>
                        <div className="details">
                          <p className="title">{stat.title}</p>
                          <h3 className="amount">{stat.amount}</h3>
                        </div>
                        <span
                          className={`percentage ${
                            stat.percentage.startsWith("+")
                              ? "positive"
                              : "negative"
                          }`}
                        >
                          {stat.percentage}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="transaction-container">
          <div className="table-controls">
            <Select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              displayEmpty
            >
              <MenuItem value="date">Sort by</MenuItem>
              <MenuItem value="amount">Sort by Amount</MenuItem>
              <MenuItem value="category">Sort by Category</MenuItem>
            </Select>
            <Select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              displayEmpty
            >
              <MenuItem value="date">All Category</MenuItem>
              <MenuItem value="amount">Sort by Amount</MenuItem>
              <MenuItem value="category">Sort by Category</MenuItem>
            </Select>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              className="add-button"
            >
              Add
            </Button>
          </div>

          <div className="table-wrapper">
            <table className="transaction-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Appointment</th>
                  <th>Amount</th>
                  <th>Date</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, index) => (
                  <tr key={index}>
                    <td>{transaction.category}</td>
                    <td>{transaction.appointment}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.date}</td>
                    <td>
                      <MoreVertIcon className="menu-icon" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Finance;
