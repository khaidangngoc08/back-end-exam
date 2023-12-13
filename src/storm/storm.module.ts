import { Module } from '@nestjs/common';
import { StormService } from './storm.service';
import { StormController } from './storm.controller';

@Module({
  controllers: [StormController],
  providers: [StormService],
})
export class StormModule {}
