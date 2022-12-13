import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder().setTitle('Rent-a-car Application')
    .setDescription('Rent-a-car API')
    .setVersion('v1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true, //it will auto transform payloads to dto instances -> primitive type conversions too
      forbidNonWhitelisted: true, //will return error if we pass prop, that was not specified in dto
      transformOptions: {
        enableImplicitConversion: true
      }
    }),
  );
  await app.listen(3000);
}
bootstrap();
