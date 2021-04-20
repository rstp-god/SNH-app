import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhysicsController } from './physics.controller';
import { PhysicsService } from './physics.service';
import { Physics } from 'src/entities/Physics.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Physics])],
  controllers: [PhysicsController],
  providers: [PhysicsService]
})
export class PhysicsModule {}
