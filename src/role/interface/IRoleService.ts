import { Role } from '../role.entity';

export interface IRoleService {
  create():Promise<Role>

}