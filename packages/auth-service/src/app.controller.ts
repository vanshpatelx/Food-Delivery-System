import { Controller, Post, Body, UnauthorizedException, MiddlewareConsumer, UseGuards, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtAuthGuard } from './JWT/jwt-auth.guard';
import { EmailPasswordDto } from './entity&DTOs/login.dto';
import { EmailPasswordRoleDto } from './entity&DTOs/register.dto';


@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService
  ) { }

  // Login Routes
  @Post('login')
  async loginUser(@Body() loginData: EmailPasswordDto) {
    const token = await this.appService.loginUser(loginData);

    if (!token) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return token;
  }


  // Register Routes
  @Post('register')
  async registerUser(@Body() registerData: EmailPasswordRoleDto) {
    const token = await this.appService.registerUser(registerData);

    if (!token) {
      throw new UnauthorizedException('Register issue credentials');
    }
    return token; 
  }

  // Protected Routes
  @Get('a')
  @UseGuards(JwtAuthGuard)
  getProfile() {
    return 'hello';
  }

}
