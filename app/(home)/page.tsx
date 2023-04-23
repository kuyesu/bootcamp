import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex w-full h-full flex-col items-center md:justify-start justify-between md:p-24 ">
      <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm flex">
        <p className=" flex text-orange-500 text-lg w-full justify-center  pb-6 pt-8   ">
          Welcome
          <span className="font-mono font-bold px-4 ">Hero!</span>
        </p>
      </div>
      <div className="flex place-items-center py-8 ">
        <Image src="/team.svg" alt="hero" width={500} height={500} />
      </div>

      <div className="flex text-center justify-center pt-28 pb-8">
        <Link href="/about" className="text-sm inline-flex items-center text-cyan-500">
          Let{"'"}s get started
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 ml-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </Link>
      </div>
    </main>
  );
}
