import React from 'react';
import './OurTeam.css';

const Team = () => {
  return (
    <div className="team">
      <h2>Our Team</h2>
      <div className="team-members">
        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Team Member 1" />
          <h3>John Doe</h3>
          <p>Position</p>
        </div>
        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Team Member 2" />
          <h3>Jane Smith</h3>
          <p>Position</p>
        </div>
        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Team Member 3" />
          <h3>Bob Johnson</h3>
          <p>Position</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
