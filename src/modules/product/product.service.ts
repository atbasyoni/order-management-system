import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';


@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async createProduct(createProductDto: CreateProductDto) {
    const { title, description, price, stock, image } = createProductDto;

    return await this.prisma.product.create({
      data: { title, description, price, stock, image
      },
    });
  }

  async getProductById(productId: string) {
    const product = await this.prisma.product.findUnique({
      where: { id: productId },
    });

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return product;
  }

  async getAllProducts() {
    return await this.prisma.product.findMany();
  }

  async updateProduct(productId: string, updateProductDto: UpdateProductDto) {
    const { title, description, price, stock, image } = updateProductDto;

    const product = await this.prisma.product.findUnique({
      where: { id: productId },
    });

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    const updatedProduct = await this.prisma.product.update({
      where: { id: productId },
      data: {
        title,
        description,
        price,
        stock,
        image,
      },
    });

    return updatedProduct;
  }

  async deleteProduct(productId: string) {
    const product = await this.prisma.product.findUnique({
      where: { id: productId },
    });

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    await this.prisma.product.delete({
      where: { id: productId },
    });

    return { message: 'Product deleted successfully' };
  }
}
