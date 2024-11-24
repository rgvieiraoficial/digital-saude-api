import { PurchasesRepository } from '../../repositories/implementations/purchasesRepository';
import { CreatePurchaseUseCase } from './CreatePurchaseUseCase';
import { CreatePurchaseController } from './CreatePurchaseController';

const purchasesRepository = new PurchasesRepository();
const createPurchaseUseCase = new CreatePurchaseUseCase(purchasesRepository);
const createPurchaseController = new CreatePurchaseController(createPurchaseUseCase);

export { createPurchaseController };