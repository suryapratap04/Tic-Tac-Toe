import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AppContextProvider from "./Context/AppContext.jsx";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<AppContextProvider>
			<App />
			<ToastContainer />
		</AppContextProvider>
	</BrowserRouter>
);
