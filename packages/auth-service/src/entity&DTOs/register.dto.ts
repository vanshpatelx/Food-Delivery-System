// email-password-role.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, IsNotEmpty, IsIn } from 'class-validator';

export class EmailPasswordRoleDto {
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

  @ApiProperty({
    description: 'Role of Auth',
    example: 'user'
  })
  @IsString()
  @IsNotEmpty()
  @IsIn(['user', 'admin', 'restaurant']) // Assuming 'user' and 'admin' are valid roles
  role: string;
}
