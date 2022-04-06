import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { Role } from './role/role.entity';
import { Auth } from './entities/auth.entity';
import { ConfigModule } from '@nestjs/config';
require("dotenv").config()

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host:'postgres',
      port: 5432,
      username: 'postgres',
      password: '12345',
      database:'auth',
      entities: [User, Role, Auth],
      synchronize: true,
    })
    , ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    })],
  controllers: [],
  providers: [],
})
export class AppModule {

}
