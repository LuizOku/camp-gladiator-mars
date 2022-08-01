import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { WorkoutI } from "../shared/interfaces/workout.interface";
import { RootState } from "../store";

export interface WorkoutState {
  list: WorkoutI[];
}

const initialState: WorkoutState = {
  list: [],
};

export const workoutSlice = createSlice({
  name: "workout",
  initialState,
  reducers: {
    setList: (state, action: PayloadAction<WorkoutI[]>) => {
      state.list = action.payload;
    },
  },
});

export const { setList } = workoutSlice.actions;

export const selectWorkoutList = (state: RootState) => state.workout.list;

export default workoutSlice.reducer;
