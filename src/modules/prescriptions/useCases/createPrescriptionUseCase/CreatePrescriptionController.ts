import { FastifyRequest, FastifyReply } from "fastify";
import { Prescription, $Enums } from '@prisma/client';

import { CreatePrescriptionUseCase } from "./CreatePrescriptionUseCase";

import { jsonFormatter } from '../../../../helpers/jsonFormatter';

interface IRquestBody {
  code: string;
  name_drug: string;
  quantity: number;
  type: string;
  instructions: string;
  status: $Enums.PrescriptionRole;
  expires_at: Date;
}

class CreatePrescriptionController {
  constructor(private createPrescriptionUseCase: CreatePrescriptionUseCase) { }

  async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { code, name_drug, quantity, type, instructions, status, expires_at } = request.body as IRquestBody;

    try {
      const data = await this.createPrescriptionUseCase.execute({ code, name_drug, quantity, type, instructions, status, expires_at: new Date(expires_at) });

      return reply.status(201).send(jsonFormatter(data));
    } catch (err) {
      return reply.status(400).send({ error: "Error!" });
    }
  }
}

export { CreatePrescriptionController };