function CardJob ({ job }) {
  const { jobTitle, companyName, jobDescription, postedDate } = job;
  
  return (
  <section className="job-container">
    <h3 className="job-title">{jobTitle}</h3>
    <h5 className="job-companyName">{companyName}</h5>
    <div className="job-description-container">
      <p dangerouslySetInnerHTML={ { __html: jobDescription } }></p>
    </div>
    <p className="job-days-ago">{`posted ${postedDate}`}</p>
  </section>
  )
}

export default CardJob;
