import "./JobDetailsPage.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import { JobDetailsInterface } from "../../interfaces/interface";
import Button from "../../components/Button/Button";
import { getSingleJob } from "../../services/services";

function JobDetailsPage() {
  const navigate = useNavigate();

  // navigating thru anonymous callback from btn
  // function handleJobDetails() {
  //   navigate("/dashboard");
  // }

  // axios call to job details by id
  const id = useParams();
  console.log(id.id);
  // convert value from params frm str to num & store to pass to load job
  const jobId: number = Number(id.id);

  const [singleJob, setSingleJob] = useState<JobDetailsInterface>();

  // func to await all data from axios call in services
  const loadSingleJob = async (jobId: number) => {
    const singleJobData = await getSingleJob(jobId);
    setSingleJob(singleJobData);
  };

  useEffect(() => {
    // async function getSingleJob() {
    //   const response = await axios.get(
    //     `http://localhost:8080/dashboard/${id.id}`
    //   );

    //   console.log(response.data);

    //   setSingleJob(response.data);
    // }

    // getSingleJob();
    loadSingleJob(jobId);
  }, [jobId]);
  // }, [id.id]);

  return (
    <>
      <Navbar />

      <section className="jobDetails-container">
        <div className="jobDetails-text-container">
          <h2 className="jobDetails__title">{singleJob?.company_name}</h2>

          <h2 className="jobDetails__title">{singleJob?.job_position}</h2>

          {singleJob?.status === "Applied" ? (
            <h3 className="jobDetails__title status status--applied">
              {singleJob?.status}
            </h3>
          ) : (
            <h3 className="jobDetails__title status status--rejected">
              {singleJob?.status}
            </h3>
          )}

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
            // buttonHandler={handleJobDetails}
            buttonHandler={() => navigate("/dashboard")}
          />
        </div>
      </section>
    </>
  );
}

export default JobDetailsPage;
