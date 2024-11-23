import { FastifyRequest, FastifyReply } from "fastify";

import { CreatePrescriptionUseCase } from "./CreatePrescriptionUseCase";

import { jsonFormatter } from '../../../../helpers/jsonFormatter';

interface IRquestBody {
    code: string;
    name_remedy: string;
    qnts: number;
    type: string;
    instructions: string;
    status: number;
    expires_at: string;
}

class CreatePrescriptionController {
  constructor(private createPrescriptionUseCase: CreatePrescriptionUseCase) { }

  async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { code, name_remedy, qnts, instructions,type, status, expires_at } = request.body as IRquestBody;

    try {
      const data = await this.createPrescriptionUseCase.execute({  code, name_remedy, qnts, instructions,type, status, expires_at: new Date(expires_at)});

      return reply.status(201).send(jsonFormatter(data));
    } catch (err) {
      return reply.status(400).send({ error: "Error!" });
    }
  }
}

export { CreatePrescriptionController };