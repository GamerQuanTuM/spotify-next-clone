"use client"
import { useState } from "react"
import Image from "next/image"
import {
  AiOutlineRight as RightIcon,
  AiOutlineLeft as LeftIcon,
  AiFillCaretDown as DownIcon,
  AiFillCaretUp as UpIcon
} from "react-icons/ai"

import ProfilePic from "../public/profile.jpg"
import Modal from "./Modal"

export default function Header() {
  const [modal, setModal] = useState(false)
  const handleModal = () => {
    setModal(!modal)
  }
  console.log(modal)
  return (
    <>
      <header className='flex justify-between h-16 text-white pr-80'>
        {/* Left and Right Arrow */}
        <div className="flex space-x-8 mt-4 ml-5">
          <LeftIcon className="w-8 h-8 rounded-full bg-gray-800/25 p-1" />
          <RightIcon className="w-8 h-8 rounded-full bg-gray-800/25 p-1" />
        </div>


        <div className="flex space-x-10">
          <button className="bg-transparent border border-gray-700 rounded-full px-3 my-4 h-[30px] hover:border-white transition duration-200 transform hover:scale-105">Explore Premium</button>

          <div className="bg-[#191414] flex items-center rounded-full px-1 my-4 h-[30px] font-bold space-x-2" onClick={handleModal}>
            <Image src={ProfilePic} alt="Profile" className="rounded-full w-6 h-6" />
            <p>Shuvam Santra</p>
            {!modal ? <DownIcon className="w-4 h-4" /> : <UpIcon className="w-4 h-4" />}
          </div>
        </div>
      </header>
      {modal && <Modal />}
    </>
  )
}
