import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsPositive, IsString } from "class-validator";

export class AddToCartDto {_
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    userId: string;
    
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    productId: string;
    
    @ApiProperty()
    @IsInt()
    @IsPositive()
    @IsNotEmpty()
    quantity: number;
}