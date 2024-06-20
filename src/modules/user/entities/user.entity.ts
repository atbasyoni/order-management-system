import { Cart } from "src/modules/cart/entities/cart.entity";
import { Order } from "src/modules/order/entities/order.entity";

export class User {
    id: string;
    name: string;
    email: string;
    phone: string;
    password: string;
    address: string;
    cart: Cart[];
    orders: Order[];
}