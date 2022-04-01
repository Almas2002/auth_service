import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/user.entity';
import { Auth } from '../entities/auth.entity';
import { UserModule } from '../user/user.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    JwtModule.register({
      secret: 'hello world',
      signOptions: { expiresIn: '180m' },
    }),
    TypeOrmModule.forFeature([User,Auth])
  ,UserModule],
})
export class AuthModule {
}