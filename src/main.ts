import { config } from 'dotenv';
config();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const PORT = 3333;
  const app = await NestFactory.create(AppModule);
  const corsOptions: CorsOptions = {
    origin: ['https://meeter-client.netlify.app'], // Add your client's URL here
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization'], // Add the allowed headers here
    preflightContinue: false,
    optionsSuccessStatus: 204,
  };
  app.enableCors(corsOptions);
  await app.listen(PORT);
  console.log('Server is listening on port: ' + PORT);
}

bootstrap();
