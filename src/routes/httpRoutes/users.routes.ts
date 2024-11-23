import { FastifyInstance, FastifyPluginOptions } from 'fastify';

import { createUserController } from '../../modules/users/useCases/createUserUseCase';

async function usersRoutes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  fastify.post('/', (request, reply) => {
    createUserController.handle(request, reply);
  });
}

export { usersRoutes };