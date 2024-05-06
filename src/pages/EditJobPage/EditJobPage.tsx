import "../AddJobPage/AddJobPage.scss";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import JobForm from "../../components/JobForm/JobForm";
import { editJobPosting, getSingleJob } from "../../services/services";
import { JobDetailsInterface } from "../../interfaces/interface";
import Navbar from "../../components/Navbar/Navbar";

function EditJobPage(): JSX.Element {
  // navigate hook
  const navigate = useNavigate();

  // get id from params
  const id = useParams();
  console.log(id.id);
  const jobId: number = Number(id.id);

  // set state to prefil form
  const [jobDetails, setJobDetails] = useState<JobDetailsInterface>();

  // func to get data fr single job frm services
  const loadSingleJob = async (jobId: number) => {
    const singleJobData = await getSingleJob(jobId);
    console.log(singleJobData);
    setJobDetails(singleJobData);
  };

  useEffect(() => {
    loadSingleJob(jobId);
  }, [jobId]);

  function getNewJob(newJob: JobDetailsInterface, id = jobId) {
    console.log("i run");
    console.log(newJob, id);
    try {
      editJobPosting(newJob, id);
      alert("Job posting modified");
      navigate("/dashboard");
    } catch (error) {
      console.log("Failed to Edit job posting", error);
    }
  }

  return (
    <>
      <Navbar />
      <h2>EDIT JOB DETAILS</h2>
      <JobForm jobDetails={jobDetails} getNewJob={getNewJob} />
    </>
  );
}

export default EditJobPage;
