import { FastifyInstance, FastifyPluginOptions } from 'fastify';

import { createPurchaseController } from '../../modules/purchases/useCases/createPurchaseUseCase';

async function purchasesRoutes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  fastify.post('/', (request, reply) => {
    createPurchaseController.handle(request, reply);
  });
}

export { purchasesRoutes };