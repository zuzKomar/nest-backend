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
exports.CarEntity = void 0;
const openapi = require("@nestjs/swagger");
const client_1 = require("@prisma/client");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CarEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date }, brand: { required: true, type: () => String, minLength: 2, maxLength: 30 }, model: { required: true, type: () => String, minLength: 2, maxLength: 30 }, productionYear: { required: true, type: () => Number }, power: { required: true, type: () => Number }, capacity: { required: true, type: () => Number }, transmission: { required: true, type: () => Object }, numberOfSeats: { required: true, type: () => Number }, costPerDay: { required: true, type: () => Number }, registrationNumber: { required: true, type: () => String }, photo: { required: true, type: () => String, nullable: true }, usable: { required: true, type: () => Boolean } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CarEntity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], CarEntity.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], CarEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    (0, class_validator_1.MinLength)(2),
    (0, class_validator_1.MaxLength)(30),
    __metadata("design:type", String)
], CarEntity.prototype, "brand", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    (0, class_validator_1.MinLength)(2),
    (0, class_validator_1.MaxLength)(30),
    __metadata("design:type", String)
], CarEntity.prototype, "model", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    __metadata("design:type", Number)
], CarEntity.prototype, "productionYear", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    __metadata("design:type", Number)
], CarEntity.prototype, "power", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    __metadata("design:type", Number)
], CarEntity.prototype, "capacity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: [client_1.Transmission.AUTOMATIC, client_1.Transmission.MANUAL] }),
    __metadata("design:type", String)
], CarEntity.prototype, "transmission", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CarEntity.prototype, "numberOfSeats", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    __metadata("design:type", Number)
], CarEntity.prototype, "costPerDay", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], CarEntity.prototype, "registrationNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, nullable: true }),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], CarEntity.prototype, "photo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: true }),
    __metadata("design:type", Boolean)
], CarEntity.prototype, "usable", void 0);
exports.CarEntity = CarEntity;
//# sourceMappingURL=car.entity.js.map