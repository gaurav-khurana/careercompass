import axios from "axios";
import {
  JobDetailsInterface,
  userDetailsInterface,
} from "../interfaces/interface";

const token = localStorage.getItem("token");

export async function login(loginDetails: userDetailsInterface) {
  const response = await axios.post(
    "http://localhost:8080/login",
    loginDetails
  );
  console.log(response.data.token);
  return response.data.token;
}

export async function getAllJobs() {
  const response = await axios.get("http://localhost:8080/dashboard", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(response.data);
  return response.data;
}

export async function getSingleJob(id: number) {
  const response = await axios.get(`http://localhost:8080/dashboard/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  console.log(response.data);
  return response.data;
}

export async function postNewJob(newJob: JobDetailsInterface) {
  const response = await axios.post("http://localhost:8080/dashboard", newJob, {
    headers: { Authorization: `Bearer ${token}` },
  });
  console.log(response);
  return response.data;
}

export async function editJobPosting(newJob: JobDetailsInterface, id: number) {
  const response = await axios.put(
    `http://localhost:8080/dashboard/${id}`,
    newJob,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  console.log(response.data);
  return response.data;
}
