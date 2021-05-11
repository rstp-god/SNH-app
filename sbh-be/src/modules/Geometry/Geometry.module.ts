//node imports
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
//project imports
import { GeometryService } from './Geometry.service';
import { GeometryController } from './Geometry.controller';
import { Geometry } from 'src/entities/Geometry.entity';

@Module({
  imports : [TypeOrmModule.forFeature([Geometry])],
  providers: [GeometryService],
  controllers: [GeometryController]
})
export class GeometryModule {}
