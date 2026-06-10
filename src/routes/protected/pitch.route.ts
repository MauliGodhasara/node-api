import { Router } from "express";
import { PitchController } from "../../controllers";

const router = Router();

const pitchController = new PitchController();

router.get("/", pitchController.getPitches);
router.get("/:id", pitchController.getPitchById);

export default router;
