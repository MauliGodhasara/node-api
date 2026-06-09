import { prisma } from "../config";

export class PitchRepository {
  async findAll() {
    return prisma.pitch.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  }
}
