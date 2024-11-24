import { FastifyInstance, FastifyPluginOptions } from 'fastify';

import { authenticateUserController } from '../../modules/users/useCases/AuthenticateUserUseCase';
import { createUserController } from '../../modules/users/useCases/createUserUseCase';

async function usersRoutes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  fastify.post('/', (request, reply) => {
    createUserController.handle(request, reply);
  });

  fastify.post('/sessions', (request, reply) => {
    authenticateUserController.handle(request, reply);
  });
}

export { usersRoutes };