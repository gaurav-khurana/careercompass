import "./JobCard.scss";
import Button from "../Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { JobCardInterface } from "../../interfaces/interface";
import EditIcon from "../../assets/icons/edit-circle.svg";

function JobCard({
  id,
  company_name,
  job_position,
  date,
  status,
}: JobCardInterface): JSX.Element {
  const navigate = useNavigate();

  function handleJobDetails(event: MouseEvent) {
    console.log(event.target);
    navigate(`/dashboard/${id}`);
  }

  return (
    <>
      <div className="jobCard-container">
        <div className="jobCard__company-container">
          <h2 className="jobCard__company">{company_name}</h2>
          <Link to={`/editjob/${id}`}>
            <img className="jobCard__edit" src={EditIcon} alt="Edit icon" />
          </Link>
        </div>

        <h2 className="jobCard__position">{job_position}</h2>

        <h3 className="jobCard__date">{date}</h3>

        {status.toLowerCase() == "applied" ? (
          <h3 className="jobCard__status jobCard__status--applied">{status}</h3>
        ) : (
          <h3 className="jobCard__status jobCard__status--rejected">
            {status}
          </h3>
        )}

        <Button
          containerClassName="btn__details-container"
          buttonClassName="btn__details"
          buttonType="button"
          buttonText="Details"
          buttonHandler={handleJobDetails}
        />
      </div>
    </>
  );
}

export default JobCard;
