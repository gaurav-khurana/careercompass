import "./DashboardPage.scss";
import Navbar from "../../components/Navbar/Navbar";
import JobCard from "../../components/JobCard/JobCard";
import { useEffect, useState } from "react";
import { JobCardInterface } from "../../interfaces/interface";
import { getAllJobs } from "../../services/services";

function DashboardPage() {
  // const [allJobs, setAllJobs] = useState([]);
  const [allJobs, setAllJobs] = useState<JobCardInterface[]>([]);

  // func to await all data from axios call in services
  const loadAllJobs = async () => {
    const allJobsData = await getAllJobs();
    setAllJobs(allJobsData);
  };

  useEffect(() => {
    loadAllJobs();
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
