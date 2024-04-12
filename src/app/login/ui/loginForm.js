'use client';


import {signIn} from "next-auth/react";
import {useRouter} from "next/navigation";


const LoginForm = () => {
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const res = await signIn("credentials", {
            login: formData.get("login"),
            password: formData.get("password"),
            redirect: false,
        });

        if (res && !res.error) {
            router.push("/profile");
        } else {
            console.log(res);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex text-left flex-col">
            <input type="text" name="login" required />
            <input type="password" name="password" required />
            <button type="submit">Sign In</button>
        </form>
    );
};

export default LoginForm;