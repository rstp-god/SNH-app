//node imports
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

//project imports 
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestconnectionModule } from './modules/testconnection/testconnection.module';
import { GeometryModule } from './modules/Geometry/Geometry.module';
import { MathModule } from './modules/math/math.module';
import { PhysicsModule } from './modules/physics/physics.module';
import { Geometry } from './entities/Geometry.entity';
import { Physics } from './entities/Physics.entity';
import { Math } from './entities/Math.entity';
import { InfoFormula } from './entities/InformaticsFormulas.entity';
import { InformaticsModule } from './modules/informatics/informatics.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(), 
    TestconnectionModule, 
    GeometryModule,
    MathModule, 
    PhysicsModule, 
    InformaticsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
