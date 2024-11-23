import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

import { usersRoutes } from './users.routes';
import { prescriptionsRoutes } from './prescriptions.routes';

async function appRoutes(fastify: FastifyInstance) {
  fastify.get('/', (request: FastifyRequest, reply: FastifyReply) => {
    return reply.send('Everything is fine!');
  });

  fastify.register(usersRoutes, { prefix: '/users' });
  fastify.register(prescriptionsRoutes, { prefix: '/prescriptions' });
};

export { appRoutes };