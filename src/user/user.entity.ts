import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from '../role/role.entity';

@Entity()
export class User{
  @PrimaryGeneratedColumn()
  id:number;
  @Column({unique:true})
  phone:string;
  @Column({select:false})
  password:string;

  @ManyToMany(()=>Role,user=>user.users)
  @JoinTable({name:"user_roles__roles_user"})
  roles:Role[]
}