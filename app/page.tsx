import { Inter } from 'next/font/google'


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
