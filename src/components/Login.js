import './Login.css';
import { useHistory } from "react-router-dom";
import { useRef } from 'react';

function Login() {
    let history = useHistory();
    const emailref = useRef(null);

    const signIn = () => {

        history.push("/home");
    }

    return (
        <div className="Login">
            <form onSubmit={signIn}>
                <input type="email" placeholder="Email ID" name="Email" />
                <input type="password" placeholder="Password" name="Pass" />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login
