import fastify, { FastifyInstance } from "fastify";
import { appRoutes } from './routes/httpRoutes';

const app: FastifyInstance = fastify();

app.register(appRoutes);

export { app };