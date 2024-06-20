import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) { }

    async create(createUserDto: CreateUserDto) {
        const { name, email, password, address } = createUserDto;

        const user = await this.prisma.user.create({
            data: { name, email, password, address },
        });

        this.prisma.cart.create({
            data: {
                userId: user.id,
            },
        });

        return user;
    }

    async findAll() {
        return await this.prisma.user.findMany();
    }

    async getOrderHistory(userId: string) {
        return await this.prisma.order.findMany({
            where: { userId: userId },
            include: { orderProducts: { include: { product: true } } }
        });
    }
}
