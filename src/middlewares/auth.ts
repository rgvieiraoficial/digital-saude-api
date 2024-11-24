import { FastifyRequest, FastifyReply, HookHandlerDoneFunction } from "fastify";
import { verify } from "jsonwebtoken";

import auth from '../config/auth';

interface IPayload {
  sub: string;
}

interface IRequest extends FastifyRequest {
  user: {
    id: string;
  }
}

export const authMiddleware = async (request: IRequest, reply: FastifyReply, next: HookHandlerDoneFunction) => {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return reply.status(401).send({ message: 'Token must be provided!' })
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(token, auth.secret_token) as IPayload;

    request.user = {
      id: user_id
    };

    return next();
  } catch {
    return reply.status(401).send({ message: 'Invalid token!' })
  }
};