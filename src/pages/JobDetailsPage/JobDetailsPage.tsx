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
        <div className="jobDetails-text-container">
          <h2 className="jobDetails__title">{singleJob?.company_name}</h2>

          <h2 className="jobDetails__title">
            {/* Job Position: {singleJob?.job_position} */}
            {singleJob?.job_position}
          </h2>

          {/* <h3 className="jobDetails__title">Status: {singleJob?.status}</h3> */}
          {singleJob?.status === "Applied" ? (
            <h3 className="jobDetails__title status status--applied">
              {singleJob?.status}
            </h3>
          ) : (
            <h3 className="jobDetails__title status status--rejected">
              {singleJob?.status}
            </h3>
          )}
          {/* <h3 className="jobDetails__title">{singleJob?.status}</h3> */}

          <h2 className="jobDetails__title">Role</h2>
          <p className="jobDetails__text">{singleJob?.role}</p>

          <h3 className="jobDetails__title">Duties</h3>
          <p className="jobDetails__text">{singleJob?.duties}</p>

          <h3 className="jobDetails__title">Requirements</h3>
          <p className="jobDetails__text">{singleJob?.requirements}</p>

          <Button
            containerClassName="jobDetails__button"
            buttonClassName="btn__jobDetails"
            buttonType="button"
            buttonText="Back"
            buttonHandler={handleJobDetails}
          />
        </div>
      </section>
    </>
  );
}

export default JobDetailsPage;
