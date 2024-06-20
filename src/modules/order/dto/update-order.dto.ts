import { IsEnum, IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { OrderStatus } from "@prisma/client";

export class UpdateOrderStatusDto {
    @ApiProperty()
    @IsEnum(OrderStatus)
    @IsNotEmpty()
    status: OrderStatus;
}