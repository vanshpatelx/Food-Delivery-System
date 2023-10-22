import { Injectable } from '@nestjs/common';
import { LocalStrategy } from './passport/local.strategy';
import { EmailPasswordDto } from './entity&DTOs/login.dto';
import { EmailPasswordRoleDto } from './entity&DTOs/register.dto';


@Injectable()
export class AppService {
  constructor(
    private readonly localStrategy :  LocalStrategy
  ){}

  // Login User Function
  async loginUser(loginData : EmailPasswordDto): Promise<string | null >{
    const token = await this.localStrategy.validateUser(loginData.email, loginData.password);
    return token;
  }
  
  // Register User Function
  async registerUser(registerData : EmailPasswordRoleDto): Promise<any | null>{
    const token = await this.localStrategy.createUser(registerData.email, registerData.password, registerData.role);
    return token;
  }
}
