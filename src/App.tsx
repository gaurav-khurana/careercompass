import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import JobDetailsPage from "./pages/JobDetailsPage/JobDetailsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/:jobId" element={<JobDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
