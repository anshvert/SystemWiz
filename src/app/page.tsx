import Navbar from '@/components/Navbar/Navbar'
import Sidebar from '@/components/Sidebar/Sidebar'
import Content from '@/components/Content/Content'

export default function Home() {
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
