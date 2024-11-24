import { FastifyRequest, FastifyReply } from "fastify";


import { CreateConsultationUseCase } from "./CreateConsultationUseCase";

import { jsonFormatter } from '../../../../helpers/jsonFormatter';

interface IRquestBody {
  Client: string,
  Doctor: string,
  status: num,
  id_client: string,
  Consult_Recipes: string
}

class CreateConsultationController {
  constructor(private createConsultationUseCase: CreateConsultationUseCase) { }

  async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { Client, Doctor, status, id_client, Consult_Recipes, } = request.body as IRquestBody;

    try {
      const data = await this.createConsultationUseCase.execute({ Client, Doctor, status, id_client, Consult_Recipes, });

      return reply.status(201).send(jsonFormatter(data));
    } catch (err) {
      return reply.status(400).send({ error: "Error!" });
    }
  }
}

export { CreateConsultationController };