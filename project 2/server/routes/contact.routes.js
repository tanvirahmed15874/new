import express from 'express';
import { createContact } from '../controllers/contact.controller.js';
import { validateContact } from '../middleware/validation.js';

const router = express.Router();

router.post('/', validateContact, createContact);

export default router;