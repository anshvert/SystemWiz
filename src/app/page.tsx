import Navbar from '@/components/Navbar/Navbar'
import Sidebar from '@/components/Sidebar/Sidebar'
import Content from '@/components/Content/Content'
import { options } from "@/app/api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import { useEffect, useState } from 'react'
import ClientPage from './client/page'

export default async function Home() {
  return (
    <ClientPage/>
  )
    
}
