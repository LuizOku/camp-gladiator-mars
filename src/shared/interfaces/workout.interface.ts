export type LevelTagT = "beginner" | "intermediate" | "advanced";

export type ImpactTagT = "low" | "high";

export interface WorkoutI {
  description: string;
  thumbnail: string;
  levelTag: LevelTagT;
  media: string;
  title: string;
  impactTag: ImpactTagT;
  id: string;
  trainerId: string;
  duration: number;
}
