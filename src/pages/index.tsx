import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from './Header'
import $ from 'jquery'
import PresentationLetter from './PresentationLetter'
import Experience from './Experience'
import Skills from './Skills'
import Contact from './Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header />
      <div className="lg:w-4/5 lg:m-auto lg:flex lg:content-center lg:items-center">
        <PresentationLetter />
        <Skills />
      </div>
      <Experience />
      <Contact />
    </>
  )
}
