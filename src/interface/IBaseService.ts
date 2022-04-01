export interface IBaseService<T> {
  create(...arg:any):T
  put(id:number,...arg:any):T
  delete(id:number):void
  get(...arg:any):T[]
  getOne(id:number):T
}