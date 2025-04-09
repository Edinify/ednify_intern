import Root from "../pages/Root";
import Login from "../pages/Login";
import NoPage from "../pages/NoPage";
import Home from "../pages/Home";
import MainPanel from "../pages/MainPanel";
import ForgotPassword from "../pages/ForgotPassword";
import Classes from "../pages/Classes";
import Teachers from "../pages/Teachers";
import Students from "../pages/Students";
import Finance from "../pages/Finance";
import Stimulation from "../pages/Stimulation";
import Salary from "../pages/Salary";
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
      {
        path: "/classes",
        element: <Classes />,
      },
      {
        path: "/teachers",
        element: <Teachers />,
      },
      {
        path: "/students",
        element: <Students />,
      },
      {
        path: "/finance",
        element: <Finance />,
      },
      {
        path: "/stimulation",
        element: <Stimulation />,
      },
      {
        path: "/salary",
        element: <Salary />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "*",
    element: <NoPage />,
  },
];
