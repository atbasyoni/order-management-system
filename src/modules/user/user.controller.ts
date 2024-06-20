import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { OrderService } from '../order/order.service';

@Controller('api/users')
@ApiTags('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: "Add new user" })
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }

  @ApiOperation({ summary: "Get all Users" })
  @Get()
  async findAll() {
    return await this.userService.findAll();
  }

  // GET /api/users/:userId/orders
  @ApiOperation({ summary: "Retrive order history for specific user" })
  @Get(':userId/orders')
  async getOrderHistory(@Param('userId') userId: string) {
    return await this.userService.getOrderHistory(userId);
  }
}
