import React from "react";
const LoginFormMarkup = ({updateEmail, updatePassword, login}) => {
    return <div>
        <p>
            <h3>Email:</h3>
            <input type="text" onChange={updateEmail}/>
        </p>
        <p>
            <h3>Password:</h3>
            <input type="password" onChange={updatePassword}/>
        </p>
        <button onClick={login}>Login</button>
    </div>
}

export default LoginFormMarkup;