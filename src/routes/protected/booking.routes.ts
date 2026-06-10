import { Router } from "express";
import { bookingSchema } from "../../validations";
import { validate } from "../../middlewares";
import { authenticate } from "../../middlewares/auth.middleware";
import { BookingController } from "../../controllers/booking.controller";

const router = Router();

const bookingController = new BookingController();

router.post(
  "/",
  authenticate,
  validate(bookingSchema),
  bookingController.createBooking,
);

router.get("/", authenticate, bookingController.getMyBookings);
export default router;
