import Image from "next/image"
import SpotifyBlackIcon from "../public/Spotify_Logo_RGB_Black.png"
import { FcGoogle as GoogleIcon } from "react-icons/fc"
import { RiFacebookCircleFill as FacebookIcon } from "react-icons/ri"

export default function Login() {
    return (
        <div className='flex items-center justify-center'>
            <div>
                <Image src={SpotifyBlackIcon} alt="Spotify Logo" height={100} width={150} className="mt-3 mx-auto" />
                <hr className="w-screen h-[1px] text-gray-200 mt-5" />

                <div className="mt-5 flex flex-col items-center">
                    <p className="font-bold">To continue, log in to Spotify.</p>

                    <div className="mt-5 border border-gray-500 rounded-full p-5 px-36 font-bold flex items-center justify-center tracking-wider space-x-2
                    cursor-pointer ">
                        <GoogleIcon className="w-6 h-6" />
                        <p className="text-[#6a6a6a]">CONTINUE WITH GOOGLE</p>
                    </div>

                    <div className="mt-5 
                    bg-[#1476F4]
                    border border-gray-500 rounded-full p-5 px-[140px] font-bold flex items-center justify-center tracking-wider space-x-2 text-white cursor-pointer">
                        <FacebookIcon className="w-6 h-6" />
                        <p className="text-white">CONTINUE WITH FACEBOOK</p>
                    </div>

                    <div className="mt-5 flex items-center justify-center space-x-5 w-full ">
                        <div className="border-t border-[#a59e9e] w-[225px]"></div>
                        <span className="font-bold">OR</span>
                        <div className="border-t border-[#a59e9e] w-[225px]"></div>
                    </div>
                </div>

                <div className="w-screen mt-5 space-y-3">
                    <div className="mx-[510px] space-y-3">
                        <div className="space-y-3">
                            <p className="font-bold">Email address or username</p>
                            <input type="text" className="border border-gray-300 py-2 px-4 rounded-md w-[520px]" />
                        </div>
                        <div className="space-y-3">
                            <p className="font-bold">Password</p>
                            <input type="text" className="border border-gray-300 py-2 px-4 rounded-md w-[520px]" />
                        </div>

                        <div className="flex justify-between items-center">
                            <div className="space-y-4">
                                <p className="font-medium underline cursor-pointer hover:text-[#1DB954]">Forgot your password?</p>
                                <div className="flex space-x-3 items-center">
                                    <input type="checkbox" className="form-checkbox w-4 h-4" />
                                    <p className="text-sm font-medium">Remember Me</p>
                                </div>
                            </div>
                            <div className="mt-2">
                                <button className="bg-[#1DB954] py-3 px-8 rounded-full font-bold">LOG IN</button>
                            </div>
                        </div>
                        <div className="border-t border-[#a59e9e] w-[100%]" style={{ marginTop: '20px' }}></div>
                        <div className="flex flex-col justify-center items-center space-y-3">
                            <p className="text-xl font-bold ">Don't have an account?</p>
                            <button className="mt-5 border border-gray-500 rounded-full p-3 px-36 font-bold flex items-center justify-center tracking-wider space-x-2 text-gray-600
                             cursor-pointer">SIGN UP FOR SPOTIFY</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
