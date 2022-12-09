import { Car, Transmission, Prisma } from "@prisma/client"
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger"


export class CarEntity implements Car {
    @ApiProperty()
    id: number;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;

    @ApiProperty({ type: String })
    brand: string;

    @ApiProperty({ type: String })
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
