import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateCouponDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    code: string;
    
    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    discount: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    expiryDate: string;
}