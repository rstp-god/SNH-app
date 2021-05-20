//node imports
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
//project imports
import { PhysicsController } from './physics.controller';
import { PhysicsService } from './physics.service';
import { Physics } from 'src/entities/Physics.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Physics])],
  controllers: [PhysicsController],
  providers: [PhysicsService]
})
export class PhysicsModule {}
