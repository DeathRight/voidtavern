import React from 'react';

/* ---------------------------------- Enums --------------------------------- */
export enum SkillLevel {
  Beginner,
  Intermediate,
  Advanced,
}

export enum ToolType {
  Framework,
  Library,
  Environment,
}
/* ---------------------------------- Types --------------------------------- */
export type SkillList = Skill[];

/* ------------------------------- Interfaces ------------------------------- */
interface Skill {
  id: string;
  name: string;
  icon: React.FC;
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
