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
    createcoupon(@Body() createCouponDto: CreateCouponDto) {
        return this.couponService.createCoupon(createCouponDto);
    }

    @ApiOperation({ summary: "Get specific coupon by id" })
    @Get(':couponId')
    getcouponById(@Param('couponId') couponId: string) {
        return this.couponService.getCouponById(couponId);
    }

    @ApiOperation({ summary: "Retrieves all coupons" })
    @Get()
    getAllcoupons() {
        return this.couponService.getAllCoupons();
    }

    @ApiOperation({ summary: "Update coupon" })
    @Put('update/:couponId')
    updatecoupon(@Param('couponId') couponId: string, @Body() updateCouponDto: UpdateCouponDto) {
        return this.couponService.updateCoupon(couponId, updateCouponDto);
    }

    @ApiOperation({ summary: "Delete coupon" })
    @Delete('delete/:couponId')
    deletecoupon(@Param('couponId') couponId: string) {
        return this.couponService.deleteCoupon(couponId);
    }
}
