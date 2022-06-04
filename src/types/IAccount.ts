import { IBaseModel } from "./IBaseModel";

export interface IAccount extends IBaseModel{
accountid :number;
accountnumber :string;
accountname:string;
countrycode:string;
countryname:string;
region:string;
appuserid:number;

}