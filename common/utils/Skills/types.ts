import { IconType } from 'react-icons';

/* ---------------------------------- Enums --------------------------------- */
export enum SkillLevel {
  Beginner,
  Intermediate,
  Advanced,
}

export const SkillLevelLength = Object.keys(SkillLevel).length;

export enum ToolType {
  Framework,
  Library,
  Environment,
}
/* ---------------------------------- Types --------------------------------- */
export type SkillList = Skill[];

/* ------------------------------- Interfaces ------------------------------- */
export interface Skill {
  id: string;
  name: string;
  icon: IconType;
  level: SkillLevel;
}

export interface Database extends Skill {}

export interface Language extends Skill {
  start: Date;
  end?: Date;
}

export interface Tool extends Language {
  type: ToolType;
  parentIds: string[];
}

/* ------------------------------- Type Guards ------------------------------ */
export function isDatabase(skill: Skill): skill is Database {
  return (skill as Language).start === undefined;
}

export function isLanguage(skill: Skill): skill is Language {
  return (skill as Language).start !== undefined && (skill as Tool).type === undefined;
}

export function isTool(skill: Skill): skill is Tool {
  return (skill as Tool).type !== undefined;
}
