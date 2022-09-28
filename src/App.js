import "./App.css";
import Main from "./components/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContextProvider from "./context";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Main />} />
        </Routes>
      </BrowserRouter>{" "}
    </ContextProvider>
  );
}

export default App;
