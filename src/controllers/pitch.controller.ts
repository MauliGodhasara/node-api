import { Request, Response } from "express";
import { asyncHandler, ApiResponse } from "../utils";
import { PitchService } from "../services";

export class PitchController {
  private pitchService = new PitchService();

  getPitches = asyncHandler(async (req: Request, res: Response) => {
    const pitches = await this.pitchService.getAllPitches();

    return res
      .status(200)
      .json(
        new ApiResponse(true, 200, "Pitches fetched successfully", pitches),
      );
  });
}
