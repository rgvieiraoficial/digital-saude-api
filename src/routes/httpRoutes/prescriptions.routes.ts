import { FastifyInstance, FastifyPluginOptions } from 'fastify';

import { authMiddleware } from '../../middlewares/auth';

import { createPrescriptionController } from '../../modules/prescriptions/useCases/createPrescriptionUseCase';

async function prescriptionsRoutes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  fastify.post('/', {
    preHandler: authMiddleware
  }, (request, reply) => {
    createPrescriptionController.handle(request, reply);
  });
}

export { prescriptionsRoutes };