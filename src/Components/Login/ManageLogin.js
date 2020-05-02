import React, { useState } from 'react';
import LoginForm from './LoginForm';
import MenuInicial from '../MenuInicial/MenuInicial';

function ManageLogin() {


    const [password,setPassword] = useState();

    function changePassword (evt){
        setPassword(evt.target.value)
    }

  return (
        <>
        {password === "akuake" ? (
            <>
            <div>
            <MenuInicial></MenuInicial>
            </div>
       </>
      ) : (
          <>
        <LoginForm changePassword = {changePassword}></LoginForm>
        </>
      )}
        </>
  );
}

export default ManageLogin;
