import { useState, useEffect } from 'react'
import getJobs from './services/api';
import CardJob from './components/CardJob';
import SearchByCompany from './components/SearchByCompany';
import './App.css';

function App() {
  const [jobsList, setJobsList] = useState([]);
  const [companyFilter, setCompanyFilter] = useState('');

  const handleInputChange = (value) => {
    console.log(value)
    setCompanyFilter(value)
  };

  const filterByCompany = (jobsList) => {
    return jobsList.filter((job) => job.companyName.includes(companyFilter));
  };

  useEffect(() => {
    getJobs().then((data => setJobsList(data.data.jobs)));
  }, []);


  return (
    <div className="App">
      <SearchByCompany jobsList={jobsList} handleInputChange={handleInputChange}/>
      {/* {jobsList.map((job) => 
        <CardJob 
        key={job.jobId}
        job={job}
        />)} */}
      {filterByCompany(jobsList)
        .map((job) => 
        <CardJob 
        key={job.jobId}
        job={job}
        />)
      }
    </div>
  );
}

export default App;
