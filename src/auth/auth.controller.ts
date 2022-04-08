import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UserLoginDto } from './dto/user-login.dto';
import { AuthService } from './auth.service';
require('dotenv').config()
@Controller()
export class AuthController {
  constructor(private authService:AuthService) {}
  @MessagePattern({cmd:'log_in'})
  async login(data:UserLoginDto){
    const response = await this.authService.login(data)
    return  response
  }
  @MessagePattern({cmd:'registration'})
  async registration(data:UserLoginDto){
     return this.authService.registration(data)
  }
  @MessagePattern({cmd:'logout'})
  async logout(refresh_token:string){
     return this.authService.logout(refresh_token)
  }
  @MessagePattern({cmd:"refresh_token"})
  async refreshToken(refresh_token:string){
    return this.authService.refresh(refresh_token)
  }
  @MessagePattern({cmd:"create-super-user"})
  async createSuperUser(){
    const data = {
      phone:process.env.SUPER_ADMIN_PHONE,
      password:process.env.SUPER_ADMIN_PASSWORD
    }
    return this.authService.registration(data,true)
  }


}
