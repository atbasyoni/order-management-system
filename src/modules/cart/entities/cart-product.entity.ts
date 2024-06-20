import { Product } from "src/modules/product/entities/product.entity";
import { Cart } from "./cart.entity";

export class CartProduct {
    id: string;
    cart: Cart;
    cartId: string;
    product: Product;
    productId: string;
    quantity: number;
}