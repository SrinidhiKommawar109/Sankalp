import React from 'react';
import './Camp.css';
import { useNavigate } from 'react-router-dom';

const jobData = [
  {
    ngoName: 'Helping Hands',
    jobRole: 'Volunteer Coordinator',
    criteria: 'Excellent communication skills, prior volunteer experience preferred',
    location: 'Mumbai, India',
    image: 'https://th.bing.com/th/id/R.6a74a45263a71ebe8451dfccced125d3?rik=NhhMi6INJDo%2bvg&riu=http%3a%2f%2fchurchofgodlittleton.com%2fwp-content%2fuploads%2f2013%2f12%2fhelpinghands1.png&ehk=B3tfV9u3FxCyWvAZ6L8p4ZQ9dc6oSdsWYVrlcdsvi8I%3d&risl=&pid=ImgRaw&r=0',
    
    //  // Replace with actual image URLs
  },
  {
    ngoName: 'Green Earth Initiative',
    jobRole: 'Environment Analyst',
    criteria: 'Degree in Environmental Science, passion for sustainability',
    location: 'Bangalore, India',
    image: 'https://th.bing.com/th/id/R.a687abb4bbb03443bc838fb67583b165?rik=%2fld2uAPTFIlcvw&riu=http%3a%2f%2fwww.green-rootz.com%2fwp-content%2fuploads%2f2015%2f09%2fGlobal_Reach.png&ehk=a8BxcOqh7zCY7cLFKpELUhWY1eZz%2f4qI2JqqnJU0BQw%3d&risl=&pid=ImgRaw&r=0',
  },
  {
    ngoName: 'Care for All',
    jobRole: 'Healthcare Assistant',
    criteria: 'Background in healthcare, willingness to travel',
    location: 'Delhi, India',
    image:'https://tse1.mm.bing.net/th/id/OIP.nLNbCqsIsjAGfzVN7TaZEAHaE8?rs=1&pid=ImgDetMain'
    },
  {
    ngoName: 'Education First',
    jobRole: 'Teacher',
    criteria: 'Degree in Education or related field, teaching experience preferred',
    location: 'Hyderabad, India',
    image: 'https://www.bing.com/images/search?view=detailV2&ccid=VsKHuQpo&id=45BB75076C06444964B52D702342154C7B74D249&thid=OIP.VsKHuQpoLLkBIKNRqQU-BAHaFc&mediaurl=https%3a%2f%2fc8.alamy.com%2fcomp%2f2GDAK9D%2ftext-caption-presenting-liberal-education-business-showcase-education-suitable-for-the-cultivation-of-free-human-being-nature-theme-presentation-2GDAK9D.jpg&exph=957&expw=1300&q=education+images+suitable+for+html&simid=607995339490292149&FORM=IRPRST&ck=AC88487822A050BA95AEBF6F0D7C1CFF&selectedIndex=15&itb=0',
  },
];

const Jobs = () => {
  const navigate = useNavigate(); // Move useNavigate inside the component

  const handleCampaignNavigation = () => {
    navigate('/Camp'); // Navigate to the campaign page
  };

  return (
    <div className="jobs-container">
      <h1>Available Job Opportunities</h1>
      <div className="cards">
        {jobData.map((job, index) => (
          <div className="card" key={index}>
            <img src={job.image} alt={job.ngoName} />
            <div className="card-content">
              <h2>{job.ngoName}</h2>
              <p><strong>Job Role:</strong> {job.jobRole}</p>
              <p><strong>Criteria:</strong> {job.criteria}</p>
              <p><strong>Location:</strong> {job.location}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="unskilled-section">
        <h2>Are you unskilled?</h2>
        <button className="campaign-button" onClick={handleCampaignNavigation}>
          Explore Campaigns to Learn and Earn
        </button>
      </div>
    </div>
  );
};

export default Jobs;
