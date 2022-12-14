import { useState } from "react";

function SelectCompany(props) {
  const { jobsList, handleInputChange } = props;
  const [inputValue, setInputValue] = useState('All Companies');

  const handleValueChange = ({ target }) => {
    const { value } = target;
    setInputValue(value);
    handleInputChange(value);
  };

  return (
    <section className="companies-select">
      <label>
        Search by company:
        <select
          className="companies-input"
          value={inputValue}
          onChange= {handleValueChange}
        >
          <option value="">All Companies</option>
          {jobsList.map(({ companyName }, index) => (
            <option
              key={index}
              name={companyName}
            >
              {companyName}
            </option>
          ))}
        </select>
      </label>
    </section>
  )
}

export default SelectCompany;
