import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

async function appRoutes(fastify: FastifyInstance) {
  fastify.get('/', (request: FastifyRequest, reply: FastifyReply) => {
    return reply.send('Everything is fine!');
  });
};

export { appRoutes };