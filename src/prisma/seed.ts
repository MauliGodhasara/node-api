import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const pitches = await prisma.pitch.findMany();

  if (!pitches.length) {
    throw new Error("No pitches found");
  }

  const startDate = new Date();
  const endDate = new Date("2026-06-18");

  const slots = [];

  for (
    let current = new Date(startDate);
    current <= endDate;
    current.setDate(current.getDate() + 1)
  ) {
    // Keep only date part (00:00:00)
    const slotDate = new Date(
      current.getFullYear(),
      current.getMonth(),
      current.getDate(),
      0,
      0,
      0,
      0,
    );

    for (const pitch of pitches) {
      for (let hour = 6; hour < 23; hour++) {
        slots.push({
          pitchId: pitch.id,
          date: slotDate,
          startTime: `${String(hour).padStart(2, "0")}:00`,
          endTime: `${String(hour + 1).padStart(2, "0")}:00`,
          isBooked: false,
        });
      }
    }
  }

  // Optional: clear old slots before reseeding
  await prisma.timeSlot.deleteMany();

  await prisma.timeSlot.createMany({
    data: slots,
  });

  console.log(`Created ${slots.length} slots`);
}

main()
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
