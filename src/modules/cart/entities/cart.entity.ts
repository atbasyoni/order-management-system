import { User } from "src/modules/user/entities/user.entity";
import { CartProduct } from "./cart-product.entity";

export class Cart {
    id: string;
    user: User;
    userId: string;
    cartProducts: CartProduct[];  
}