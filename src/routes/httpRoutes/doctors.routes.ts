import { FastifyInstance, FastifyPluginOptions } from 'fastify';

import { createDoctorController } from '../../modules/doctors/useCases/createDoctorUseCase';

async function doctorsRoutes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  fastify.post('/', (request, reply) => {
    createDoctorController.handle(request, reply);
  });
}

export { doctorsRoutes };