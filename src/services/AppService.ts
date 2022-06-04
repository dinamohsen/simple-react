import UserService from "./UserService";
class AppService {

    constructor(){

    }
    userService = new UserService(this);
}

export default AppService;