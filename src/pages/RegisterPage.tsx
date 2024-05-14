import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { FormEvent } from "react";
import { UserService } from "../services/UserService";

export default function RegisterPage() {
    const user = useSelector((state: any) => state.user.user);
    const navigate = useNavigate();

    const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        const formProps = Object.fromEntries(formData);


        if (formProps.password !== formProps.confirmPassword) {
            alert("Passwords do not match");
            return;
        } else {
            const { error } = await UserService.signUp(formProps.email as string, formProps.password as string);

            if (error) {
                alert(error.message);
            } else {
                alert("User created");
                navigate("/login");
            }
        }
    }

    if (user) {
        return <Navigate to="/" />;
    }

    return (
        <div>
            <h1>Register</h1>

            <form onSubmit={handleRegister}>
                <input type="email" name="email" placeholder="Email" />

                <input type="password" name="password" placeholder="Password" />
                <input type="password" name="confirmPassword" placeholder="Confirm Password" />

                <button>Register</button>
            </form>
        </div>
    );
}