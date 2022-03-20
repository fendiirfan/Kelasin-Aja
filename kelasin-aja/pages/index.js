import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/header/Navbar'
import Sidebar from '../components/sidebar/Sidebar'

export default function Home() {
  return (
    <div className="bg-slate-200">
      <Navbar/>
      <div className='flex'>
      <Sidebar/>
      </div>
    </div>
  )
}
