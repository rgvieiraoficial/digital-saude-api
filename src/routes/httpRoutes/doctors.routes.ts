import { FastifyInstance, FastifyPluginOptions } from 'fastify';

import { authMiddleware } from '../../middlewares/auth';

import { createDoctorController } from '../../modules/doctors/useCases/createDoctorUseCase';

async function doctorsRoutes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  fastify.post('/', {
    preHandler: authMiddleware
  }, (request, reply) => {
    createDoctorController.handle(request, reply);
  });
}

export { doctorsRoutes };