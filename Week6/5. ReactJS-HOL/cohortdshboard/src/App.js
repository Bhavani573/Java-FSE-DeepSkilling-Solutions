import React from "react";
import CohortDetails from "./CohortDetails";

function App() {
  const cohorts = [
    { name: "GenC Java", status: "ongoing", startDate: "01-07-2025", endDate: "30-09-2025" },
    { name: "GenC AI", status: "completed", startDate: "01-04-2025", endDate: "30-06-2025" }
  ];

  return (
    <div className="App">
      <h1>Cohort Dashboard</h1>
      {cohorts.map((c, index) => (
        <CohortDetails key={index} cohort={c} />
      ))}
    </div>
  );
}

export default App;
