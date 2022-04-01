import { Controller } from '@nestjs/common';
import { RoleService } from './role.service';
import { MessagePattern } from '@nestjs/microservices';
import { CreateRoleDto } from './dto/create-role.dto';

@Controller()
export class RoleController {
  constructor(private roleService:RoleService) {}

  @MessagePattern({cmd:"create-role"})
  createRole(dto:CreateRoleDto){
    return this.roleService.create(dto)
  }

  @MessagePattern({cmd:"get-roles"})
  getRoles(){
    return this.roleService.getRoles()
  }

  @MessagePattern({cmd:"update-role"})
  updateRole(dto:CreateRoleDto & {id:number}){
    return this.roleService.updateRole(dto.id,dto)
  }
}