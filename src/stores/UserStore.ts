import react, { Component, useContext } from "react";
import { runInAction, configure, observable, action, makeObservable, autorun, computed, makeAutoObservable, reaction, ObservableMap, flow } from "mobx";

import { IUser } from "../types/IUser";
import React from "react";
import AppStore from "./AppStore";
import { strict } from "assert/strict";
import { ENDPOINT_BASE } from "../constants";
import AppService from "../services/AppService";
import { threadId } from "worker_threads";
import { boolean } from "mobx-state-tree/dist/internal";
import { IAccount } from "../types/IAccount";
import User from "../models/User";
import { Account } from "../models/Account";


export default class UserStore {


  usersList = observable.array<IUser>();
  accountList = observable.array<IAccount>();
  isFirstLoad: boolean = true;

  selectedUserId :number = 0;

  constructor(private store: AppStore, private appService: AppService) {
    makeAutoObservable(this);

    //enforce mutating states through actions (diabling it for now)
    configure({
      enforceActions: "never",
    });

  }
  test: string = '';
  //using flow/yield to fetch data
  loadUsersFromServer = () => {
    const data = this.appService.userService.getUsersGenerator();
    //we use runinaction to mutate the state 
    runInAction(() => {

      data.then(json => {
             const appUserData: IUser[] = json.map((data: any) => ({
          appuserid: data.appUserId,
          loginname: data.loginName,
          username: data.userName,
          accessall: data.accessAll,
          canedit: data.canEdit,
          is: data.isVodafone,
         // created: data.created ? new Date(Date.parse(data.created)) : null

        })
        );
        this.store.userStore.usersList.push(...appUserData);
    
      }
      )
      
    })
    runInAction(() => {
      this.isFirstLoad = false;   // state mutation
    })


  }



  loadAccountPerUserFromServer = async () => {
   // this.store.userStore.accountList.filter(acc )
    const data = this.appService.userService.getAccountOfUserGenerator(localStorage.getItem("requestLoginName")!,this.selectedUserId );
    runInAction(() => {

      data.then(json => {
             const userAccountsData: IAccount[] = json.map((data: any) => ({
          accountid: data.accountId,
          accountnumber: data.accountNumber,
          accountname: data.accountName,
          countrycode: data.countryCode,
          countryname: data.countryName,
          region: data.region,
          appuserid:data.appuserid,
         // created: data.created ? new Date(Date.parse(data.created)) : null
        })
        );
        this.accountList.push(...userAccountsData);
        console.log('loadAccountPerUserFromServer is invoked');
      }
      )
    })
  }

  get users(){
    return this.usersList;
  }
  get accountsOfUser()  {
    console.log('AcoountList Observable has been changed!...');
    return this.accountList.filter((acc) => acc.appuserid == this.selectedUserId);
  }


  setSelectUserId(userId :number){
    this.store.userStore.selectedUserId = userId;
  }

  get usersLength() {
    return this.usersList.length;
  }

  get AccountPerUserLength(){
    return this.accountsOfUser.length;  //using computed method inside computed one
  }
  


}
