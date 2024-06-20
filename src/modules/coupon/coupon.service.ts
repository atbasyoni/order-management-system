import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCouponDto } from './dto/create-coupon.dto';
import { disconnect } from 'process';
import { UpdateCouponDto } from './dto/update-coupon.dto';

@Injectable()
export class CouponService {
  constructor(private prisma: PrismaService) {}

  async createCoupon(createCouponDto: CreateCouponDto) {
    const expiryDate = new Date(createCouponDto.expiryDate);

    return await this.prisma.coupon.create({
      data: {
        code: createCouponDto.code,
        discount: createCouponDto.discount,
        expiryDate: expiryDate
      },
    });
  }

  async getCouponById(couponId: string) {
    return await this.prisma.coupon.findUnique({
      where: { id: couponId },
    });
  }

  async getAllCoupons() {
    return await this.prisma.coupon.findMany();
  }

  async updateCoupon(CouponId: string, updateCouponDto: UpdateCouponDto) {
    return await this.prisma.coupon.update({
      where: { id: CouponId },
      data: updateCouponDto,
    });
  }

  async deleteCoupon(couponId: string) {
    return await this.prisma.coupon.delete({
      where: { id: couponId },
    });
  }
}
