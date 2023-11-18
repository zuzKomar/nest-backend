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
exports.CreateCarDto = exports.Transmission = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
var Transmission;
(function (Transmission) {
    Transmission["MANUAL"] = "MANUAL";
    Transmission["AUTOMATIC"] = "AUTOMATIC";
})(Transmission = exports.Transmission || (exports.Transmission = {}));
class CreateCarDto {
    constructor() {
        this.transmission = Transmission.MANUAL;
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { brand: { required: true, type: () => String }, model: { required: true, type: () => String }, productionYear: { required: true, type: () => Number }, power: { required: true, type: () => Number }, capacity: { required: true, type: () => Number }, transmission: { required: true, type: () => Object, default: Transmission.MANUAL, enum: require("./create-car.dto").Transmission.MANUAL }, numberOfSeats: { required: true, type: () => Number }, costPerDay: { required: true, type: () => Number }, registrationNumber: { required: true, type: () => String }, photo: { required: false, type: () => Object } };
    }
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: 'The brand of a car' }),
    __metadata("design:type", String)
], CreateCarDto.prototype, "brand", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: 'The model of a car' }),
    __metadata("design:type", String)
], CreateCarDto.prototype, "model", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: 'The production year of a car' }),
    __metadata("design:type", Number)
], CreateCarDto.prototype, "productionYear", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: 'The numer of power horses of a car' }),
    __metadata("design:type", Number)
], CreateCarDto.prototype, "power", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: 'The capacity of a car' }),
    __metadata("design:type", Number)
], CreateCarDto.prototype, "capacity", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(Transmission),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: 'The transmission of a car', default: Transmission.MANUAL }),
    __metadata("design:type", Object)
], CreateCarDto.prototype, "transmission", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: 'The number of seats of a car' }),
    __metadata("design:type", Number)
], CreateCarDto.prototype, "numberOfSeats", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: 'The cost of rent per day' }),
    __metadata("design:type", Number)
], CreateCarDto.prototype, "costPerDay", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: 'The registration number of a car' }),
    __metadata("design:type", String)
], CreateCarDto.prototype, "registrationNumber", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ description: 'The photo of a car' }),
    __metadata("design:type", Object)
], CreateCarDto.prototype, "photo", void 0);
exports.CreateCarDto = CreateCarDto;
//# sourceMappingURL=create-car.dto.js.map