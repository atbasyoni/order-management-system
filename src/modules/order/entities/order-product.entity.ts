import { Product } from "src/modules/product/entities/product.entity";
import { Order } from "./order.entity";

export class OrderProduct {
    id: string;
    order: Order;
    orderId: string;
    product: Product;
    productId: string;
    quantity: number;
    price: number;
    total: number;
}