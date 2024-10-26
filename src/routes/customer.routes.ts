import { Router } from 'express';
import * as customerController from '../controllers/customer.controller';

// Singleton
const router = Router();

router.get('/', customerController.getAllCustomers);
router.post('/', customerController.createCustomer);

export default router;