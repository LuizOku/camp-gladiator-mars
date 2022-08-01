import React from "react";

import { Route, Routes } from "react-router-dom";

import WorkoutDashboard from "../pages/WorkoutDashboard";
import WorkoutDetail from "../pages/WorkoutDetail";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<WorkoutDashboard />} />
        <Route path="workouts/:workoutId" element={<WorkoutDetail />} />
      </Routes>
    </>
  );
};

export default App;
