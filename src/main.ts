import { config } from 'dotenv';
config();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const PORT = 3333;
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('Meeter Server')
    .setDescription('Swagger for meeter api')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

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
