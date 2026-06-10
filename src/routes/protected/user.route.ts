import { Router } from "express";
import { UserController } from "../../controllers";
import { authenticate } from "../../middlewares/auth.middleware";

const router = Router();
const userController = new UserController();

router.get("/me", authenticate, userController.getMe);

export default router;
