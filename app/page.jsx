"use client"
import Image from 'next/image'
import { FaBeer } from "react-icons/fa";
import { FaSquareInstagram,FaDiscord,FaGithub,FaFacebook } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import "./globals.css";
import "./scroll"
import { useEffect } from 'react';
import localFont from "next/font/local"
import { Noto_Sans } from 'next/font/google';
import logo from '../app/assets/IB_x_FAC_ver2.png'

const noto = Noto_Sans({subsets: ['latin'],weight: '100'})
const myFont = localFont({src: '../app/assets/fonts/Easter.ttf'})
export default function Home() {
 

       

  return (
    <div className='bg-gradient-to-r from-blueb to-bluea text-white'>
      {/* nanvbar goes here */}
      <nav>
        <div className='flex '>
          {/* logo */}
        <div className=' flex mx-auto my-5 text-5xl'>
          <Image src={logo} className='h-10 w-10 mt-4 mr-6 text-white'></Image>
          <h1 className='text-white text-4xl flex justify-center mt-5' style={noto.style}>InfoBrains</h1>
          </div>
          <div className='mx-auto my-5 mt-auto lg:text-lg'><ul className='flex space-x-24 hover:cursor-pointer text-white '>
            <li>Home</li>
            <li>Team</li>
            <li>Events</li>
            <li>About Us</li> 
            </ul></div>
        </div>
      </nav> 
      <main> 
        <section  className='min-h-screen flex justify-center items-center text-6xl'>
          <h1 className={myFont.className}>YOU CAN MAKE A DIFFERENCE</h1>
        </section>
        <section id="contacts" className='min-h-screen flex  justify-evenly items-center content-center '>
            <FaGithub id='Git' className='w-40 h-40 hover:scale-150 ease-in-out duration-300 cursor-pointer'/>
            <FaDiscord className='w-40 h-40 hover:scale-150 ease-in-out duration-300 cursor-pointer'/>
            {/* <FaSquareInstagram className='w-40 h-40 hover:scale-150 ease-in-out duration-300 cursor-pointer' /> */}
            <FaFacebook className='w-40 h-40 hover:scale-150 ease-in-out duration-300 cursor-pointer'/>
            <FaTiktok  className='w-40 h-40 hover:scale-150 ease-in-out duration-300 cursor-pointer'/>
        </section>
      </main>
    </div>
  )
}
