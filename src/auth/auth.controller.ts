import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UserLoginDto } from './dto/user-login.dto';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private userService:UserService) {}
  @MessagePattern({cmd:'login'})
  async login(data:UserLoginDto){
     return this.userService.login(data)
  }
}