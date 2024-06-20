import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CartService } from './cart.service';
import { AddToCartDto } from './dto/add-to-cart.dto';
import { RemoveFromCartDto } from './dto/remove-from-cart.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UpdateProductQuantityDto } from './dto/update-product-quantity.dto';
import { CreateCartDto } from './dto/create-cart.dto';

@Controller('api/cart')
@ApiTags('cart')
export class CartController {
    constructor(private readonly cartService: CartService) {}

    // POST /api/cart/add
    @ApiOperation({ summary: 'Add product to the cart or updates the quantity if the product is already in the cart' })
    @Post('add')
    async addToCart(@Body() addToCartDto: AddToCartDto) {
        return await this.cartService.addToCart(addToCartDto);
    }

    // GET /api/cart/:userId
    @ApiOperation({ summary: "Retrieves the user's cart" })
    @Get(':userId')
    async viewCart(@Param('userId') userId:string) {
        return await this.cartService.viewCart(userId);
    }

    // PUT /api/cart/update
    @ApiOperation({ summary: "Updates the quantity of a product in the cart" })
    @Put('update')
    async updateCart(@Body() updateProductDto: UpdateProductQuantityDto) {
        return await this.cartService.updateCart(updateProductDto);
    }

    //  DELETE /api/cart/remove
    @ApiOperation({ summary: "Removes a product from the cart" })
    @Delete('remove')
    async removeFromCart(@Body() removeFromCartDto: RemoveFromCartDto) {
        return await this.cartService.removeFromCart(removeFromCartDto);
    }
}