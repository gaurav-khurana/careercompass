import { useState } from "react";
import {
  getNewJobProps,
  JobDetailsInterface,
} from "../../interfaces/interface";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

function JobForm({ getNewJob, jobDetails }: getNewJobProps) {
  console.log(jobDetails);

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

  // handler to form submission
  function handleJobForm(event: React.FormEvent) {
    event.preventDefault();

    if (
      companyName &&
      positionName &&
      date &&
      role &&
      status &&
      duties &&
      requirements
    ) {
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
      getNewJob(newJob);
    }
  }

  return (
    <>
      <form className="job-form" onSubmit={handleJobForm}>
        <label className="job-form__label" htmlFor="companyName">
          Company Name
          <input
            className="job-form__input"
            type="text"
            name="companyName"
            id="companyName"
            // value={companyName}
            defaultValue={jobDetails?.company_name}
            // onChange={handleCompanyName}
            onChange={(event) => setCompanyName(event.target.value)}
            required
          />
        </label>
        <label className="job-form__label" htmlFor="positionName">
          Job Position
          <input
            className="job-form__input"
            type="text"
            name="positionName"
            id="positionName"
            // value={positionName}
            defaultValue={jobDetails?.job_position}
            // onChange={handlePositionName}
            onChange={(event) => setPositionName(event.target.value)}
            required
          />
        </label>
        <label className="job-form__label" htmlFor="date">
          Date
          <input
            className="job-form__input"
            type="date"
            name="date"
            id="date"
            // value={date}
            defaultValue={jobDetails?.date}
            // onChange={handleDate}
            onChange={(event) => setDate(event.target.value)}
            required
          />
        </label>
        <label className="job-form__label" htmlFor="status">
          Status
          <input
            className="job-form__input"
            type="text"
            name="status"
            id="status"
            // value={status}
            defaultValue={jobDetails?.status}
            // onChange={handleStatus}
            onChange={(event) => setStatus(event.target.value)}
            required
          />
          <input type="checkbox" name="status" id="status" />
        </label>
        <label className="job-form__label" htmlFor="role">
          Role
        </label>
        <textarea
          className="job-form__textarea"
          name="role"
          id="role"
          // value={role}
          defaultValue={jobDetails?.role}
          cols={30}
          rows={10}
          // onChange={handleRole}
          onChange={(event) => setRole(event.target.value)}
          required
        ></textarea>
        <label className="job-form__label" htmlFor="duties">
          Duties
        </label>
        <textarea
          className="job-form__textarea"
          name="duties"
          id="duties"
          // value={duties}
          defaultValue={jobDetails?.duties}
          cols={30}
          rows={10}
          // onChange={handleDuties}
          onChange={(event) => setDuties(event.target.value)}
          required
        ></textarea>
        <label className="job-form__label" htmlFor="requirements">
          Requirements
        </label>
        <textarea
          className="job-form__textarea"
          name="requirements"
          id="requirements"
          // value={requirements}
          defaultValue={jobDetails?.requirements}
          cols={30}
          rows={10}
          // onChange={handleRequirements}
          onChange={(event) => setRequirements(event.target.value)}
          required
        ></textarea>
        <div className="job-form-btn-container">
          <Button
            containerClassName="job-form__button--reset"
            buttonClassName="btn__cancel"
            buttonType="reset"
            buttonText="Cancel"
            // buttonHandler={handleCancelForm}
            buttonHandler={() => navigate("/dashboard")}
          />

          <button className="btn btn__add-job" type="submit">
            Add Job
          </button>
        </div>
      </form>
    </>
  );
}

export default JobForm;
