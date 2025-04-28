// validators/authValidator.js
import { body, validationResult } from "express-validator";

export const userSignupValidation = [
  body("userName")
    .notEmpty()
    .withMessage("user name is required")
    .isLength({ min: 2 })
    .withMessage("User name must be at least 2 characters long"),

  body("email").isEmail().withMessage("Please enter a valid email"),

  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export const userSigninValidation = [
  body("email").isEmail().withMessage("Please enter a valid email"),

  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
