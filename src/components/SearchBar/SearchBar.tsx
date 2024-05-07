import "./SearchBar.scss";
import SearchIcon from "../../assets/icons/search.svg";
import { useState } from "react";
import { getAllJobs } from "../../services/services";
import { JobDetailsInterface } from "../../interfaces/interface";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  // state fr searchbar
  const [searchResult, setSearchResult] = useState("");

  // navigation hook
  const navigate = useNavigate();

  async function showSearchResult(event: React.FormEvent) {
    const allJobsData: JobDetailsInterface[] = await getAllJobs();
    console.log(allJobsData);
    const filteredResult = allJobsData.find(
      (job) => job.company_name.toLowerCase() == searchResult.toLowerCase()
    );
    console.log(filteredResult);

    if (!filteredResult) {
      alert("Job posting not found");
      return;
    }

    navigate(`/dashboard/${filteredResult?.id}`);
  }

  return (
    <>
      <div className="searchBar">
        <img
          className="searchBar__icon"
          src={SearchIcon}
          alt="Search Icon image"
        />

        <input
          className="searchBar__input"
          type="text"
          name="search"
          id="search"
          value={searchResult}
          onChange={(event) => setSearchResult(event?.target.value)}
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
    </>
  );
}

export default SearchBar;
