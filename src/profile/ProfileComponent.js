import React, { useState } from "react";
import Profile from "./Profile";

function ProfileComponent({ children }) {
  const [name, setName] = useState("sarsour");
  const [prof, setProf] = useState("web Dev");
  const [bio, setBio] = useState("bla blaa");

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
