import api from "../services";

export const getWorkouts = () =>
  api.get("workouts.json").then((res) => res.data);
