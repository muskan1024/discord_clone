import Image from 'next/image'
import { Inter } from 'next/font/google'
import Login from '@/components/Login'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-cyan-600 h-screen w-screen absolute'>
      <Login />
    </div>
  )
}
