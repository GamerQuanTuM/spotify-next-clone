"use client"
import { useRouter } from "next/navigation";
import { ChangeEvent, useState, MouseEvent } from "react"
import axios from "axios"
import { AiFillExclamationCircle as ExclamationIcon } from "react-icons/ai"
import userStore from "../zustand/user";

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

type Gender = "MALE" | "FEMALE" | "OTHERS";



export default function SigninForm() {
    const router = useRouter()
    const setUser = userStore((state: any) => state.setUser);
    const setToken = userStore((state: any) => state.setToken);
    const [selectedMonth, setSelectedMonth] = useState('');
    const [email, setEmail] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [name, setName] = useState<string>('')

    const [emailError, setEmailError] = useState<string>('')
    const [passwordError, setPasswordError] = useState<string>('')
    const [nameError, setNameError] = useState<string>('')
    const [confirmPasswordError, setConfirmPasswordError] = useState<string>('')
    const [selectedOption, setSelectedOption] = useState<Gender>("MALE");

    const url = "http://localhost:1339/api/v1/user/register"
    let hasError = false


    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedMonth(event.target.value);
    };

    function validatePasswordLength(password: string): boolean {
        return password.length < 6;
    }

    function validateNameLength(name: string): boolean {
        return name.length < 4
    }

    function validation(email: string, password: string, name: string) {
        if (!email) {
            setEmailError('Email is Required')
            hasError = true

        }
        if (!password.length) {
            setPasswordError('Password is Required')
            hasError = true
        }
        if (!name) {
            setNameError('Name is Required')
            hasError = true
        }

        if (!confirmPassword) {
            setConfirmPasswordError("You need to confirm your password")
        }

        if (confirmPassword !== password) {
            setConfirmPasswordError('Passwords do not match')
            hasError = true
        }


        if (!email.includes('@')) {
            setEmailError("Not a valid email")
            hasError = true
        }
        if (validatePasswordLength(password)) {
            setPasswordError("Password must be at least 6 characters long")
            hasError = true
        }

        if (validateNameLength(name)) {
            setNameError("Name must be at least 4 characters long")
            hasError = true
        }
    }

    const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(event.target.value as Gender);
    };



    const onSubmit = async (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
        e.preventDefault()
        validation(name, email, password)

        try {
            const emailCheck = await axios.get(`http://localhost:1339/api/v1/user/${email}`)
            if (emailCheck) {
                setEmailError('User Already Exists')
            }
            // Send the form data to the server using Axios
            const response = await axios.post(url, {
                email,
                password,
                name,
                gender: selectedOption
            });



            if (response.status === 201 && !confirmPasswordError) {
                const { user, token } = response.data
                setUser(user)
                setToken(token)
                localStorage.setItem("token", token);
                localStorage.setItem("user", user.email);
                router.push('/')
                console.log('Success')
            } else {
                console.log('Failure')
            }
        } catch (error: any) {
            console.error(error);
        }

    }



    return (
        <div className="w-screen mt-5 space-y-3">
            <div className="mx-[510px] space-y-3">

                {/* Email */}
                <div className="space-y-3">
                    <p className="font-bold">What's your email?</p>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className={emailError ? 'border border-red-700 py-2 px-4 rounded-md w-[520px]' : "border border-gray-300 py-2 px-4 rounded-md w-[520px]"} />
                    {emailError && <span className="flex space-x-2 items-center">
                        <ExclamationIcon className="w-4 h-4 text-red-700" />
                        <p className="text-red-700 font-medium text-base"> {emailError}</p>
                    </span>}
                </div>


                {/* Password */}
                <div className="space-y-3">
                    <p className="font-bold">Password</p>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className={passwordError ? 'border border-red-700 py-2 px-4 rounded-md w-[520px]' : "border border-gray-300 py-2 px-4 rounded-md w-[520px]"} />
                    {passwordError && <span className="flex space-x-2 items-center">
                        <ExclamationIcon className="w-4 h-4 text-red-700" />
                        <p className="text-red-700 font-medium text-base"> {passwordError}</p>
                    </span>}
                </div>
                <div className="space-y-3">
                    <p className="font-bold">Confirm Password</p>
                    <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" className={confirmPasswordError ? 'border border-red-700 py-2 px-4 rounded-md w-[520px]' : "border border-gray-300 py-2 px-4 rounded-md w-[520px]"} />
                    {confirmPasswordError && <span className="flex space-x-2 items-center">
                        <ExclamationIcon className="w-4 h-4 text-red-700" />
                        <p className="text-red-700 font-medium text-base"> {confirmPasswordError}</p>
                    </span>}
                </div>

                {/* Name */}
                <div className="space-y-3">
                    <p className="font-bold">What should we call you?</p>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" className={nameError ? 'border border-red-700 py-2 px-4 rounded-md w-[520px]' : "border border-gray-300 py-2 px-4 rounded-md w-[520px]"} />
                    {nameError ? <span className="flex space-x-2 items-center">
                        <ExclamationIcon className="w-4 h-4 text-red-700" />
                        <p className="text-red-700 font-medium text-base"> {nameError}</p>
                    </span> : <span><p className="font-medium">This appears on your profile</p></span>}
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
                        <label className="space-x-2 flex justify-center items-center">
                            <input
                                type="radio"
                                value="MALE"
                                checked={selectedOption === "MALE"}
                                onChange={handleRadioChange}
                            />
                            <span>
                                <p>Male</p>
                            </span>
                        </label>
                        <label className="space-x-2 flex justify-center items-center">
                            <input
                                type="radio"
                                value="FEMALE"
                                checked={selectedOption === "FEMALE"}
                                onChange={handleRadioChange}
                            />
                            <span>
                                <p>Female</p>
                            </span>
                        </label>
                        <label className="space-x-2 flex justify-center items-center">
                            <input
                                type="radio"
                                value="OTHERS"
                                checked={selectedOption === "OTHERS"}
                                onChange={handleRadioChange}
                            />
                            <span>
                                <p>Others</p>
                            </span>
                        </label>
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
                        onClick={onSubmit}>Sign Up</button>
                </div>

                <div className="flex justify-center" style={{ marginTop: '25px' }}>
                    <div className="font-bold">Have an account?{" "}
                        <span onClick={() => router.push('/login')} className="underline text-[#1DB954] hover:text-[#24eb6a] cursor-pointer font-bold"
                        >Log in</span></div>
                </div>
            </div>
        </div>
    )
}
