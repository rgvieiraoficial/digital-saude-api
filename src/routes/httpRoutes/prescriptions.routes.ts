import { FastifyInstance, FastifyPluginOptions } from 'fastify';

import { createPrescriptionController } from '../../modules/prescriptions/useCases/createPrescriptionUseCase';

async function prescriptionsRoutes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  fastify.post('/', (request, reply) => {
    createPrescriptionController.handle(request, reply);
  });
}

export { prescriptionsRoutes };