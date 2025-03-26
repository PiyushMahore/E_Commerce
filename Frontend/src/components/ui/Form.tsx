import { useState } from "react"
import { Input } from "./input";
import { Button } from "./button";

function Form() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="grid justify-items-center py-16 gap-4 text-[#283b53]">
            <h1 className="text-2xl font-semibold">Create my account</h1>
            <p className="text-sm">Please fill in the information below:</p>
            <div className="grid gap-4 py-3 justify-items-center xl:w-[27%] px-4">
                <Input className="rounded-none py-5 border-gray-300" placeholder="First name" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                <Input className="rounded-none py-5 border-gray-300" placeholder="Last name" onChange={(e) => setLastName(e.target.value)} value={lastName} />
                <Input className="rounded-none py-5 border-gray-300" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
                <Input className="rounded-none py-5 border-gray-300" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
                <Button className="w-full rounded-none py-6 bg-[#283b53] hover:bg-[#3b506e] transition-colors ease-in-out duration-300">Create my account</Button>
                <p className="text-xs text-center">
                    This site is protected by hCaptcha and the hCaptcha Privacy Policy and Terms of Service apply.
                </p>
            </div>
            <p className="text-sm font-sans">
                Already have an account? <a href="#">Login here</a>
            </p>
        </div>
    )
}

export default Form