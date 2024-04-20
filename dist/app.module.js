"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const auth_module_1 = require("./auth/auth.module");
const prisma_module_1 = require("./prisma/prisma.module");
const rent_module_1 = require("./rent/rent.module");
const car_module_1 = require("./car/car.module");
const car_controller_1 = require("./car/car.controller");
const rent_controller_1 = require("./rent/rent.controller");
const car_service_1 = require("./car/car.service");
const auth_controller_1 = require("./auth/auth.controller");
const rent_service_1 = require("./rent/rent.service");
const auth_service_1 = require("./auth/auth.service");
const users_module_1 = require("./users/users.module");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            auth_module_1.AuthModule,
            prisma_module_1.PrismaModule,
            rent_module_1.RentModule,
            car_module_1.CarModule,
            users_module_1.UsersModule,
            config_1.ConfigModule.forRoot({ isGlobal: true })
        ],
        controllers: [car_controller_1.CarController, rent_controller_1.RentController, auth_controller_1.AuthController],
        providers: [car_service_1.CarService, rent_service_1.RentService, auth_service_1.AuthService, jwt_1.JwtService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map