import Image from 'next/image'
import { FaBeer } from "react-icons/fa";
import { FaSquareInstagram,FaDiscord,FaGithub } from "react-icons/fa6";
import "./globals.css";


export default function Home() {
  return (
    <div className='bg-gradient-to-r from-greena to-greenb'>
      {/* nanvbar goes here */}
      <nav>
        <div className='flex '>
          {/* logo */}
        <div className='  mx-auto my-5 text-5xl'>InfoBrains</div>
          <div className='mx-auto my-5 mt-auto lg:text-lg'><ul className='flex space-x-28 hover:cursor-pointer'>
            <li>Home</li>
            <li>Team</li>
            <li>Events</li>
            <li>About Us</li> 
            </ul></div>
        </div>
      </nav> 
      <main> 
        <section className='min-h-screen flex justify-center items-center'>
          <h1 className='font-Neto text-4xl'>InfoBrains</h1>
          
          <h1 className='text-4xl ml-5'>a club that matters</h1>
        </section>
        <section className='min-h-screen flex  justify-evenly items-center content-center '>
            <FaGithub className='w-40 h-40 hover:scale-150 ease-in-out duration-300 cursor-pointer'/>
            <FaDiscord className='w-40 h-40 hover:scale-150 ease-in-out duration-300 cursor-pointer'/>
            <FaSquareInstagram className='w-40 h-40 hover:scale-150 ease-in-out duration-300 cursor-pointer' />
            <download/>
        </section>
      </main>
    </div>
  )
}
