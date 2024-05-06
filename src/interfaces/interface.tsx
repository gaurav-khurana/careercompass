export interface JobCardInterface {
  id: number;
  company_name: string;
  job_position: string;
  date: string;
  status: string;
}
export interface JobDetailsInterface {
  id?: number;
  company_name: string;
  job_position: string;
  date: string;
  status: string;
  role: string;
  duties: string;
  requirements: string;
}

export interface getNewJobProps {
  getNewJob?: JobDetailsInterface;
  jobDetails?: JobDetailsInterface;
}
