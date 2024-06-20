import { Coupon, Order } from "@prisma/client";

export class OrderCoupon {
    id: string;
    orderId: string;
    order: Order;
    couponId: string;
    coupon: Coupon;
  }