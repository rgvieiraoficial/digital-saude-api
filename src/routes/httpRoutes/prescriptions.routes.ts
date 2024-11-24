import { FastifyInstance, FastifyPluginOptions } from 'fastify';

import { authMiddleware } from '../../middlewares/auth';

import { createPrescriptionController } from '../../modules/prescriptions/useCases/createPrescriptionUseCase';
import { listPrescriptionsController } from '../../modules/prescriptions/useCases/listPrescriptionsUseCase';

async function prescriptionsRoutes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  7
  fastify.get('/', {
    preHandler: authMiddleware
  }, (request, reply) => {
    listPrescriptionsController.handle(request, reply);
  });

  fastify.post('/', {
    preHandler: authMiddleware
  }, (request, reply) => {
    createPrescriptionController.handle(request, reply);
  });
}

export { prescriptionsRoutes };