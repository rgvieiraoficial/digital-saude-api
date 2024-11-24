import fastify, { FastifyInstance } from "fastify";
import fastifyCors from '@fastify/cors';

import { appRoutes } from './routes/httpRoutes';

const app: FastifyInstance = fastify();

app.register(fastifyCors, {
  origin: '*',
});

app.register(appRoutes);

export { app };