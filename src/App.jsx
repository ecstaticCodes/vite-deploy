import Card from './components/Card.jsx'
const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://www.google.com/favicon.ico",
    company: "Google",
    datePosted: "2 days ago",
    post: "Senior Frontend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$85/hr",
    location: "Mountain View, CA"
  },
  {
    brandLogo: "./images/meta.png",
    company: "Meta",
    datePosted: "5 days ago",
    post: "React Native Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$75/hr",
    location: "Menlo Park, CA"
  },
  {
    brandLogo: "https://www.apple.com/favicon.ico",
    company: "Apple",
    datePosted: "1 day ago",
    post: "iOS Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$95/hr",
    location: "Cupertino, CA"
  },
  {
    brandLogo: "./images/logo.png",
    company: "Amazon",
    datePosted: "3 days ago",
    post: "Cloud Solutions Architect",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$90/hr",
    location: "Seattle, WA"
  },
  {
    brandLogo: "https://www.netflix.com/favicon.ico",
    company: "Netflix",
    datePosted: "7 days ago",
    post: "Backend Engineer",
    tag1: "Remote",
    tag2: "Mid Level",
    pay: "$80/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://www.microsoft.com/favicon.ico",
    company: "Microsoft",
    datePosted: "4 days ago",
    post: "Azure DevOps Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$60/hr",
    location: "Redmond, WA"
  },
  {
    brandLogo: "https://www.nvidia.com/favicon.ico",
    company: "NVIDIA",
    datePosted: "6 days ago",
    post: "ML Infrastructure Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$105/hr",
    location: "Santa Clara, CA"
  },
  {
    brandLogo: "https://www.salesforce.com/favicon.ico",
    company: "Salesforce",
    datePosted: "10 days ago",
    post: "Full Stack Developer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$65/hr",
    location: "San Francisco, CA"
  },
  {
    brandLogo: "https://www.adobe.com/favicon.ico",
    company: "Adobe",
    datePosted: "8 days ago",
    post: "UI/UX Engineer",
    tag1: "Remote",
    tag2: "Junior Level",
    pay: "$55/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://www.spotify.com/favicon.ico",
    company: "Spotify",
    datePosted: "12 days ago",
    post: "Data Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$70/hr",
    location: "New York, NY"
  }
];
  return (
    <div className="parent">
    {jobOpenings.map((elem, idx) => {
      return <div key={idx}>
        <Card companyName={elem.company} userPay = {elem.pay} logo = {elem.brandLogo} date ={elem.datePosted} time = {elem.tag1} level={elem.tag2} loc={elem.location} userPost={elem.post}/>
      </div>
    })}
    </div>


)
}

export default App
