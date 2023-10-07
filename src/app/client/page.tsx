'use client'
import Content from "@/components/Content/Content"
import Navbar from "@/components/Navbar/Navbar"
import Sidebar from "@/components/Sidebar/Sidebar"
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"

export default function ClientPage() {
    const { data: session} = useSession({
        required: true,
        onUnauthenticated() {
            redirect("/api/auth/signin?callbackUrl=/client")
        },
    })
    console.log(session)
    return (
         <>
            <Navbar />
            <div className='flex ml-5 mt-20 mb-10 p-1'>
                <Sidebar />
                <Content/>
            </div>
        </>
    )
}