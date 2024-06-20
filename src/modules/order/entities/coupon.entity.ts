import { OrderCoupon } from "./order-coupon.entity";

export class Coupon {
    id: string;
    code: string;
    discount: number;
    expiryDate: Date;
    orderCoupon: OrderCoupon[];
  }