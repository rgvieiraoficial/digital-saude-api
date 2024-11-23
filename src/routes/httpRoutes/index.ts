import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

import { usersRoutes } from './users.routes';

async function appRoutes(fastify: FastifyInstance) {
  fastify.get('/', (request: FastifyRequest, reply: FastifyReply) => {
    return reply.send('Everything is fine!');
  });

  fastify.register(usersRoutes, { prefix: '/users' });
};

export { appRoutes };