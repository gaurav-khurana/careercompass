import "./AddJobPage.scss";
import { JobDetailsInterface } from "../../interfaces/interface";
import Navbar from "../../components/Navbar/Navbar";
import JobForm from "../../components/JobForm/JobForm";
import { postNewJob } from "../../services/services";
import { useNavigate } from "react-router-dom";

function AddJobPage(): JSX.Element {
  // navigation hook
  const navigate = useNavigate();

  // event to submit form for axios call; pass this to JobForm & get newJob here
  function getNewJob(newJob: JobDetailsInterface) {
    console.log(newJob);

    try {
      postNewJob(newJob); // axios call here or from services
    } catch (error) {
      console.log("Failed to Post Job");
    }

    navigate("/dashboard");
  }

  return (
    <>
      <Navbar />

      <section className="job-form-container">
        <h2 className="job-form__title">Add New Job Posting</h2>

        <JobForm getNewJob={getNewJob} />
      </section>
    </>
  );
}

export default AddJobPage;
