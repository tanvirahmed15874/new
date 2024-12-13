import { body } from 'express-validator';

export const validateRegistration = [
  body('email').isEmail(),
  body('password').isLength({ min: 6 }),
  body('name').notEmpty()
];

export const validateLogin = [
  body('email').isEmail(),
  body('password').notEmpty()
];

export const validateContact = [
  body('name').notEmpty(),
  body('email').isEmail(),
  body('message').notEmpty()
];