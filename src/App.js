import "./App.css";
import Main from "./components/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContextProvider from "./context";
import { NotificationProvider } from "./context/Notification/notification";

function App() {
  return (
    <NotificationProvider>
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<Main />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </NotificationProvider>
  );
}

export default App;
