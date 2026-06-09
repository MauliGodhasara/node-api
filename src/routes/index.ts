import { Router } from "express";

import authRoutes from "./public/auth.route";

const router = Router();

/**
 * Public Routes
 */
router.use("/auth", authRoutes);

/**
 * Protected Routes
 */
// router.use("/users", userRoutes);
// router.use("/bookings", bookingRoutes);

/**
 * Admin Routes
 */
// router.use("/admin", adminRoutes);

export default router;
