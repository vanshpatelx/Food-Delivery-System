import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

// Auth - Middleware / JwtAuthGuard
@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization;

    if (!token || !token.startsWith('Bearer ')) {
      return false;
    }

    const jwtToken = token.split(' ')[1];

    try {
      const decoded = this.jwtService.verify(jwtToken);
      request.user = decoded;
      return true;
    } catch (error) {
      return false;
    }
  }
}
