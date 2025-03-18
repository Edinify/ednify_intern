import { Outlet } from "react-router-dom";
import Sidebar from "../../layouts/Sidebar";
import Header from "../../layouts/Header";
import "./root.scss";

const Root = () => {
  return (
    <div className="layout">
      <aside className="sidebar">
        <Sidebar />
      </aside>
      <div className="main-content">
        <header className="header">
          <Header />
        </header>
        <main className="content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Root;
