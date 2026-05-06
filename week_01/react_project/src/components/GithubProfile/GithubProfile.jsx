import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import ProfileSkeleton from "./ProfileSkeleton";
import "./GithubProfile.css";

const GithubProfile = ({ username = "lumesh2911-1" }) => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProfileData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        setProfileData(data);
      } catch (err) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };
    getProfileData();
  }, [username]);

  if (loading) {
    return <ProfileSkeleton />;
  }

  if (error) {
    return (
      <div className="profile-card error-card">
        <p>Failed to load profile: {error}</p>
      </div>
    );
  }

  return <ProfileCard profileData={profileData} />;
};

export default GithubProfile;
