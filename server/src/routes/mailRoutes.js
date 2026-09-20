import express from 'express';
import { handleContact, handleQuote } from '../controllers/mailController.js';

const router = express.Router();

// Public mail handling routes
router.post('/contact', handleContact);
router.post('/quote', handleQuote);

export default router;
