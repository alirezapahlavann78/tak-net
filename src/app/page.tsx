import Image from "next/image"
import Link from "next/link"
import HomeClient from '@/components/HomeClient/HomeClient'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <HomeClient/>
    </main>
  )
}
