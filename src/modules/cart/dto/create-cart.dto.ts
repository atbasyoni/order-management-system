import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCartDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  userId: string;
}
