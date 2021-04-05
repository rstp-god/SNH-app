import { Controller, Get } from '@nestjs/common';
import { Connection } from 'typeorm';

@Controller('testconnection')
export class TestconnectionController {

    constructor(private con: Connection){}

    @Get()
    getStatus() : boolean {
        return this.con.isConnected; 
    }
}
