import React from 'react';

import "./index.css";


export const Login = (props) => {

    const logar = () =>{
        window.open("/", "_self");
    };

    return (
        <div className="box-login">
            <h1>Login</h1>
            <br/>
            <label for="email"></label>
            <p>Digite seu email</p>
            <input id="email" type="text"/>
            <br/>
            <label for="email"></label>
            <p>Digite sua senha</p>
            <input id="senha" type="password"/>
            <br/>
         <button id="btn-entrar" onClick={logar} type="button">Entrar</button>
        </div>
    )
}

