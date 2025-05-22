import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import SyncIcon from "@mui/icons-material/Sync";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import {
  Button,
  MenuItem,
  Select,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";
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

const initialTransactions = [
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
  {
    category: "Food",
    appointment: "Coffee",
    amount: "17 AZN",
    date: "23.07.2023",
  },
  {
    category: "Cleaning supplies",
    appointment: "Glass cleaner",
    amount: "4.45 AZN",
    date: "21.08.2023",
  },
  {
    category: "Repair",
    appointment: "Water taps",
    amount: "107 AZN",
    date: "12.07.2023",
  },
  {
    category: "Lease",
    appointment: "Office",
    amount: "1500 AZN",
    date: "14.07.2023",
  },
  {
    category: "Equipment",
    appointment: "Talent",
    amount: "1075 AZN",
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
  const [transactions, setTransactions] = useState(initialTransactions);
  const [selected, setSelected] = useState("last");
  const [sortByDate, setSortByDate] = useState("date");
  const [sortByCategory, setSortByCategory] = useState("all");
  const [selectedType, setSelectedType] = useState("expense");

  const [openModal, setOpenModal] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  const [newAppointment, setNewAppointment] = useState("");
  const [newAmount, setNewAmount] = useState("");

  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editTransaction, setEditTransaction] = useState(null);

  const filters = [
    { id: "current", label: "Current month" },
    { id: "last3", label: "Last 3 month" },
    { id: "last6", label: "Last 6 month" },
    { id: "yearly", label: "Yearly" },
    { id: "choose", label: "Choose date" },
  ];

  const allCategories = [
    "Tuition fees",
    "Other",
    "Food",
    "Cleaning supplies",
    "Repair",
    "Lease",
    "Equipment",
  ];

  const handleSave = () => {
    const newTransaction = {
      category: newCategory,
      appointment: newAppointment,
      amount: `${newAmount} AZN`,
      date: new Date().toLocaleDateString("en-GB"),
    };
    setTransactions([...transactions, newTransaction]);
    setOpenModal(false);
    setNewCategory("");
    setNewAppointment("");
    setNewAmount("");
  };

  const handleEditClick = (transaction, index) => {
    setEditTransaction({ ...transaction, index });
    setEditModalOpen(true);
  };

  const handleEditSave = () => {
    const updated = [...transactions];
    updated[editTransaction.index] = {
      ...editTransaction,
      amount: `${editTransaction.amount.replace("AZN", "").trim()} AZN`,
    };
    setTransactions(updated);
    setEditModalOpen(false);
  };

  const deleteEntry = () => {
    if (editTransaction !== null) {
      const updated = [...transactions];
      updated.splice(editTransaction.index, 1);
      setTransactions(updated);
      setEditModalOpen(false);
    }
  };

  const filteredTransactions =
    selectedType === "income"
      ? transactions.filter(
          (t) => t.category === "Tuition fees" || t.category === "Other"
        )
      : transactions.filter(
          (t) =>
            t.category !== "Tuition fees" &&
            t.category !== "Other" &&
            t.category !== ""
        );

  return (
    <div className="part">
      {/* Filter buttons */}
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

        {/* Dashboard */}
        <div className="dashboard">
          <h2>Finance</h2>
          <div className="container">
            <div className="row">
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

      {/* Transactions Table */}
      <div className="transaction-container">
        <div className="transaction-type-toggle">
          <button
            className={`toggle-btn ${
              selectedType === "income" ? "active" : ""
            }`}
            onClick={() => setSelectedType("income")}
          >
            Income
          </button>
          <button
            className={`toggle-btn ${
              selectedType === "expense" ? "active" : ""
            }`}
            onClick={() => setSelectedType("expense")}
          >
            Expense
          </button>
        </div>

        <div className="table-controls">
          <Select
            value={sortByDate}
            onChange={(e) => setSortByDate(e.target.value)}
            displayEmpty
          >
            <MenuItem value="date">Sort by Date</MenuItem>
            <MenuItem value="amount">Sort by Amount</MenuItem>
            <MenuItem value="category">Sort by Category</MenuItem>
          </Select>
          <Select
            value={sortByCategory}
            onChange={(e) => setSortByCategory(e.target.value)}
            displayEmpty
          >
            <MenuItem value="all">Lowest amount</MenuItem>
            <MenuItem value="amount">Highest amount</MenuItem>
            <MenuItem value="category">Latest</MenuItem>
            <MenuItem value="category">Oldest</MenuItem>
          </Select>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            onClick={() => setOpenModal(true)}
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
              {filteredTransactions.map((transaction, index) => (
                <tr key={index}>
                  <td>{transaction.category}</td>
                  <td>{transaction.appointment}</td>
                  <td>{transaction.amount}</td>
                  <td>{transaction.date}</td>
                  <td>
                    <MoreVertIcon
                      className="menu-icon"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleEditClick(transaction, index)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Modal */}
      <Dialog
        open={openModal}
        onClose={() => setOpenModal(false)}
        PaperProps={{ sx: { width: 400, height: 400 } }}
      >
        <DialogTitle>
          {selectedType === "income" ? "Add Income" : "Add Expense"}
        </DialogTitle>
        <DialogContent>
          <FormControl fullWidth margin="dense">
            <InputLabel>Category</InputLabel>
            <Select
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              label="Category"
            >
              {allCategories.map((cat, idx) => (
                <MenuItem key={idx} value={cat}>
                  {cat}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            fullWidth
            label="Appointment"
            margin="dense"
            value={newAppointment}
            onChange={(e) => setNewAppointment(e.target.value)}
          />
          <TextField
            fullWidth
            label="Amount"
            margin="dense"
            value={newAmount}
            onChange={(e) => setNewAmount(e.target.value)}
            InputProps={{
              startAdornment: <span>AZN&nbsp;</span>,
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenModal(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleSave}>
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* Edit Modal */}
      <Dialog
        open={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        PaperProps={{ sx: { width: 400, height: 400 } }}
      >
        <DialogTitle>Edit Transaction</DialogTitle>
        <DialogContent>
          <FormControl fullWidth margin="dense">
            <InputLabel>Category</InputLabel>
            <Select
              value={editTransaction?.category || ""}
              onChange={(e) =>
                setEditTransaction({
                  ...editTransaction,
                  category: e.target.value,
                })
              }
            >
              {allCategories.map((cat, idx) => (
                <MenuItem key={idx} value={cat}>
                  {cat}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            fullWidth
            label="Appointment"
            margin="dense"
            value={editTransaction?.appointment || ""}
            onChange={(e) =>
              setEditTransaction({
                ...editTransaction,
                appointment: e.target.value,
              })
            }
          />
          <TextField
            fullWidth
            label="Amount"
            margin="dense"
            value={editTransaction?.amount?.replace("AZN", "").trim() || ""}
            onChange={(e) =>
              setEditTransaction({ ...editTransaction, amount: e.target.value })
            }
            InputProps={{
              startAdornment: <span>AZN&nbsp;</span>,
            }}
          />
        </DialogContent>
        <DialogActions className="dialog-actions">
          <Button className="delete-icon" onClick={deleteEntry}>
            🗑️
          </Button>
          <Button variant="contained" onClick={handleEditSave}>
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Finance;
