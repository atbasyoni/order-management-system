import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AddToCartDto } from './dto/add-to-cart.dto';
import { RemoveFromCartDto } from './dto/remove-from-cart.dto';
import { UpdateProductQuantityDto } from './dto/update-product-quantity.dto';
import { CreateCartDto } from './dto/create-cart.dto';

@Injectable()
export class CartService {
  constructor(private readonly prisma: PrismaService) {}

  async addToCart(addToCartDto: AddToCartDto) {
    const { userId, productId, quantity } = addToCartDto;

    let cart = await this.prisma.cart.findUnique({
      where: { userId: userId },
    });

    if (!cart) {
      cart = await this.prisma.cart.create({
        data: {
          userId: userId,
        },
      });
    }

    return await this.prisma.cartProduct.upsert({
      where: { cartId_productId: { cartId: userId, productId: productId } },
      update: { quantity: { increment: quantity } },
      create: {
        cart: { connect: { userId: userId } },
        product: { connect: { id: productId } },
        quantity,
      },
    });
  }

  async viewCart(userId: string) {
    return await this.prisma.cart.findUnique({
        where: { userId: userId },
        include: { cartProducts: { include: { product: true } } },
    });
  }

  async updateCart(updateProductDto: UpdateProductQuantityDto) {
    const { userId, productId, quantity } = updateProductDto;

    const cart = await this.prisma.cart.findUnique({
      where: { userId }
    });

    if (!cart) {
      throw new Error('Cart not found');
    }

    const cartProduct = await this.prisma.cartProduct.findUnique({
      where: {
        cartId_productId: {
          cartId: cart.id,
          productId,
        },
      },
      include: { product: true },
    });

    if (!cartProduct) {
      throw new NotFoundException('Product not found in cart');
    }

    if (cartProduct.product.stock < quantity) {
      throw new BadRequestException('Insufficient stock');
    }

    const updatedCartProduct = await this.prisma.cartProduct.update({
      where: {
        cartId_productId: {
          cartId: cart.id,
          productId,
        },
      },
      data: { quantity },
    });

    return updatedCartProduct;
  }

  async removeFromCart(removeFromCartDto: RemoveFromCartDto) {
    const { userId, productId } = removeFromCartDto;
    
    const cart = await this.prisma.cart.findUnique({
      where: { userId },
    });

    if (!cart) {
      throw new NotFoundException('Cart not found');
    }

    const cartProduct = await this.prisma.cartProduct.findUnique({
      where: {
        cartId_productId: {
          cartId: cart.id,
          productId,
        },
      },
    });

    if (!cartProduct) {
      throw new NotFoundException('Product not found in cart');
    }

    await this.prisma.cartProduct.delete({
      where: {
        cartId_productId: {
          cartId: cart.id,
          productId,
        },
      },
    });

    return { message: 'Product removed from cart' };
  }
}
