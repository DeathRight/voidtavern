import { SkillList } from '../types';
import express from './express';
import fastify from './fastify';
import nextjs from './nextjs';

export { express as Express, fastify as Fastify, nextjs as NextJS };
export default [express, fastify, nextjs] as SkillList;
