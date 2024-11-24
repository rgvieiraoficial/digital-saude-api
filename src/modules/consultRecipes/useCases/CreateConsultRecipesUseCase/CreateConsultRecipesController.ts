import { FastifyRequest, FastifyReply } from "fastify";

import { CreateConsultRecipesUseCase } from "./CreateConsultRecipesUseCase";

import { jsonFormatter } from '../../../../helpers/jsonFormatter';

interface IRequestBody {
  consultation_id: string,
  prescription_id: string,
}

class CreateConsultRecipesController {
  constructor(private createConsultRecipesUseCase: CreateConsultRecipesUseCase) { }

  async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const { } = request.body as IRequestBody;

    try {
      const data = await this.createConsultRecipesUseCase.execute({
        consultation_id,
        prescription_id,
      });

      return reply.status(201).send(jsonFormatter(data));
    } catch (err) {
      return reply.status(400).send({ error: "Error!" });
    }
  }
}

export { CreateConsultRecipesController };