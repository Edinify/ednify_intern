import Root from "../pages/Root";
import Login from "../pages/Login";
import NoPage from "../pages/NoPage";
import Home from "../pages/Home";
import MainPanel from "../pages/MainPanel";
export const routes = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/mainpanel",
        element: <MainPanel />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NoPage />,
  },
];
