import { IBaseModel } from "./IBaseModel";


export interface IUser extends IBaseModel {
    appuserid:number;
    loginname :string;
    username:string;
    accessall :number;
    canedit:number;
    isvodafone :number;
    created:Date;

   
}