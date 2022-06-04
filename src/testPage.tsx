import react, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import { action, autorun, reaction, runInAction, when } from "mobx";
import { useStoreContext } from "./AppContext";
import { IUser } from "./types/IUser";
import React from "react";
import { IAccount } from "./types/IAccount";
import {  UserRowUI, UserRowUI2 } from "./components/pure/UserRowUIClass";





const TestPage = observer(() => {
    const { store } = useStoreContext();




    const showAccounts = (e: any) => {
        store.userStore.setSelectUserId(e.target.id);

        //check if accounts exist in store
        const existingAccounts: IAccount[] = store.userStore.accountsOfUser;
        console.log('existing accounts length >>>' + existingAccounts.length)
        if (existingAccounts.length == 0) {
            store.userStore.loadAccountPerUserFromServer();

        }

    }

    const disposer = when(() => {
        return store.userStore.isFirstLoad
    }, () => {
        //store.userStore.loadUsers();
        localStorage.setItem("requestLoginName", 'dina.mohsen1@vodafone.com');// will be retrieved from login 
        store.userStore.loadUsersFromServer();

        console.log('when method is invoked only one time at first load of component.....')

    });

    // const disposer2 = autorun(()=>store.userStore.load());
    return (
        
       <div>
            <h1>
                users List no of rows {store.userStore.usersList.length}
            </h1>
            <h2>
                <table>
                    <tr>
                        <td>App user Id</td>
                        <td>Username</td>
                        <td>...</td>
                    </tr>
                        {store.userStore.usersList.map(userRow => 
                        
                        <tr  key = {userRow.appuserid}>
                        <td> {userRow.username}</td>
                        <td> 
                        <button
                        
                         onClick={showAccounts}/> </td>
                        </tr>
                        )}

                
                </table>
              

            </h2>
            <h3>
                selected User  {store.userStore.selectedUserId} <br />
                total accounts  {store.userStore.AccountPerUserLength}
                <table>
                    <tr>
                        <td>Account Id </td>
                        <td>Account No </td>
                        <td>Account CountryName </td>
                    </tr>

                        {store.userStore.accountsOfUser

                           
                            .map(row1 =>
                                <tr>
                                    <td>{row1.accountid}</td>
                                    <td>{row1.accountnumber}</td>
                                    <td>{row1.countryname}</td>
                                    </tr>
                            )

                        }
                    
                </table>


            </h3>



          

        </div>
    
    )
}
);
export default TestPage;
