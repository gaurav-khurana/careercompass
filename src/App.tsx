import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import JobDetailsPage from "./pages/JobDetailsPage/JobDetailsPage";
import AddJobPage from "./pages/AddJobPage/AddJobPage";
import EditJobPage from "./pages/EditJobPage/EditJobPage";

function App(): JSX.Element {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/:id" element={<JobDetailsPage />} />
          <Route path="/addjob" element={<AddJobPage />} />
          <Route path="/editjob/:id" element={<EditJobPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
