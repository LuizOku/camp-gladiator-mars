import { AxiosResponse } from "axios";

import { WorkoutI } from "./../shared/interfaces/workout.interface";
import api from "../services";

export const getWorkouts: () => Promise<WorkoutI[]> = () =>
  api
    .get<WorkoutI[]>("/workouts.json")
    .then((response: AxiosResponse) => response.data);
