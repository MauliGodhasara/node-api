import { SOCKET_EVENTS } from "./events";
import { getIO } from "./index";

export const emitBookingCreated = (booking: any) => {
  const io = getIO();

  io.emit(SOCKET_EVENTS.BOOKING_CREATED, booking);
};

export const emitBookingCancelled = (booking: any) => {
  const io = getIO();

  io.emit(SOCKET_EVENTS.BOOKING_CANCELLED, booking);
};
