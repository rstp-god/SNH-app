import { Module } from '@nestjs/common';
import { TestconnectionService } from './testconnection.service';
import { TestconnectionController } from './testconnection.controller';

@Module({
  providers: [TestconnectionService],
  controllers: [TestconnectionController]
})
export class TestconnectionModule {}
