import React from 'react';
import './OurTeam.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const teamData = [
  {
    id: 1,
    name: 'Vin Diesel',
    role: 'Senior App Developer',
    image: 'https://1.bp.blogspot.com/-8c7QTLoyajs/YLjr2V6KYRI/AAAAAAAACO8/ViVPQpLWVM0jGh3RZhh-Ha1-1r3Oj62wQCNcBGAsYHQ/s16000/team-1-3.jpg',
  },
  {
    id: 2,
    name: 'David Corner',
    role: 'Front End Developer',
    image: 'https://1.bp.blogspot.com/-vhmWFWO2r8U/YLjr2A57toI/AAAAAAAACO4/0GBonlEZPmAiQW4uvkCTm5LvlJVd_-l_wCNcBGAsYHQ/s16000/team-1-2.jpg',
  },
  {
    id: 3,
    name: 'Tom Cruise',
    role: 'Full Stack Developer',
    image: 'https://1.bp.blogspot.com/-AO5j2Y9lzME/YLjr3mxiqAI/AAAAAAAACPE/KAaYYTtQTrgBE3diTbxGoc4U4fCGx-C2gCNcBGAsYHQ/s16000/team-1-4.jpg',
  },
  {
    id: 4,
    name: 'Tom Cruise',
    role: 'Full Stack Developer',
    image: 'https://1.bp.blogspot.com/-AO5j2Y9lzME/YLjr3mxiqAI/AAAAAAAACPE/KAaYYTtQTrgBE3diTbxGoc4U4fCGx-C2gCNcBGAsYHQ/s16000/team-1-4.jpg',
  },
];

const OurTeam = () => {
  return (
    <div>
    <div className="main">
      {teamData.map((member) => (
        <div key={member.id} className="profile-card">
          <div className="img">
            <img src={member.image} alt={member.name} />
          </div>
          <div className="caption">
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default OurTeam;
