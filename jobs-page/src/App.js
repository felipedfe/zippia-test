import { useState, useEffect } from 'react'
import getJobs from './services/api';
import './App.css';

function App() {
  const [jobsList, setJobsList] = useState([]);

  useEffect(() => {
    getJobs().then((data => setJobsList(data.data.jobs)));
    getJobs().then((data => console.log(data.data.jobs)));
  }, []);

  return (
    <div className="App">
      {jobsList.map((job) => (
        <section className="job-container">
          <h3 className="job-title">{job.jobTitle}</h3>
          <h5 className="job-companyName">{job.companyName}</h5>
          <div className="job-description-container">
            <p dangerouslySetInnerHTML={ { __html: job.jobDescription } }></p>
          </div>
          <br></br>
        </section>
      ))}
    </div>
  );
}

export default App;
