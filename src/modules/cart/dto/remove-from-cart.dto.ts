import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class RemoveFromCartDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    userId: string;
    
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    productId: string;
}