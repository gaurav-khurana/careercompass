import "./AddJobPage.scss";
// import axios from "axios";
import { JobDetailsInterface } from "../../interfaces/interface";
import Navbar from "../../components/Navbar/Navbar";
import JobForm from "../../components/JobForm/JobForm";
import { postNewJob } from "../../services/services";
import { useNavigate } from "react-router-dom";

function AddJobPage(): JSX.Element {
  // navigation hook
  const navigate = useNavigate();

  // // state for form
  // const [companyName, setCompanyName] = useState("");
  // const [positionName, setPositionName] = useState("");
  // const [date, setDate] = useState("");
  // const [status, setStatus] = useState("");
  // const [role, setRole] = useState("");
  // const [duties, setDuties] = useState("");
  // const [requirements, setRequirements] = useState("");
  // const [newJobDetails, setNewJobDetails] = useState({
  //   company_name: "",
  //   job_position: "",
  //   date: "",
  //   status: "",
  //   role: "",
  //   duties: "",
  //   requirements: "",
  // });

  // get values from form
  // function handleCompanyName(event: MouseEvent) {
  // function handleCompanyName(event) {
  // WORKS FINE BUT USED ANONYMOUS CALLBACK IN onChange directly
  // function handleCompanyName(event: {
  //   target: { value: SetStateAction<string> };
  // }) {
  //   console.log(event.target.value);
  //   setCompanyName(event.target.value);
  //   // setNewJobDetails(...newJobDetails, (company_name = event.target.value));
  // }

  // // handler to cancel form
  // function handleCancelForm() {
  //   // console.log(event.target);
  //   navigate("/dashboard");
  // }

  // extract to services file
  // async function postNewJob(newJob: JobDetailsInterface) {
  //   const response = await axios.post(
  //     "http://localhost:8080/dashboard",
  //     newJob
  //   );
  //   console.log(response);
  // }

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

  // // handler to form submission
  // function handleJobForm(event: React.FormEvent) {
  //   event.preventDefault();

  //   if (
  //     companyName &&
  //     positionName &&
  //     date &&
  //     role &&
  //     status &&
  //     duties &&
  //     requirements
  //   ) {
  //     const newJob: JobDetailsInterface = {
  //       company_name: companyName,
  //       job_position: positionName,
  //       date: date,
  //       role: role,
  //       status: status,
  //       duties: duties,
  //       requirements: requirements,
  //     };

  //     console.log(newJob);
  //     getnewJob(newJob);

  //     try {
  //       postNewJob(newJob);
  //     } catch (error) {
  //       console.log("Failed to Post Job");
  //     }

  //     navigate("/dashboard");
  //   }
  // }

  return (
    <>
      <Navbar />

      <section className="job-form-container">
        <h2 className="job-form__title">Add New Job Posting</h2>

        <JobForm getNewJob={getNewJob} />

        {/* <form className="job-form" onSubmit={handleJobForm}>
          <label className="job-form__label" htmlFor="companyName">
            Company Name
            <input
              className="job-form__input"
              type="text"
              name="companyName"
              id="companyName"
              value={companyName}
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
              value={positionName}
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
              value={date}
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
              value={status}
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
            value={role}
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
            value={duties}
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
            value={requirements}
            cols={30}
            rows={10}
            // onChange={handleRequirements}
            onChange={(event) => setRequirements(event.target.value)}
            required
          ></textarea>
        </form> */}

        {/* <div className="job-form-btn-container">
          <Button
            containerClassName="job-form__button--reset"
            buttonClassName="btn__job-form"
            buttonType="reset"
            buttonText="Cancel"
            buttonHandler={handleCancelForm}
          /> */}

        {/* <Button
            containerClassName="job-form__button--submit"
            buttonClassName="btn__job-form"
            buttonType="submit"
            buttonText="Add Job"
            // buttonHandler={handleJobForm}
          /> */}
        {/* </div> */}
      </section>
    </>
  );
}

export default AddJobPage;
