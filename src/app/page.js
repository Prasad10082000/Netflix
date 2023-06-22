import Image from 'next/image'
import styles from './page.module.css'
import HeroSection from './components/header/HeroSection'

export default function Home() {
  return (
    <>
      <HeroSection title={"LET'S WATCH MOVIE TOGETHER"} imgUrl={"/home.svg"} />
    </>
  )
}
