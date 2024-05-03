import "./JobDetailsPage.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import { JobDetailsInterface } from "../../interfaces/interface";
import Button from "../../components/Button/Button";

function JobDetailsPage() {
  const navigate = useNavigate();

  function handleJobDetails() {
    navigate("/dashboard");
  }

  // axios call to job details by id
  const id = useParams();
  console.log(id.id);

  const [singleJob, setSingleJob] = useState<JobDetailsInterface>();

  useEffect(() => {
    async function getSingleJob() {
      const response = await axios.get(
        `http://localhost:8080/dashboard/${id.id}`
      );

      console.log(response.data);

      setSingleJob(response.data);
    }

    getSingleJob();
  }, [id.id]);

  return (
    <>
      <Navbar />

      <section className="jobDetails-container">
        <h2>Company name: {singleJob?.company_name}</h2>

        <h2>Job Position: {singleJob?.job_position}</h2>
        <h3>Status: {singleJob?.status}</h3>
        <h2>Role</h2>
        <p>{singleJob?.role}</p>
        <h3>Duties</h3>
        <p>{singleJob?.duties}</p>
        <h3>Requirements</h3>
        <p>{singleJob?.requirements}</p>

        <Button
          containerClassName="jobDetails__button"
          buttonClassName="btn__jobDetails"
          buttonType="button"
          buttonText="Back"
          buttonHandler={handleJobDetails}
        />
      </section>
    </>
  );
}

export default JobDetailsPage;
