import Joi from "joi";

export const createUserSchema = Joi.object({
  ComponyName: Joi.string().min(3).max(4).required().messages({
    "string.min": "ComponyName must be at least 3 characters long",
  }),
  Username: Joi.string().required().messages({
    "string.email": "Username email format",
  }),
  Password: Joi.string().required().messages({
    "string.min": "Password must be at least 6 characters long",
  }),
});
