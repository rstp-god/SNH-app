import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestconnectionModule } from './modules/testconnection/testconnection.module';
import { GeometryModule } from './modules/Geometry/Geometry.module';
import { MathModule } from './modules/math/math.module';
import { PhysicsModule } from './modules/physics/physics.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(), 
    TestconnectionModule, 
    GeometryModule,
    MathModule, 
    PhysicsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
