export const SOCKET_EVENTS = {
  BOOKING_CREATED: "booking-created",
  BOOKING_CANCELLED: "booking-cancelled",

  SLOT_RESERVED: "slot-reserved",
  SLOT_RELEASED: "slot-released",

  JOIN_PITCH: "join-pitch",
  LEAVE_PITCH: "leave-pitch",
} as const;
