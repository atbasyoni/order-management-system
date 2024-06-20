import { Order } from "@prisma/client";
import { Coupon } from "./coupon.entity";

export class OrderCoupon {
    id: string;
    orderId: string;
    order: Order;
    couponId: string;
    coupon: Coupon;
  }