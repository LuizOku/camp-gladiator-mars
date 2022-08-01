import React from "react";

import { Route, Routes } from "react-router-dom";
import { Footer } from "@campgladiator/cgui-core.organisms.footer";

import { Header } from "../components";
import WorkoutDashboard from "../pages/WorkoutDashboard";
import WorkoutDetail from "../pages/WorkoutDetail";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<WorkoutDashboard />} />
        <Route path="workouts/:workoutId" element={<WorkoutDetail />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
