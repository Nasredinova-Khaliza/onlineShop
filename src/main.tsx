import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { ReduxProvider } from "./providers/ReduxProvider.tsx";
import { BrowserRouter } from "react-router-dom";
import { ProtectRoute } from "./providers/ProtectRoute.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ReduxProvider>
			<BrowserRouter>
				<ProtectRoute>
					<App />
				</ProtectRoute>
			</BrowserRouter>
		</ReduxProvider>
	</React.StrictMode>
);
