import { Router } from "express";
import { UserController } from "../../controllers";
import { validate } from "../../middlewares";
import { registerSchema, loginSchema } from "../../validations/auth.validation";

const router = Router();

const userController = new UserController();

router.post("/register", validate(registerSchema), userController.register);

router.post("/login", validate(loginSchema), userController.login);

export default router;
