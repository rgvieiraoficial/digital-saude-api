import fastify, { FastifyInstance } from "fastify";
import fastifyCors from '@fastify/cors';

import { authMiddleware } from './middlewares/auth';
import { appRoutes } from './routes/httpRoutes';

const app: FastifyInstance = fastify();

app.register(fastifyCors, {
  origin: '*',
});

app.decorate(
  'authenticate',
  authMiddleware
)

app.register(appRoutes);

export { app };