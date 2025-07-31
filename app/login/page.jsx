import MainLayout from "@/component/mainLayout";
import Link from "next/link";

export default function Login() {
    return (
        <>
            <div className="p-[40px] h-full flex flex-col justify-center">
                <h1 className="text-center mb-[40px] text-[40px] font-bold">LOGIN</h1>
                <div className="flex justify-center">
                    <form className="flex flex-col justify-center p-[40px] gap-[20px] rounded bg-[#f3f3f3]">
                        <input id="email" name="email" className="border border-solid p-[10px] text-[18px] rounded" placeholder="Email" type="email" />
                        <input id="password" name="password" className="border border-solid p-[10px] text-[18px] rounded" placeholder="Passwords" type="password" />
                        <button className="p-[10px] text-white rounded bg-blue-400">Login</button>
                        <p>Don't have an account? <Link href='/signup'>Register</Link></p>
                    </form>
                </div>
            </div>
        </>
    );
}