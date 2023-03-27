import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from './Header'
import $ from 'jquery'
import PresentationLetter from './PresentationLetter'
import Experience from './Experience'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header />
      <PresentationLetter />
      <Experience />
    </>
  )
}
