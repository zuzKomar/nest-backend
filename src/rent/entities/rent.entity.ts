import { Rent } from "@prisma/client"
import { ApiProperty } from "@nestjs/swagger"

export class RentEntity implements Rent {
    //ApiProperty decorator makes property visible for swagger 
    @ApiProperty()
    id: number

    @ApiProperty()
    createdAt: Date

    @ApiProperty()
    updatedAt: Date

    @ApiProperty({ type: Number })
    userId: number

    @ApiProperty({ type: Number })
    carId: number

    @ApiProperty()
    date: Date

    @ApiProperty()
    dueDate: Date

    @ApiProperty({ default: false })
    damagedCar: boolean
}
