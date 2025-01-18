import { NextFunction, Request, Response } from "express";

export const TokenVerification = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.header("Authorization");
    if (!token || !token.startsWith("Bearer")) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    next();
  } catch (error) {
    next(error);
  }
};
