function CardJob (props) {
  const { job } = props;
  const { postedDate } = job;
  // const day = postedDate.split('d')
  // console.log(day)
  // if (postedDate.includes("d")) {
  //   const daysAgo = postedDate.split('d');
  //   console.log(daysAgo);
  // };
  
  return (
  <section className="job-container">
    <h3 className="job-title">{job.jobTitle}</h3>
    <h5 className="job-companyName">{job.companyName}</h5>
    <div className="job-description-container">
      <p dangerouslySetInnerHTML={ { __html: job.jobDescription } }></p>
    </div>
    {/* <p className="job-days-ago">{new Date(job.postingDate).getUTCDate()}</p> */}
    <p className="job-days-ago">{`posted ${job.postedDate}`}</p>
  </section>
  )
}

export default CardJob;