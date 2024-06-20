import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsPositive, IsOptional } from 'class-validator';

export class UpdateProductDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  title?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty()
  @IsInt()
  @IsPositive()
  @IsOptional()
  price?: number;

  @ApiProperty()
  @IsInt()
  @IsPositive()
  @IsOptional()
  stock?: number;

  @ApiProperty()
  @IsString()
  @IsOptional()
  image?: string;
}