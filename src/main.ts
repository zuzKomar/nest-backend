import { ValidationPipe } from '@nestjs/common';
import { NestFactory, HttpAdapterHost } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { PrismaClientExceptionFilter } from './prisma-client-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    methods: ['GET', 'POST', 'DELETE', 'PATCH'],
    origin: 'http://localhost:3001',
    credentials: true,
  });

  const config = new DocumentBuilder().setTitle('Rent-a-car Application').setDescription('Rent-a-car API').setVersion('1.0').build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //it will accept only those props (in post request), which are listed in DTOs, the rest will be ignored and not proceeded,
      forbidNonWhitelisted: true, //it will return error if we pass prop, that was not specified in dto
      transform: true, //it will auto transform payloads to dto instances -> primitive type conversions too
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter));
  console.log(process.env);
  await app.listen(parseInt(process.env.PORT) || 3000);
}
bootstrap();
