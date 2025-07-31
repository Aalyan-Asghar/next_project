"use client"

import MainLayout from "@/component/mainLayout";
import Link from "next/link";
import toast from "react-hot-toast";

export default function Login() {

    const handleRegister = (e) => {
        e.preventDefault();
        toast.error("Registration Successful!")
        console.log("clicked")
    }

    return (
        <>
            <div className="p-[40px] h-full flex flex-col justify-center">
                <h1 className="text-center mb-[40px] text-[40px] font-bold">REGISTER</h1>
                <div className="flex justify-center">
                    <form className="flex flex-col justify-center p-[40px] gap-[20px] rounded bg-[#f3f3f3]">
                        <input id="name" name="name" className="border border-solid p-[10px] text-[18px] rounded" placeholder="Name" type="text" />
                        <input id="email" name="email" className="border border-solid p-[10px] text-[18px] rounded" placeholder="Email" type="email" />
                        <input id="password" name="password" className="border border-solid p-[10px] text-[18px] rounded" placeholder="Passwords" type="password" />
                        <input id="confirm-password" name="confirm-password" className="border border-solid p-[10px] text-[18px] rounded" placeholder="Confirm Passwords" type="password" />
                        <button className="p-[10px] text-white rounded bg-blue-400" onClick={handleRegister} type="submit">Register</button>
                        <p>Already have an account? <Link href='/login'>Login</Link></p>
                    </form>
                </div>
            </div>
        </>
    );
}