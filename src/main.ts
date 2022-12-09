import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true, //it will auto transform payloads to dto instances -> primitive type conversions too
      forbidNonWhitelisted: true //will return error if we pass prop, that was not specified in dto
    }),
  );
  await app.listen(3000);
}
bootstrap();
