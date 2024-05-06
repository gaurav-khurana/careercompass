import "./SearchBar.scss";
import SearchIcon from "../../assets/icons/search.svg";
import { useState } from "react";
import { getAllJobs } from "../../services/services";
import { JobDetailsInterface } from "../../interfaces/interface";
import JobCard from "../JobCard/JobCard";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  // state fr searchbar
  const [searchResult, setSearchResult] = useState("");
  // const [foundJob, setFoundJob] = useState<JobDetailsInterface>();

  // get data from input field
  // function handleSearch(event) {
  //   console.log(event.target.value);
  //   setSearchResult(event.target.value);
  // }

  // get all data & filter result from that
  // async function loadAllJobs() {
  //   const allJobsData = await getAllJobs();
  //   console.log(allJobsData);

  //   return allJobsData;
  // }
  const navigate = useNavigate();

  async function showSearchResult(event: React.FormEvent) {
    console.log("i run");
    console.log(event);
    // const allJobsData = loadAllJobs();
    // console.log(allJobsData);
    const allJobsData: JobDetailsInterface[] = await getAllJobs();
    console.log(allJobsData);
    const filteredResult = allJobsData.find(
      (job) => job.company_name.toLowerCase() == searchResult.toLowerCase()
    );
    console.log(filteredResult);
    // setFoundJob(filteredResult);
    if (!filteredResult) {
      alert("Job posting not found");
      return;
    }
    navigate(`/dashboard/${filteredResult?.id}`);
    // return allJobsData;
    // return (
    //   foundJob && (
    //     <JobCard
    //       id={foundJob?.id}
    //       company_name={foundJob?.company_name}
    //       job_position={foundJob?.job_position}
    //       date={foundJob?.date}
    //       status={foundJob?.status}
    //     />
    //   )
    // );
  }

  return (
    <>
      {/* <div className="searchBar-container"> */}
      <div className="searchBar">
        <img
          className="searchBar__icon"
          src={SearchIcon}
          alt="Search Icon image"
        />
        {/* <h3 className="searchBar__text">Search</h3> */}
        <input
          className="searchBar__input"
          type="text"
          name="search"
          id="search"
          value={searchResult}
          onChange={(event) => setSearchResult(event?.target.value)}
          // onChange={handleSearch}
          placeholder="Search by company name"
        />
      </div>
      <button
        type="submit"
        className="btn btn__search"
        onClick={showSearchResult}
        onSubmit={showSearchResult}
      >
        Search
      </button>
      {/* </div> */}
    </>
  );
}

export default SearchBar;
