"use client"
import Footer from "../../components/Footer"
import Sidebar from "../../components/Sidebar"
import '../../styles/globals.css'


type Props = {
  children: React.ReactNode
}

export default function AppLayout({ children }: Props) {



  return (
    <>
      <div className="flex flex-col h-screen">
        <main className="flex h-screen" >
          {/* Sidebar */}
          <div className="w-56 h-screen bg-[#191414]" >
            <Sidebar />
          </div >
          {/* Main content */}
          <div className="flex-1 h-screen overflow-y-scroll" >
            {children}
          </div>
        </main>

        {/* Footer */}
        <footer className="fixed bottom-0 w-full h-[85px] bg-[#191414] border-t-[0.5px] border-gray-700/40 " >
          <Footer />
        </footer >
      </div >
    </>

  )
}
