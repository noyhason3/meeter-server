import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class DatabaseService {
    constructor(@InjectConnection() private readonly connection: Connection) { }

    checkConnection(): string {
        const connectionStatus = this.connection.readyState;
        switch (connectionStatus) {
            case 0:
                return 'Disconnected';
            case 1:
                return 'Connected';
            case 2:
                return 'Connecting';
            case 3:
                return 'Disconnecting';
            default:
                return 'Unknown';
        }
    }
}
