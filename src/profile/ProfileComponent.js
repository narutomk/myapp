import React from "react";
import Profile from "./Profile";

function ProfileComponent({ children }) {
  const name = "sarsour";
  const prof = "web Dev";
  const bio = "bla blaa";

  const handleName = () => {
    alert(name);
  };
  return (
    <div>
      <Profile name={name} prof={prof} bio={bio} fn={handleName} />
      <img src={children} alt="test" />
    </div>
  );
}

export default ProfileComponent;
