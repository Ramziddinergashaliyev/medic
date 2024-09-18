import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
const App = lazy(() => import("./App.jsx"));
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./context/index.js";
import Leazy from "./components/leazy/Leazy.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<Leazy />}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </Suspense>
  </StrictMode>
);
