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
exports.RentController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const rent_service_1 = require("./rent.service");
const create_rent_dto_1 = require("./dto/create-rent.dto");
const update_rent_dto_1 = require("./dto/update-rent.dto");
const rent_entity_1 = require("./entities/rent.entity");
const swagger_1 = require("@nestjs/swagger");
const dist_1 = require("@nestjs/swagger/dist");
const accessToken_guard_1 = require("../common/guards/accessToken.guard");
let RentController = class RentController {
    constructor(rentService) {
        this.rentService = rentService;
    }
    create(createRentDto) {
        return this.rentService.create(createRentDto);
    }
    findAll() {
        return this.rentService.findAll();
    }
    findOne(id) {
        return this.rentService.findOne(+id);
    }
    update(id, updateRentDto) {
        return this.rentService.update(+id, updateRentDto);
    }
    remove(id) {
        return this.rentService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiCreatedResponse)({ type: rent_entity_1.RentEntity }),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_rent_dto_1.CreateRentDto]),
    __metadata("design:returntype", void 0)
], RentController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, dist_1.ApiOkResponse)({ type: [rent_entity_1.RentEntity] }),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RentController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, dist_1.ApiOkResponse)({ type: rent_entity_1.RentEntity }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RentController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiCreatedResponse)({ type: rent_entity_1.RentEntity }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_rent_dto_1.UpdateRentDto]),
    __metadata("design:returntype", void 0)
], RentController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiCreatedResponse)({ type: rent_entity_1.RentEntity }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RentController.prototype, "remove", null);
RentController = __decorate([
    (0, dist_1.ApiTags)('rents'),
    (0, common_1.Controller)('rents'),
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    __metadata("design:paramtypes", [rent_service_1.RentService])
], RentController);
exports.RentController = RentController;
//# sourceMappingURL=rent.controller.js.map