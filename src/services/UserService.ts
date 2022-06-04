import { flow, makeAutoObservable } from "mobx";
import { ENDPOINT_BASE } from "../constants";
import AppService from "./AppService";

class UserService {
    constructor(private appService: AppService) { makeAutoObservable(this) }


    getUsersGenerator = flow(function* () {

        const response = yield fetch(ENDPOINT_BASE + 'appuser');
        const data = yield response.json();
     
        console.log('response returned from geneartor>>>'+data);
        
       
        return data;
    });

    getAccountOfUserGenerator = flow(function* (loginName: string, appUserId: number) {
        const response = yield fetch(ENDPOINT_BASE + 'account?&loginName=' + loginName + "&appUserId=" + appUserId);
        const data = yield response.json();
       
        return data;
    }
    )

}
export default UserService;