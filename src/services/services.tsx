import axios from "axios";
import { JobDetailsInterface } from "../interfaces/interface";

export async function getAllJobs() {
  const response = await axios.get("http://localhost:8080/dashboard");
  console.log(response.data);
  return response.data;
}

export async function getSingleJob(id: number) {
  const response = await axios.get(`http://localhost:8080/dashboard/${id}`);
  console.log(response.data);
  return response.data;
}

export async function postNewJob(newJob: JobDetailsInterface) {
  const response = await axios.post("http://localhost:8080/dashboard", newJob);
  console.log(response);
  return response.data;
}

export async function editJobPosting(newJob: JobDetailsInterface, id: number) {
  const response = await axios.put(
    `http://localhost:8080/dashboard/${id}`,
    newJob
  );
  console.log(response.data);
  return response.data;
}
