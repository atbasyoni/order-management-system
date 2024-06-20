import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({
        data: createUserDto,
    });
    }

    findAll() {
        return this.prisma.user.findMany();
    }

    findOne(id: string) {
        return this.prisma.user.findUnique({
            where: { id: id },
        });
    }

    update(id: string, updateUserDto: UpdateUserDto) {
        return this.prisma.user.update({
            where: { id: id },
            data: updateUserDto,
        });
    }

    remove(id: string) {
        return this.prisma.user.delete({
            where: { id: id },
        });
    }

    getOrderHistory(userId: string) {
        return this.prisma.order.findMany({
          where: { userId: userId },
          include: {
            orderProducts: {
              include: {
                product: true,
              },
            },
          },
        });
    }
}