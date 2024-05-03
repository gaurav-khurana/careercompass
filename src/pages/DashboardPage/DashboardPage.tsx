import "./DashboardPage.scss";
import Navbar from "../../components/Navbar/Navbar";
import JobCard from "../../components/JobCard/JobCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { JobCardInterface } from "../../interfaces/interface";

// import allJobs from "../../data/allJobs.json";
// console.log(allJobs); status data from json on client side

function DashboardPage() {
  // const [allJobs, setAllJobs] = useState([]);
  const [allJobs, setAllJobs] = useState<JobCardInterface[]>([]);

  useEffect(() => {
    async function getAllJobs() {
      const response = await axios.get("http://localhost:8080/dashboard");
      console.log(response.data);
      setAllJobs(response.data);
    }
    getAllJobs();
  }, [setAllJobs]);

  return (
    <>
      <div className="dashboard-container">
        <Navbar />

        <section className="jobs-container">
          {allJobs.map((job) => (
            <JobCard
              key={job.id}
              id={job.id}
              company_name={job.company_name}
              job_position={job.job_position}
              date={job.date}
              status={job.status}
            />
          ))}
        </section>
      </div>
    </>
  );
}

export default DashboardPage;
