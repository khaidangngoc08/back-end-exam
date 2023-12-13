import { Controller, Get, Param } from '@nestjs/common';
import { StormService } from './storm.service';

@Controller('storm')
export class StormController {
  constructor(private readonly stormService: StormService) {}

  @Get(':city')
  async getStorms(@Param('city') city: string) {
    return this.stormService.getStormsByCity(city);
  }
}
