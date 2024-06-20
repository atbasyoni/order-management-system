import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray, IsInt, IsNotEmpty, IsPositive, IsString, ValidateNested } from "class-validator";

export class CreateOrderDto {
    @ApiProperty()
    @IsString()
    userId: string;
}