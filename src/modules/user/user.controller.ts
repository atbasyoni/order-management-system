import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { OrderService } from '../order/order.service';

@Controller('api/users')
@ApiTags('users')
export class UserController {
  constructor(
    private readonly userService: UserService
  ) {}

  @ApiOperation({ summary: "Add new user" })
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @ApiOperation({ summary: "Get all Users" })
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @ApiOperation({ summary: "Get specific user by id" })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @ApiOperation({ summary: "Update user" })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @ApiOperation({ summary: "Delete user" })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }

  // GET /api/users/:userId/orders
  @ApiOperation({ summary: "Retrive order history for specific user" })
  @Get(':userId/orders')
  getOrderHistory(@Param('userId') userId: string) {
    return this.userService.getOrderHistory(userId);
  }
}
