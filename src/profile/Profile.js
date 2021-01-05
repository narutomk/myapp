import React from "react";

function Profile(props) {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h1>Profession: {props.prof}</h1>
      <h1>Bio: {props.bio}</h1>
      <button onClick={props.fn}>check</button>
    </div>
  );
}

export default Profile;
