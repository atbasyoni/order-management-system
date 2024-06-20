import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { OrderStatus } from "@prisma/client";

export class UpdateOrderDto {
    @ApiProperty()
    @IsEnum(OrderStatus)
    @IsNotEmpty()
    status: OrderStatus;
}