import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

import { usersRoutes } from './users.routes';
import { prescriptionsRoutes } from './prescriptions.routes';
import { doctorsRoutes } from './doctors.routes';
import { purchasesRoutes } from './purchases.routes';
import { consultationsRoutes } from './consultations.routes';

async function appRoutes(fastify: FastifyInstance) {
  fastify.get('/', (request: FastifyRequest, reply: FastifyReply) => {
    return reply.send('Everything is fine!');
  });

  fastify.register(usersRoutes, { prefix: '/users' });
  fastify.register(prescriptionsRoutes, { prefix: '/prescriptions' });
  fastify.register(doctorsRoutes, { prefix: '/doctors' });
  fastify.register(purchasesRoutes, { prefix: '/purchases' });
  fastify.register(consultationsRoutes, { prefix: '/consultations' });
};

export { appRoutes };