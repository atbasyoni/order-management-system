import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CouponService } from './coupon.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateCouponDto } from './dto/create-coupon.dto';
import { UpdateCouponDto } from './dto/update-coupon.dto';

@Controller('api/coupon')
@ApiTags('coupon')
export class CouponController {
    constructor(private readonly couponService: CouponService) {}

    @ApiOperation({ summary: "Add new coupon" })
    @Post()
    async createCoupon(@Body() createCouponDto: CreateCouponDto) {
        return await this.couponService.createCoupon(createCouponDto);
    }

    @ApiOperation({ summary: "Get specific coupon by id" })
    @Get(':couponId')
    async getcouponById(@Param('couponId') couponId: string) {
        return await this.couponService.getCouponById(couponId);
    }

    @ApiOperation({ summary: "Retrieves all coupons" })
    @Get()
    async getAllcoupons() {
        return await this.couponService.getAllCoupons();
    }

    @ApiOperation({ summary: "Update coupon" })
    @Put(':couponId')
    async updatecoupon(@Param('couponId') couponId: string, @Body() updateCouponDto: UpdateCouponDto) {
        return await this.couponService.updateCoupon(couponId, updateCouponDto);
    }

    @ApiOperation({ summary: "Delete coupon" })
    @Delete(':couponId')
    async deletecoupon(@Param('couponId') couponId: string) {
        return await this.couponService.deleteCoupon(couponId);
    }
}
