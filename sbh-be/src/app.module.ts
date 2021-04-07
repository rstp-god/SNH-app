import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestconnectionModule } from './modules/testconnection/testconnection.module';
import { FormulainfoModule } from './modules/formulainfo/formulainfo.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(), 
    TestconnectionModule, 
    FormulainfoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
