import express from 'express';
import { handleContact, handleQuote, handleEnrollment } from '../controllers/mailController.js';

const router = express.Router();

// Public mail handling routes
router.post('/contact', handleContact);
router.post('/quote', handleQuote);
router.post('/enroll', handleEnrollment);

export default router;
