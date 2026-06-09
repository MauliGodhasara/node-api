import { Request, Response } from "express";
import { UserService } from "../services";
import { asyncHandler, ApiResponse } from "../utils";

export class UserController {
  private userService = new UserService();

  register = asyncHandler(async (req: Request, res: Response) => {
    const user = await this.userService.register(req.body);

    return res
      .status(201)
      .json(new ApiResponse(true, 200, "User registered successfully", user));
  });

  login = asyncHandler(async (req: Request, res: Response) => {
    const result = await this.userService.login(req.body);

    return res
      .status(200)
      .json(new ApiResponse(true, 200, "Login successful", result));
  });
}
