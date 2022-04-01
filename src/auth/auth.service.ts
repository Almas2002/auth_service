import { Injectable } from '@nestjs/common';
import { UserLoginDto } from './dto/user-login.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Auth } from '../entities/auth.entity';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(@InjectRepository(Auth) private authRepository: Repository<Auth>,
              @InjectRepository(User) private userRepository, private jwtService: JwtService) {}

  private generationToken(user: User) {
    const payload = { id: user.id };
    return {
      access_token: this.jwtService.sign(payload),
      refresh_token: this.jwtService.sign(payload, { secret: 'refresh', expiresIn: '30d' }),
    };
  }

  async login(data: UserLoginDto) {
    return data;
  }

  async registration(data: UserLoginDto) {

  }
  private async saveToken(userId: number, refresh_token: string) {
    const candidate = await this..findOne({where: {userId}})
    if (candidate) {

      return await this.tokenRepository.update({id: candidate.id}, {refresh_token})
    }
    return await this.tokenRepository.save({refresh_token, userId})
  }

}