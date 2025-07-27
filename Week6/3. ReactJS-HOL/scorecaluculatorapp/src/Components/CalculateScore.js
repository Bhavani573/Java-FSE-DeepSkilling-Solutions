import React from "react";
import "../Stylesheets/mystyle.css"; // importing CSS

function CalculateScore(props) {
  const average = (props.Total / props.Goal).toFixed(2);

  return (
    <div className="score-card">
      <h2>Student Score Calculator</h2>
      <p><strong>Name:</strong> {props.Name}</p>
      <p><strong>School:</strong> {props.School}</p>
      <p><strong>Total Marks:</strong> {props.Total}</p>
      <p><strong>Goal:</strong> {props.Goal}</p>
      <p><strong>Average Score:</strong> {average}</p>
    </div>
  );
}

export default CalculateScore;
