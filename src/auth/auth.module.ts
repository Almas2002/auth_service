import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Auth } from '../entities/auth.entity';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [
    JwtModule.register({
      secret: 'hello world',
      signOptions: { expiresIn: '180m' },
    }),
    TypeOrmModule.forFeature([User,Auth])
  ],
})
export class UserModule {
}