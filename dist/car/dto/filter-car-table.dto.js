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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterCarTableDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const client_1 = require("@prisma/client");
class FilterCarTableDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { brand: { required: false, type: () => String }, model: { required: false, type: () => String }, productionYearFrom: { required: false, type: () => Number }, productionYearTo: { required: false, type: () => Number }, powerFrom: { required: false, type: () => Number }, powerTo: { required: false, type: () => Number }, capacityFrom: { required: false, type: () => Number }, capacityTo: { required: false, type: () => Number }, transmission: { required: false, type: () => Object }, numberOfSeatsFrom: { required: false, type: () => Number }, numberOfSeatsTo: { required: false, type: () => Number }, costPerDayFrom: { required: false, type: () => Number }, costPerDayTo: { required: false, type: () => Number } };
    }
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ description: 'The brand of a car' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], FilterCarTableDto.prototype, "brand", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ description: 'The model of a car' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], FilterCarTableDto.prototype, "model", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({ description: 'Lower range of production years' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], FilterCarTableDto.prototype, "productionYearFrom", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({ description: 'Top range of production years' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], FilterCarTableDto.prototype, "productionYearTo", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({ description: 'Lower range of power horses of a car' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], FilterCarTableDto.prototype, "powerFrom", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({ description: 'Top range of power horses of a car' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], FilterCarTableDto.prototype, "powerTo", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({ description: 'Lower range of capacity of a car' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], FilterCarTableDto.prototype, "capacityFrom", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({ description: 'Top range of capacity of a car' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], FilterCarTableDto.prototype, "capacityTo", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(client_1.Transmission),
    (0, swagger_1.ApiProperty)({ description: 'The transmission of a car', default: client_1.Transmission.MANUAL }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], FilterCarTableDto.prototype, "transmission", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({ description: 'Lower range of seats of a car' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], FilterCarTableDto.prototype, "numberOfSeatsFrom", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({ description: 'Top range of seats of a car' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], FilterCarTableDto.prototype, "numberOfSeatsTo", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({ description: 'Lower range of cost of rent per day' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], FilterCarTableDto.prototype, "costPerDayFrom", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({ description: 'Top range of cost of rent per day' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], FilterCarTableDto.prototype, "costPerDayTo", void 0);
exports.FilterCarTableDto = FilterCarTableDto;
//# sourceMappingURL=filter-car-table.dto.js.map