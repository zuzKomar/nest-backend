import { ApiProperty } from "@nestjs/swagger";
import { Role, User } from "@prisma/client"

export class UserEntity implements User {
    @ApiProperty()
    id: number;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;

    @ApiProperty({ type: String })
    firstName: string;

    @ApiProperty({ type: String })
    lastName: string;

    @ApiProperty({ type: String })
    pesel: string;

    @ApiProperty({ type: String })
    phone: string;

    @ApiProperty({ type: String })
    email: string;

    @ApiProperty({ type: String })
    password: string;

    @ApiProperty({ enum: [Role.ADMIN, Role.USER], default: Role.USER })
    role: Role;

    refreshToken: string
}
