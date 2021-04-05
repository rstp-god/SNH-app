import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormulaInfo } from './entities/formulainfo.entity'; 
import { TestconnectionModule } from './modules/testconnection/testconnection.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
     entities: [FormulaInfo],
    }), 
    TestconnectionModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
