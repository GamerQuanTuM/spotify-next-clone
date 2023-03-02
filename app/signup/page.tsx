import Image from "next/image"
import SpotifyBlackIcon from "../../public/Spotify_Logo_RGB_Black.png"
import { FcGoogle as GoogleIcon } from "react-icons/fc"
import { RiFacebookCircleFill as FacebookIcon } from "react-icons/ri"
import SigninForm from "../../components/SigninForm"


export default function Login() {
    return (
        <div className='flex items-center justify-center mb-24'>
            <div>
                <Image src={SpotifyBlackIcon} alt="Spotify Logo" height={100} width={150} className="mt-3 mx-auto" />

                <div className="mt-5 flex flex-col items-center">
                    <p className="font-bold text-3xl">Sign up for free to start listening</p>

                    <div className="mt-5 border border-gray-500 rounded-full p-5 px-24 font-bold flex items-center justify-center tracking-wider space-x-2
                    cursor-pointer ">
                        <GoogleIcon className="w-6 h-6" />
                        <p className="text-[#6a6a6a]">CONTINUE WITH GOOGLE</p>
                    </div>

                    <div className="mt-5 
                    bg-[#1476F4]
                    border border-gray-500 rounded-full p-5 px-24 font-bold flex items-center justify-center tracking-wider space-x-2 text-white cursor-pointer">
                        <FacebookIcon className="w-6 h-6" />
                        <p className="text-white">CONTINUE WITH FACEBOOK</p>
                    </div>

                    <div className="mt-5 flex items-center justify-center space-x-5 w-full ">
                        <div className="border-t border-[#a59e9e] w-[185px]"></div>
                        <span className="font-bold">OR</span>
                        <div className="border-t border-[#a59e9e] w-[185px]"></div>
                    </div>
                </div>
                <SigninForm />
            </div>
        </div>
    )
}
