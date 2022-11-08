import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import "./tailwind.css";
// import {BrowserRouter} from 'react-router-dom';

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);
