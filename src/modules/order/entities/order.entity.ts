import { User } from "src/modules/user/entities/user.entity";
import { OrderProduct } from "./order-product.entity";
import { OrderStatus } from "./order-status";
import { OrderCoupon } from "./order-coupon.entity";

export class Order {
    id: string;
    orderDate: Date;
    status: OrderStatus;
    user: User;
    userId: String;
    orderProducts: OrderProduct[];
    orderCoupons: OrderCoupon[];
    total: number;
    updatedAt: Date;
}