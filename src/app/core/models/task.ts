export interface Task {
  id: number;
  title: string;
  problem: string;
  difficulty: TaskDifficulty;
  category: TaskCategory;
  styleSchool: string;
  route: string;
  completed: boolean;
}
export type TaskDifficulty = 'above-average' | 'advanced' | 'near-senior';
export type TaskCategory =
  | 'Layout & Structure'
  | 'Data Display'
  | 'State & Feedback'
  | 'Forms & Input'
  | 'Navigation'
  | 'Overlays & Layering'
  | 'Responsive & Adaptive'
  | 'Theming & Personalization'
  | 'Motion & Micro-interactions'
  | 'Accessibility & Inclusive Design';
