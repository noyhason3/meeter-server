import { Injectable } from '@nestjs/common';
import { DatabaseService } from './utils/database.service';

@Injectable()
export class AppService {
  constructor(private readonly databaseService: DatabaseService) { }
  getHello(): string {
    const connectionStatus = this.databaseService.checkConnection();

    return `Hello World! Database connection status: ${connectionStatus}`;
  }
}
