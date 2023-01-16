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

  // Esse botão ativa e desativa o filtro de Vagas Recentes. Ele funciona mesmo
  // com alguma empresa selecionada no seletor (componente SelectCompany)
  const toggleButton = () => {
    setRecentJobs((prevState) => !prevState)
    recentJobs ? setButtonText("Recent Jobs") : setButtonText("All Jobs")
  };

  const filterDate = (list) => {
    const date = new Date();
    date.setDate(date.getDate() - 7)
    const dateString = date.toISOString()

    return list.filter((job)=> job.OBJpostingDate > dateString)
  };

  // A lista é sempre filtrada em relação ao nome da empresa. Quando a opcão do
  // select do componente SelectCompany é "All Companies", o valor a ser filtrado
  // no includes abaixo é vazio("")
  const filter = () => {
    const filteredList = jobsList.filter((job) => job.companyName.includes(selectedCompany));
    if (recentJobs) {
      return filterDate(filteredList);
    }
    return filteredList;
  };

  // Aqui pegamos as resposta da API e guardamos no estado do componente
  useEffect(() => {
    getJobs().then((data => setJobsList(data.data.jobs)));
    console.log(jobsList)
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
        {filter().map((job) => <CardJob key={job.jobId} job={job} />)}
      </section>
    </main>
  );
}

export default App;
