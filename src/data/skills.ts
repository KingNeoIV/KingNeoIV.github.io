export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript", "C#", "Python", "C++", "SQL"]
  },
  {
    category: "Frontend & UI",
    skills: ["React", "Tailwind CSS", "HTML5", "PostCSS", "Responsive Design"]
  },
  {
    category: "Backend & Tools",
    skills: ["Node.js", "Vite", "Git/GitHub", "Inno Setup", "Postman"]
  }
];