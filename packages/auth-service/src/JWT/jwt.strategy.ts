
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { UserService } from '../user/user.service'; // You'll need to create an AuthService to handle authentication logic
import { JwtPayload } from '../entity&DTOs/jwt-payload.interface'; // Define your JwtPayload interface if needed
import { JwtService } from '@nestjs/jwt'; // Import JwtService for token generation
import { User } from 'src/entity&DTOs/user.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'your-secret-key', // Replace this with your actual JWT secret key
    });
  }

  // Generate Token
  async generateToken(user: User): Promise<string> {
    const payload: JwtPayload = { sub: user.id, email: user.email, role: user.role };
    return this.jwtService.sign(payload);
  }
}

