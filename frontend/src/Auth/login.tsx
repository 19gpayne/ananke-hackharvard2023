import { useState } from "react";
import { TextInput } from "../Components/Inputs/TextInput";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div>
            <TextInput label="Email" value="" onChange={() => {}} />
            <TextInput label="Password" value="" onChange={() => {}} />
        </div>
    )
}