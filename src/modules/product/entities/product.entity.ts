import { CartProduct } from "src/modules/cart/entities/cart-product.entity";
import { OrderProduct } from "src/modules/order/entities/order-product.entity";

export class Product {
    id: string;
    title: string;
    description: string;
    price: number;
    stock: number;
    image: string;
    createdAt: Date;
    orderProducts: OrderProduct[];
    cartProduct: CartProduct[];
}