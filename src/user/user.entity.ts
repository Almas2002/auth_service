import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User{
  @PrimaryGeneratedColumn()
  id:number;
  @Column({unique:true})
  phone:string;
  @Column({select:false})
  password:string;
}