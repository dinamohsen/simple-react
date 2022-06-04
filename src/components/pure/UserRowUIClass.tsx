        import React from "react";
import { IUser } from "../../types/IUser";
import{Table,TableRow,TableCell} from '@vfuk/core-table';
import User from "../../models/User";

        export type propsType={
      //  key :number;
        userRow :IUser;
     //   showAccounts:(e:any) => void
     

                }
        
      export  const UserRowUI :React.FC<propsType>= ({userRow}) => {
            return (
                
            <TableRow  key = {appUserId}>
            <TableCell> {userName}</TableCell>
            </TableRow>
        
        
            );
        }
    

        export  const UserRowUI2 :React.FC<propsType>= ({userRow}) => {
                return (
                    
                <tr  key = {userRow.appuserid}>
                <td> {userRow.username}</td>
                </tr>
            
            
                );
            }
  // export    const PureUserRowUI = React.memo(UserRowUI); //functional pure component


//Pure Component class sample (equivalent to the above)
// export class UserRowUIClass extends React.PureComponent<propsType>{
  
//     render(){
//         console.log('rendering row..>'+this.props.userRow.appuserid); 
//         return (
//        <>
        
//             <td> {this.props.userRow.loginname}</td>

      
//     </>

//         )
//         }
    
// }

//  <td><button key={this.props.userRow.appuserid} value={this.props.userRow.appuserid} onClick={this.props.showAccounts}>Show Account</button></td>