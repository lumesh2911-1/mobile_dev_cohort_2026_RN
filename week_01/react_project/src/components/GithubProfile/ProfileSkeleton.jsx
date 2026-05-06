import React from "react";
import "./GithubProfile.css";

const ProfileSkeleton = () => {
  return (
    <div className="profile-card loader-card">
      <div className="skeleton-avatar" />
      <div className="skeleton-content">
        <div className="skeleton-line title" />
        <div className="skeleton-line bio" />
        <div className="skeleton-line stats" />
      </div>
    </div>
  );
};

export default ProfileSkeleton;
