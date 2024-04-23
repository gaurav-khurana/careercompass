import "./DashboardPage.scss";
import Navbar from "../../components/Navbar/Navbar";
import allJobs from "../../data/allJobs.json";
import JobCard from "../../components/JobCard/JobCard";

console.log(allJobs);

function DashboardPage() {
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
