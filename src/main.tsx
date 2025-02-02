import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CookiesProvider } from "react-cookie";
import RQProvider from "./RQProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <CookiesProvider>
    <RQProvider>
      <App />
    </RQProvider>
  </CookiesProvider>
);
