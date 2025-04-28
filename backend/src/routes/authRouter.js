import express from 'express';
import { userSignup } from '../controllers/authController.js';
import { userSignupValidation } from '../middlewares/validator.js';

export const authRouter = express.Router();

authRouter.route('/signup').get(userSignupValidation, userSignup);







