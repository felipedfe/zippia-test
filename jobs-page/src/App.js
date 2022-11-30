import { useState, useEffect } from 'react'
import getJobs from './services/api';
import './App.css';

function App() {
  const [jobsList, setJobsList] = useState([]);

  useEffect(() => {
    // getJobs().then((data => setJobsList(data)));
    getJobs().then((data => console.log(data)));
  }, []);

  return (
    <div className="App">
      <h1>Jobs List</h1>
    </div>
  );
}

export default App;
