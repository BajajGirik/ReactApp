import './Login.css';
import { useHistory } from "react-router-dom";
import { useRef } from 'react';

function Login() {
    let history = useHistory();
    const emailref = useRef(null);
    const passref = useRef(null);

    const signIn = (e) => {
        e.preventDefault();

        if (emailref.current.value === "admin@gmail.com" && passref.current.value === "admin")
            history.push("/");
        else
            alert("Credentials Not Valid");
    }

    return (
        <div className="Login">
            <form onSubmit={signIn} className="Login__form">
                <h1>LOGIN</h1>
                <div className="Login__inpuContainer">
                    <div className="fa fa-envelope"></div>
                    <input ref={emailref} type="email" placeholder="Email ID" name="Email" required />
                </div>
                <div className="Login__inpuContainer">
                    <div className="fa fa-key"></div>
                    <input ref={passref} type="password" placeholder="Password" name="Pass" required/>
                </div>
                <button className="Login__button" type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login
