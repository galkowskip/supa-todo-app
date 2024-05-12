import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { UserService } from "../services/UserService";


function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleLogin = async () => {
        const { data, error} = await UserService.loginWithPassword(username, password);

        if (error) {
            setError(error.message);
        } else {
            navigate("/");
        }
    };

    return (
        <div>
            <h1>Login</h1>
             {error || <p>{error}</p> }
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default LoginPage;