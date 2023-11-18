"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const dist_1 = require("@nestjs/swagger/dist");
const car_service_1 = require("./car.service");
const create_car_dto_1 = require("./dto/create-car.dto");
const update_car_dto_1 = require("./dto/update-car.dto");
const car_entity_1 = require("./entities/car.entity");
const accessToken_guard_1 = require("../common/guards/accessToken.guard");
const filter_car_table_dto_1 = require("./dto/filter-car-table.dto");
let CarController = class CarController {
    constructor(carService) {
        this.carService = carService;
    }
    create(createCarDto) {
        return this.carService.create(createCarDto);
    }
    findAll(query) {
        return this.carService.findAll(query);
    }
    findOne(id) {
        return this.carService.findOne(+id);
    }
    update(id, updateCarDto) {
        return this.carService.update(+id, updateCarDto);
    }
    remove(id) {
        return this.carService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, dist_1.ApiCreatedResponse)({ type: car_entity_1.CarEntity }),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_car_dto_1.CreateCarDto]),
    __metadata("design:returntype", void 0)
], CarController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)({ type: [car_entity_1.CarEntity] }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_car_table_dto_1.FilterCarTableDto]),
    __metadata("design:returntype", void 0)
], CarController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOkResponse)({ type: car_entity_1.CarEntity }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CarController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, dist_1.ApiCreatedResponse)({ type: car_entity_1.CarEntity }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_car_dto_1.UpdateCarDto]),
    __metadata("design:returntype", void 0)
], CarController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, dist_1.ApiCreatedResponse)({ type: car_entity_1.CarEntity }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CarController.prototype, "remove", null);
CarController = __decorate([
    (0, common_1.Controller)('cars'),
    (0, dist_1.ApiTags)('cars'),
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    __metadata("design:paramtypes", [car_service_1.CarService])
], CarController);
exports.CarController = CarController;
//# sourceMappingURL=car.controller.js.map