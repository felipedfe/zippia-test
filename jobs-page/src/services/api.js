import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://www.zippia.com/api/jobs/',
});

const getJobs = async () => instance
  .post('/login', {
    "companySkills": true,
    "dismissedListingHashes": [],
    "fetchJobDesc": true,
    "jobTitle": "Business Analyst",
    "locations": [],
    "numJobs": 20,
    "previousListingHashes": []
    }).catch((error) => error);

export default getJobs;