"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const prisma_client_exception_filter_1 = require("./prisma-client-exception.filter");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        methods: ['GET', 'POST', 'DELETE', 'PATCH'],
        origin: 'http://localhost:3001',
        credentials: true,
    });
    const config = new swagger_1.DocumentBuilder().setTitle('Rent-a-car Application').setDescription('Rent-a-car API').setVersion('1.0').build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        transformOptions: {
            enableImplicitConversion: true,
        },
    }));
    const { httpAdapter } = app.get(core_1.HttpAdapterHost);
    app.useGlobalFilters(new prisma_client_exception_filter_1.PrismaClientExceptionFilter(httpAdapter));
    console.log(process.env);
    await app.listen(parseInt(process.env.PORT) || 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map