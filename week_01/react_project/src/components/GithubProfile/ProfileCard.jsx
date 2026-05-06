import React from "react";
import "./GithubProfile.css";

const ProfileCard = ({ profileData }) => {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <img className="avatar" src={profileData.avatar_url} alt={profileData.login} />
        <div className="profile-title">
          <h2>{profileData.name || profileData.login}</h2>
          <a className="username-link" href={profileData.html_url} target="_blank" rel="noopener noreferrer">
            @{profileData.login}
          </a>
        </div>
        <a className="action-button" href={profileData.html_url} target="_blank" rel="noopener noreferrer">
          Follow
        </a>
      </div>
      
      {profileData.bio && <p className="bio">{profileData.bio}</p>}
      
      <div className="stats-container">
        <div className="stat-item">
          <span className="stat-value">{profileData.public_repos}</span>
          <span className="stat-label">Repositories</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{profileData.followers}</span>
          <span className="stat-label">Followers</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{profileData.following}</span>
          <span className="stat-label">Following</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
