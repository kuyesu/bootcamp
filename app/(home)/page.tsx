import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex w-full h-full flex-col items-center justify-start p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm flex">
        <p className=" flex text-orange-500 text-lg w-full justify-center  pb-6 pt-8   ">
          Welcome
          <span className="font-mono font-bold px-4 ">Hero!</span>
        </p>
      </div>
      <div className="relative flex place-items-center py-8 ">
        <Image src="/team.svg" alt="hero" width={500} height={500} />
      </div>

      <div className=" grid text-center justify-center py-28">
        <Link href="/about" className='text-sm text-cyan-500'>Let{'\''}s get started</Link>
      </div>
    </main>
  )
}
