import { useState, useEffect } from 'react'
import getJobs from './services/api';
import CardJob from './components/CardJob';
import SelectCompany from './components/SelectCompany';
import './App.css';

function App() {
  const [jobsList, setJobsList] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState('');
  const [recentJobs, setRecentJobs] = useState(false);
  const [buttonText, setButtonText] = useState("Recent Jobs")

  const handleInputChange = (value) => {
    console.log(value)
    setSelectedCompany(value)
  };

  const toggleButton = () => {
    setRecentJobs((prevState) => !prevState)
    recentJobs ? setButtonText("Recent Jobs") : setButtonText("All Jobs")
  };

  const filterDate = (list) => {
    return list.filter((job) => {
      return (job.postedDate.includes("d")
        && parseInt(job.postedDate.split("d")[0]) <= 7) ||
        job.postedDate.includes("h")
    })
  };

  const filter = () => {
    const filteredList = jobsList.filter((job) => job.companyName.includes(selectedCompany));
    if (recentJobs) {
      return filterDate(filteredList);
    }
    return filteredList;
  };

  useEffect(() => {
    getJobs().then((data => setJobsList(data.data.jobs)));
  }, []);

  return (
    <main>
      <nav>
        <SelectCompany jobsList={jobsList} handleInputChange={handleInputChange} />
        <button
          className="recent-jobs-btn"
          type="button"
          onClick={toggleButton}
        >
          {buttonText}
        </button>
      </nav>
      <section className="jobs-list">
      {filter()
        .map((job) =>
          <CardJob
            key={job.jobId}
            job={job}
          />)}
      </section>
    </main>
  );
}

export default App;
