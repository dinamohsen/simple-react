
import { makeAutoObservable, makeObservable } from "mobx";
import { IAccount } from "../types/IAccount";
export class Account   implements IAccount {
    accountid!: number;
    accountnumber!: string;
    accountname!: string;
    countrycode!: string;
    countryname!: string;
    region!: string;
    created!: Date;
    requestLoginName!: string;
    appuserid!:number;
constructor(account :IAccount){
makeObservable(this);
}
    


}