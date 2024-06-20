import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsOptional, IsString } from "class-validator";

export class UpdateCouponDto {
    @ApiProperty()
    @IsString()
    @IsOptional()
    code?: string;
    
    @ApiProperty()
    @IsInt()
    @IsOptional()
    discount?: number;

    @ApiProperty()
    @IsString()
    @IsOptional()
    expiryDate?: string;
}