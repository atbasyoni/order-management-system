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
    addToCart(@Body() addToCartDto: AddToCartDto) {
        return this.cartService.addToCart(addToCartDto);
    }

    // GET /api/cart/:userId
    @ApiOperation({ summary: "Retrieves the user's cart" })
    @Get(':userId')
    viewCart(@Param('userId') userId:string) {
        return this.cartService.viewCart(userId);
    }

    // PUT /api/cart/update
    @ApiOperation({ summary: "Updates the quantity of a product in the cart" })
    @Put('update')
    updateCart(@Body() updateProductDto: UpdateProductQuantityDto) {
        return this.cartService.updateCart(updateProductDto);
    }

    //  DELETE /api/cart/remove
    @ApiOperation({ summary: "Removes a product from the cart" })
    @Delete('remove')
    removeFromCart(@Body() removeFromCartDto: RemoveFromCartDto) {
        return this.cartService.removeFromCart(removeFromCartDto);
    }
    
    /*
    @Post()
    create(@Body() createCartDto: CreateCartDto) {
        return this.cartService.create(createCartDto);
    }

    @Get()
    findAll() {
        return this.cartService.findAll();
    }
    */
}