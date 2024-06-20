import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { OrderService } from './order.service';
import { ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';
import { ApplyCouponDto } from './dto/apply-coupon.dto';
import { UpdateOrderStatusDto } from './dto/update-order.dto';

@Controller('api/orders')
@ApiTags('order')
export class OrderController {
    constructor(private readonly orderService: OrderService) {}

    // POST /api/orders
    @ApiOperation({ summary: "Creates a new order for the specified user with the products in their cart" })
    @Post(':userId')
    async createOrder(@Param('userId') userId: string){
        return await this.orderService.createOrder(userId);
    }

    // GET /api/orders/:orderId
    @ApiOperation({ summary: "Retrieves the order details by order ID" })
    @Get(':orderId')
    async getOrderById(@Param('orderId') orderId: string) {
        return await this.orderService.getOrderById(orderId);
    }

    // PUT /api/orders/:orderId/status
    @ApiOperation({ summary: "Retrieves the order details by order ID" })
    @Put(':orderId/status')
    @ApiProperty()
    async updateOrderStatus(@Param('orderId') orderId: string, @Body() orderStatus: UpdateOrderStatusDto) {
        return await this.orderService.updateOrderStatus(orderId, orderStatus);
    }

    // POST /api/orders/apply-coupon
    @ApiOperation({ summary: "Apply discounts and coupons to orders" })
    @Post(':orderId/apply-coupon')
    @ApiProperty()
    async applyCoupon(@Param('orderId') orderId: string, @Body() applyCouponDto: ApplyCouponDto) {
        return await this.orderService.applyCoupon(orderId, applyCouponDto);
    }
}