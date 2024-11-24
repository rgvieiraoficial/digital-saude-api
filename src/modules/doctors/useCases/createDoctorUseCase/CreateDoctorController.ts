import { FastifyRequest, FastifyReply } from "fastify";

import { CreateDoctorUseCase } from "./CreateDoctorUseCase";

import { jsonFormatter } from '../../../../helpers/jsonFormatter';

interface IRquestBody {
  registration_document: string;
  specialty: string;
  user_id: string;
}

class CreateDoctorController {
  constructor(private createDoctorUseCase: CreateDoctorUseCase) { }

  async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { registration_document, specialty, user_id } = request.body as IRquestBody;

    try {
      const data = await this.createDoctorUseCase.execute({
        registration_document,
        specialty,
        user_id
      });

      return reply.status(201).send(jsonFormatter(data));
    } catch (err) {
      return reply.status(400).send({ error: "Error!" });
    }
  }
}

export { CreateDoctorController };