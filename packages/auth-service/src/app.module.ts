import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocalStrategy } from './passport/local.strategy';
import { JwtStrategy } from './JWT/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from './user/user.module';
require('dotenv').config();

@Module({
  imports: [
    UserModule,
    PassportModule, 
    JwtModule.register({
      secret: process.env.JWT_KEY, 
      signOptions: { expiresIn: '7d' }, 
    }),
  ],
  controllers: [AppController],
  providers: [AppService, LocalStrategy, JwtStrategy],
})
export class AppModule {}
