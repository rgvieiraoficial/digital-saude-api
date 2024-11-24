import { FastifyInstance, FastifyPluginOptions } from 'fastify';

import { authMiddleware } from '../../middlewares/auth';

import { createConsultationController } from '../../modules/consultations/useCases/createConsultationUseCase';

async function consultationsRoutes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  fastify.post('/', {
    preHandler: authMiddleware
  }, (request, reply) => {
    createConsultationController.handle(request, reply);
  });
}

export { consultationsRoutes };