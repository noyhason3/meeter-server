import { config } from 'dotenv';
config();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const PORT = 3333;
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  app.use(cors({
    origin: 'https://meeter-client.netlify.app',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }));
  app.enableCors();
  await app.listen(PORT);
  console.log('Server is listening on port: ' + PORT);
}

bootstrap();
