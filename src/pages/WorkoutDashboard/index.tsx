import React, { useEffect } from "react";
import { getWorkouts } from "../../api/workout";

const WorkoutDashboard: React.FC = () => {
  useEffect(() => {
    const fetchWorkouts = async () => {
      const res = await getWorkouts();
      console.log(res);
    };
    fetchWorkouts();
  }, []);
  return <div>WorkoutDashboard</div>;
};

export default WorkoutDashboard;
