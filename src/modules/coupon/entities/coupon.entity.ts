import { OrderCoupon } from "src/modules/order/entities/order-coupon.entity";

export class coupon {
    id: string;
    code: string;
    discount: number;
    expiryDate: Date;
    orderCoupons: OrderCoupon[];
}