import { Car, Transmission, Prisma } from "@prisma/client"
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger"
import { MaxLength, MinLength } from "class-validator";


export class CarEntity implements Car {
    @ApiProperty() //makes property available for Swagger
    id: number;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;

    @ApiProperty({ type: String })
    @MinLength(2)
    @MaxLength(30)
    brand: string;

    @ApiProperty({ type: String })
    @MinLength(2)
    @MaxLength(30)
    model: string;

    @ApiProperty({ type: Number })
    productionYear: number;

    @ApiProperty({ type: Number })
    power: number;

    @ApiProperty({ type: Number })
    capacity: number;

    @ApiProperty({ enum: [Transmission.AUTOMATIC, Transmission.MANUAL] })
    transmission: Transmission;

    @ApiProperty()
    numberOfSeats: number;

    @ApiProperty({ type: Number })
    costPerDay: number;

    @ApiProperty({ type: String })
    registrationNumber: string;

    @ApiProperty({ required: false, nullable: true })
    @ApiPropertyOptional()
    photo: Buffer | null;

    @ApiProperty({ default: true })
    usable: boolean;
}
