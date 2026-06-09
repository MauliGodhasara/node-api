import { PitchRepository } from "../repositories";

export class PitchService {
  private pitchRepository = new PitchRepository();

  async getAllPitches() {
    return this.pitchRepository.findAll();
  }
}
