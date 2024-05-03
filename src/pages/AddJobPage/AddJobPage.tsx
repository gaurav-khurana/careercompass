import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Navbar from "../../components/Navbar/Navbar";
import "./AddJobPage.scss";
import { useState } from "react";
import { JobDetailsInterface } from "../../interfaces/interface";
import axios from "axios";

function AddJobPage() {
  // navigation hook
  const navigate = useNavigate();

  // state for form
  const [companyName, setCompanyName] = useState("");
  const [positionName, setPositionName] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");
  const [role, setRole] = useState("");
  const [duties, setDuties] = useState("");
  const [requirements, setRequirements] = useState("");

  // get values from form
  function handleCompanyName(event: MouseEvent) {
    console.log(event.target.value);
    setCompanyName(event.target.value);
  }

  function handlePositionName(event: MouseEvent) {
    console.log(event.target.value);
    setPositionName(event.target.value);
  }

  function handleDate(event: MouseEvent) {
    console.log(event.target.value);
    setDate(event.target.value);
  }

  function handleStatus(event: MouseEvent) {
    console.log(event.target.value);
    setStatus(event.target.value);
  }

  function handleRole(event: MouseEvent) {
    console.log(event.target.value);
    setRole(event.target.value);
  }

  function handleDuties(event: MouseEvent) {
    console.log(event.target.value);
    setDuties(event.target.value);
  }

  function handleRequirements(event: MouseEvent) {
    console.log(event.target.value);
    setRequirements(event.target.value);
  }

  // handler to cancel form
  function handleCancelForm() {
    // console.log(event.target);
    navigate("/dashboard");
  }

  async function postNewJob(newJob: JobDetailsInterface) {
    const response = await axios.post(
      "http://localhost:8080/dashboard",
      newJob
    );
    console.log(response);
  }

  // handler to form submission
  function handleJobForm(event: MouseEvent) {
    event.preventDefault();
    // console.log(event.target);

    const newJob: JobDetailsInterface = {
      company_name: companyName,
      job_position: positionName,
      date: date,
      role: role,
      status: status,
      duties: duties,
      requirements: requirements,
    };

    console.log(newJob);

    try {
      postNewJob(newJob);
    } catch (error) {
      console.log("Failed to Post Job");
    }

    navigate("/dashboard");
  }

  return (
    <>
      <Navbar />

      <section className="job-form-container">
        <form className="job-form">
          {/* onSubmit={handleJobForm} */}

          <label htmlFor="companyName">Company Name</label>
          <input
            type="text"
            name="companyName"
            id="companyName"
            required
            onChange={handleCompanyName}
          />

          <label htmlFor="positionName">Job Position</label>
          <input
            type="text"
            name="positionName"
            id="positionName"
            required
            onChange={handlePositionName}
          />

          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            id="date"
            required
            onChange={handleDate}
          />

          <label htmlFor="status">Status</label>
          <input
            type="text"
            name="status"
            id="status"
            required
            onChange={handleStatus}
          />

          <label htmlFor="role">Role</label>
          <textarea
            name="role"
            id="role"
            cols={30}
            rows={10}
            required
            onChange={handleRole}
          ></textarea>

          <label htmlFor="duties">Duties</label>
          <textarea
            name="duties"
            id="duties"
            cols={30}
            rows={10}
            required
            onChange={handleDuties}
          ></textarea>

          <label htmlFor="requirements">Requirements</label>
          <textarea
            name="requirements"
            id="requirements"
            cols={30}
            rows={10}
            required
            onChange={handleRequirements}
          ></textarea>
        </form>

        <div className="job-form-btn-container">
          <Button
            containerClassName="jobForm__button--reset"
            buttonClassName="btn__jobForm"
            buttonType="reset"
            buttonText="Cancel"
            buttonHandler={handleCancelForm}
          />
          <Button
            containerClassName="jobForm__button--submit"
            buttonClassName="btn__jobForm"
            buttonType="submit"
            buttonText="Add Job"
            buttonHandler={handleJobForm}
          />
        </div>
      </section>
    </>
  );
}

export default AddJobPage;
