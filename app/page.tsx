import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <>
  <div className="bg-slate-400 text-xl text-white">
    <h1>Hello world</h1>
  </div>
  </>
  )
}
