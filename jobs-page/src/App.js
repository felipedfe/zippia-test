import { useState, useEffect } from 'react'
import getJobs from './services/api';
import CardJob from './components/CardJob';
import './App.css';

function App() {
  const [jobsList, setJobsList] = useState([]);

  useEffect(() => {
    getJobs().then((data => setJobsList(data.data.jobs)));
    getJobs().then((data => console.log(data.data.jobs)));
  }, []);

  return (
    <div className="App">
      {jobsList.map((job) => <CardJob job={job}/>)}
    </div>
  );
}

export default App;
