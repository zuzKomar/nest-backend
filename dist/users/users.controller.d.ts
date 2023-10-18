import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<import(".prisma/client").User>;
    findAll(): import(".prisma/client").PrismaPromise<{
        firstName: string;
        lastName: string;
        phone: string;
        email: string;
        rents: import(".prisma/client").Rent[];
    }[]>;
    findOne(email: string): import(".prisma/client").Prisma.Prisma__UserClient<{
        firstName: string;
        lastName: string;
        phone: string;
        email: string;
        refreshToken: string;
        rents: (import(".prisma/client").Rent & {
            car: import(".prisma/client").Car;
        })[];
        id: number;
    }, never>;
    update(id: number, updateUserDto: UpdateUserDto): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User, never>;
}
