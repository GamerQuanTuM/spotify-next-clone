"use client"
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react"
import useSWR, { mutate } from 'swr';


const months = [
    { value: '01', label: 'January' },
    { value: '02', label: 'February' },
    { value: '03', label: 'March' },
    { value: '04', label: 'April' },
    { value: '05', label: 'May' },
    { value: '06', label: 'June' },
    { value: '07', label: 'July' },
    { value: '08', label: 'August' },
    { value: '09', label: 'September' },
    { value: '10', label: 'October' },
    { value: '11', label: 'November' },
    { value: '12', label: 'December' },
]

type Error = {
    name: string,
    email: string,
    password: string
}



export default function SigninForm() {
    const router = useRouter()
    const [selectedMonth, setSelectedMonth] = useState('');


    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedMonth(event.target.value);
    };


    return (
        <div className="w-screen mt-5 space-y-3">
            <div className="mx-[510px] space-y-3">

                {/* Email */}
                <div className="space-y-3">
                    <p className="font-bold">What's your email?</p>
                    <input type="text" className="border border-gray-300 py-2 px-4 rounded-md w-[520px]" />
                </div>


                <div className="space-y-3">
                    <p className="font-bold">Confirm your email</p>
                    <input type="text" className="border border-gray-300 py-2 px-4 rounded-md w-[520px]" />
                </div>

                {/* Password */}
                <div className="space-y-3">
                    <p className="font-bold">Password</p>
                    <input type="password" className="border border-gray-300 py-2 px-4 rounded-md w-[520px]" />
                </div>

                {/* Name */}
                <div className="space-y-3">
                    <p className="font-bold">What should we call you?</p>
                    <input type="text" className="border border-gray-300 py-2 px-4 rounded-md w-[520px]" />
                    <span><p className="font-medium">This appears on your profile</p></span>
                </div>

                <div className="space-y-3">
                    <p className="font-bold">What's your date of birth?</p>
                    <div className="flex justify-between space-x-2">
                        <input type="text" className="border border-gray-300 py-2 px-4 rounded-md w-[130px]" />
                        <select value={selectedMonth}
                            onChange={handleChange}
                            className="w-[215px] p-[10px] bg-white border border-gray-300"
                            style={{ borderRadius: "5px" }}
                        >
                            <option value={selectedMonth}>Select a month</option>
                            {months.map((month) => (
                                <option key={month.value} value={month.value}>
                                    {month.label}
                                </option>
                            ))}
                        </select>
                        <input type="text" className="border border-gray-300 py-2 px-4 rounded-md w-[130px]" />
                    </div>
                </div>

                <div className="space-y-3">
                    <p className="font-bold">What's your gender?</p>
                    <div className="flex space-x-16">
                        <div className="space-x-2 flex justify-center items-center">
                            <input type="radio" />
                            <span><p>Male</p></span>
                        </div>
                        <div className="space-x-2 flex justify-center items-center">
                            <input type="radio" />
                            <span><p>Female</p></span>
                        </div>
                        <div className="space-x-2 flex justify-center items-center">
                            <input type="radio" />
                            <span><p>Non-binary</p></span>
                        </div>
                        <div className="space-x-2 flex justify-center items-center">
                            <input type="radio" />
                            <span><p>Others</p></span>
                        </div>
                    </div>
                </div>

                <div className="mt-12 flex items-center space-x-4" style={{ marginTop: '25px' }}>
                    <input type="checkbox" className="form-checkbox w-3 h-3" />
                    <p className="font-bold text-sm">I would prefer not to receive marketing messages from Spotify</p>
                </div>

                <div className="mt-12 flex items-center space-x-4" style={{ marginTop: '25px' }}>
                    <input type="checkbox" className="form-checkbox w-3 h-3" />
                    <p className="font-bold text-sm">Share my registration data with Spotify's content providers for marketing purposes.</p>
                </div>

                <div className="flex justify-center">
                    <button className="bg-[#1DB954] py-3 px-12 rounded-full font-bold "
                        onClick={()=>router.push('/')}>Sign Up</button>
                </div>

                <div className="flex justify-center" style={{ marginTop: '25px' }}>
                    <div className="font-bold">Have an account?{" "}
                        <span onClick={()=>router.push('/login')} className="underline text-[#1DB954] hover:text-[#24eb6a] cursor-pointer font-bold"
                        >Log in</span></div>
                </div>
            </div>
        </div>
    )
}
