import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('api/products')
@ApiTags('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @ApiOperation({ summary: "Add new product" })
    @Post()
    createProduct(@Body() createProductDto: CreateProductDto) {
        return this.productService.createProduct(createProductDto);
    }

    @ApiOperation({ summary: "Get specific product by id" })
    @Get(':productId')
    getProductById(@Param('productId') productId: string) {
        return this.productService.getProductById(productId);
    }

    @ApiOperation({ summary: "Retrieves all products" })
    @Get()
    getAllProducts() {
        return this.productService.getAllProducts();
    }

    @ApiOperation({ summary: "Update product" })
    @Put(':productId')
    updateProduct(@Param('productId') productId: string, @Body() updateProductDto: UpdateProductDto) {
        return this.productService.updateProduct(productId, updateProductDto);
    }

    @ApiOperation({ summary: "Delete product" })
    @Delete(':productId')
    deleteProduct(@Param('productId') productId: string) {
        return this.productService.deleteProduct(productId);
    }
}
