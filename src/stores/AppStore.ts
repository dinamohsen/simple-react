import AppService from "../services/AppService";
import UserStore from "./UserStore";

export default class AppStore {
   appService = new AppService();
    userStore = new UserStore(this,this.appService );
    
  } 