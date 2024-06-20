import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { OrderStatus } from '@prisma/client';
import { ApplyCouponDto } from './dto/apply-coupon.dto';
import { UpdateOrderStatusDto } from './dto/update-order.dto';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}
  
  async createOrder(userId: string) {
    const cart = await this.prisma.cart.findUnique({
      where: { userId },
      include: { cartProducts: { include: { product: true } } },
    });

    if (!cart || cart.userId !== userId) {
      throw new Error('Cart not found for this user');
    }

    if (cart.cartProducts.length === 0) {
      throw new BadRequestException('Cart is empty');
    }

    const orderProducts = cart.cartProducts.map(cartProduct => {
      const { product, quantity } = cartProduct;

      if (product.stock < quantity) {
        throw new BadRequestException(
          `Insufficient stock for product ${product.title}`
        );
      }

      return {
        productId: product.id,
        quantity,
        price: product.price,
        total: quantity * product.price,
      };
    });

    const total = orderProducts.reduce((acc, item) => acc + item.total, 0);

    // Place Order
    const order = await this.prisma.order.create({
      data: {
        userId,
        status: OrderStatus.Pending,
        orderProducts: { create: orderProducts },
        total
      },
    });

    // Update product stocks
    for (const cartProduct of cart.cartProducts) {
      await this.prisma.product.update({
        where: { id: cartProduct.productId },
        data: { stock: { decrement: cartProduct.quantity } },
      });
    }

    // Clear the cart
    this.prisma.cart.update({
      where: { userId },
      data: { cartProducts: { deleteMany: {} } },
    });

    return order;
  }

  async applyCoupon(orderId: string, applyCouponDto: ApplyCouponDto) {
    const { code } = applyCouponDto;

    const coupon = await this.prisma.coupon.findUnique({
      where: { code },
    });

    if (!coupon || coupon.expiryDate < new Date()) {
      throw new NotFoundException('Coupon not found or expired');
    }

    const order = await this.prisma.order.findUnique({
      where: { id: orderId },
    });
  
    if (!order) {
      throw new NotFoundException('Order not found');
    }
  
    const discountAmount = (order.total * coupon.discount) / 100;
    const newTotal = order.total - discountAmount;
  
    const updatedOrder = await this.prisma.order.update({
      where: { id: orderId },
      data: {
        total: newTotal,
        orderCoupons: { create: { couponId: coupon.id } },
      },
    });
  
    return updatedOrder;
  }

  async getOrderById(id: string) {
    const order = await this.prisma.order.findUnique({
      where: { id },
      include: {
        orderProducts: true, orderCoupons: true
      },
    });

    if (!order) {
      throw new NotFoundException('Order not found');
    }

    return order;
  }

  
  async updateOrderStatus(id: string, orderStatus: UpdateOrderStatusDto) {
    return await this.prisma.order.update({
      where: { id },
      data: { status: orderStatus.status },
    });
  }
}