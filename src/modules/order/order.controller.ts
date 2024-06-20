import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { OrderService } from './order.service';
import { ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';
import { OrderStatus } from '@prisma/client';
import { UpdateOrderDto } from './dto/update-order.dto';
import { ApplyCouponDto } from './dto/apply-coupon.dto';

@Controller('api/orders')
@ApiTags('order')
export class OrderController {
    constructor(private readonly orderService: OrderService) {}

    // POST /api/orders
    @ApiOperation({ summary: "Creates a new order for the specified user with the products in their cart" })
    @Post(':userId')
    createOrder(@Param('userId') userId: string){
        return this.orderService.createOrder(userId);
    }

    // GET /api/orders/:orderId
    @ApiOperation({ summary: "Retrieves the order details by order ID" })
    @Get(':orderId')
    getOrderById(@Param('orderId') orderId: string) {
        return this.orderService.getOrderById(orderId);
    }

    // PUT /api/orders/:orderId/status
    @ApiOperation({ summary: "Retrieves the order details by order ID" })
    @Put(':orderId/status')
    @ApiProperty()
    updateOrderStatus(@Param('orderId') orderId: string, @Body() updateOrderDto: UpdateOrderDto) {
        return this.orderService.updateOrderStatus(orderId, updateOrderDto);
    }

    // POST /api/orders/apply-coupon
    @ApiOperation({ summary: "Apply discounts and coupons to orders" })
    @Post(':orderId/apply-coupon')
    @ApiProperty()
    applyCoupon(@Param('orderId') orderId: string, @Body() applyCouponDto: ApplyCouponDto) {
        return this.orderService.applyCoupon(orderId, applyCouponDto);
    }
}