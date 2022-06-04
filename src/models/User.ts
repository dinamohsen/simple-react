import { action, makeAutoObservable, makeObservable } from "mobx";
import AppStore from "../stores/AppStore";
import TestStore from "../stores/UserStore";
import { IUser } from "../types/IUser";


export default class User  implements IUser {
  appuserid!: number;
  loginname!: string;
  username!: string;
  accessall!: number;
  canedit!: number;
  isvodafone!: number;
  created!: Date;
  isFirstLoaded!: boolean;
    requestLoginName!: string;
    constructor( store: AppStore, user: IUser) {
    makeObservable(this);
     
    }

    
    //to be written here
    // @computed get accounts() {
    //   return this.store.post.all.filter((it) => it.userId === this.id);
    // }
  }