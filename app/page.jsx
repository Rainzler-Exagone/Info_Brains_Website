"use client"
import Image from 'next/image'
import { FaBeer } from "react-icons/fa";
import { FaSquareInstagram,FaDiscord,FaGithub,FaFacebook } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import "./globals.css";
import "./scroll"
import { useEffect } from 'react';
import localFont from '@next/font/local'
import { Lato } from 'next/font/google';
import logo from '../app/assets/IB_x_FAC_ver2.png'


export default function Home() {
  // const myFont = localFont({src : './assets/fonts/Easter.ttf'})
//  useLayoutEffect(() => {
//   window.addEventListener('scroll', onScroll)
//   return () => window.removeEventListener('scroll', onScroll)
// }, [])
// const topPosition = ourRef.current.getBoundingClientRect().top
// const onScroll = () => {
//   const scrollPosition = window.scrollY + window.innerHeight
//   if (topPosition < scrollPosition) {
//     // trigger animation
//   }
// }
        // const [loaded] = useFonts({
        //   Easter: require("./assets/fonts/Easter.ttf")
        // });
        // if (!loaded) {
        //   return null
        // } 

  return (
    <div className='bg-gradient-to-r from-bluea to-blueb text-white'>
      {/* nanvbar goes here */}
      <nav>
        <div className='flex '>
          {/* logo */}
        <div className=' flex mx-auto my-5 text-5xl'>
          <Image src={logo} className='w-10 h-10 mt-1 mr-5'></Image>
          InfoBrains
          </div>
          <div className='mx-auto my-5 mt-auto lg:text-lg'><ul className='flex space-x-28 hover:cursor-pointer text-white'>
            <li>Home</li>
            <li>Team</li>
            <li>Events</li>
            <li>About Us</li> 
            </ul></div>
        </div>
      </nav> 
      <main> 
        <section  className='min-h-screen flex justify-center items-center'>
          <h1 className='font-Neto text-4xl text-white'>YOU CAN MAKE A DIFFERENCE</h1>
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
