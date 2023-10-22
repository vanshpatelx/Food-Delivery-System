// email-password.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, IsNotEmpty } from 'class-validator';

export class EmailPasswordDto {
  @ApiProperty({
    description: 'Email address of User',
    example: 'use@example.com'
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'Password of User',
    example: 'securass'
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}
