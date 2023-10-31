import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  Outlet,
  useParams,
  NavLink,
  useNavigate,
  useLocation,
} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Partner from "./pages/Partner";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<App />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/partner">
          <Route path="dashboard" element={<Partner />} />
        </Route>
        <Route path="/contact" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
