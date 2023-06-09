import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const corsOptions: CorsOptions = {
    allowedHeaders: [
      'origin',
      'x-requested-with',
      'content-type',
      'accept',
      'authorization',
    ],
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
    origin: ['http://localhost:5173'],
  };
  await app.listen(3000);
}
bootstrap();
