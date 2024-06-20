import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCouponDto } from './dto/create-coupon.dto';
import { disconnect } from 'process';
import { UpdateCouponDto } from './dto/update-coupon.dto';

@Injectable()
export class CouponService {
    constructor(private prisma: PrismaService) {}

  createCoupon(createCouponDto: CreateCouponDto) {
    const expiryDate = new Date(createCouponDto.expiryDate);

    return this.prisma.coupon.create({
      data: {
        code: createCouponDto.code,
        discount: createCouponDto.discount,
        expiryDate: expiryDate
      },
    });
  }

  getCouponById(couponId: string) {
    return this.prisma.coupon.findUnique({
      where: { id: couponId },
    });
  }

  getAllCoupons() {
    return this.prisma.coupon.findMany();
  }

  updateCoupon(CouponId: string, updateCouponDto: UpdateCouponDto) {
    return this.prisma.coupon.update({
      where: { id: CouponId },
      data: updateCouponDto,
    });
  }

  deleteCoupon(couponId: string) {
    return this.prisma.coupon.delete({
      where: { id: couponId },
    });
  }
}
