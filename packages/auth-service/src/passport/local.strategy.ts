import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { JwtStrategy } from '../JWT/jwt.strategy';
import { UserService } from '../user/user.service';
import { User } from 'src/entity&DTOs/user.interface';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtStrategy
    ) {
    super({ usernameField: 'email' }); // Assuming you're using email as the username
  } 
    
  // Validate User / LogIn User
  async validateUser(email: string, password: string): Promise<string | null> {
    const user = await this.userService.getUserByEmail(email); // Assuming a method like `findUserByEmail` exists in UserService
    if (user && await this.comparePasswords(password, user.password)) {
      // Generateing Token from JWT
      const token = await this.jwtService.generateToken(user);
      return token;
    }
    return null;
  }

  // Creating New User / Register
  async createUser(email: string, password: string, role: string): Promise<string | null> {
    const user = await this.userService.getUserByEmail(email); // Assuming a method like `findUserByEmail` exists in UserService
    if(user){
      return 'Email already registered'
    }
    const newUser = {
      email : email,
      password : password,
      role : role
    }
    try {
      // adding User to DB
      const userRegistered = await this.userService.createUser(newUser as User);
      console.log('User registered:', userRegistered);

      // token generation
      const token = await this.jwtService.generateToken(newUser as User);
      return token;

    } catch (error) {
      console.error('Error registering user:', error);
      return null;
    }
  }


  async comparePasswords(enteredPassword: string, storedPassword: string): Promise<boolean> {
    if(enteredPassword == storedPassword){
      return true;
    }
    return false;
  }
  
}
