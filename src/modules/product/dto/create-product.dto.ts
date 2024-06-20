import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsPositive, IsString } from "class-validator";

export class CreateProductDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    title: string;
  
    @ApiProperty()
    @IsString()
    description: string;
  
    @ApiProperty()
    @IsInt()
    @IsPositive()
    @IsNotEmpty()
    price: number;
  
    @ApiProperty()
    @IsInt()
    @IsPositive()
    @IsNotEmpty()
    stock: number;

    @ApiProperty()
    @IsString()
    image: string;
}