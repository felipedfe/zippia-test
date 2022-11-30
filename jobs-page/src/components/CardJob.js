function CardJob (props) {
  const { job } = props;
  
  return (
  <section className="job-container">
    <h3 className="job-title">{job.jobTitle}</h3>
    <h5 className="job-companyName">{job.companyName}</h5>
    <div className="job-description-container">
      <p dangerouslySetInnerHTML={ { __html: job.jobDescription } }></p>
    </div>
    <p className="job-days-ago">{`posted ${job.postedDate}`}</p>
  </section>
  )
}

export default CardJob;