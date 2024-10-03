import React from 'react';
import './styledActivityCard.css';

const ActivityCard = ({ activity, onGenerate }) => {
  return (
    <div className="activity-card">
      <img src="/Boored_Avatar.png" alt="Activity Avatar" className="activity-avatar" />
      <button className="generate-btn" onClick={onGenerate}>Generar</button>
      {activity && (
        <div className="activity-info">
          <h2>Activitat:</h2>
          <p>{activity.activity}</p>
        </div>
      )}
    </div>
  );
};

export default ActivityCard;
