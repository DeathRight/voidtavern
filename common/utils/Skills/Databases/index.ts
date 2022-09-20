import MySQL from './mysql';
import PostgreSQL from './postgresql';
import MongoDB from './mongodb';
import Firestore from './firestore';
import { SkillList } from '../types';

export { MySQL, PostgreSQL, MongoDB, Firestore };
export default [MySQL, PostgreSQL, MongoDB, Firestore] as SkillList;
