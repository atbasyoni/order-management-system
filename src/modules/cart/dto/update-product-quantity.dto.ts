import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsPositive, IsString } from "class-validator";

export class UpdateProductQuantityDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    userId: string;
    
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    productId: string;
    
    @ApiProperty()
    @IsInt()
    @IsPositive()
    @IsNotEmpty()
    quantity: number;
}