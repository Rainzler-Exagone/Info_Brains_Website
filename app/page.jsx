import Image from 'next/image'
import { FaBeer } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";

export default function Home() {
  return (
    <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
      {/* nanvbar goes here */}
      <nav>
        <div className='flex '>
          {/* logo */}
        <div className='  mx-auto my-5 text-5xl'>InfoBrains</div>
          <div className='mx-auto my-5 '><ul className='flex space-x-28 '>
            <li>Home</li>
            <li>Team</li>
            <li>Events</li>
            <li>About Us</li>
            </ul></div>
        </div>
      </nav>
      <main>
        <section className='min-h-screen '>
            <FaDiscord/>
        </section>
      </main>
    </div>
  )
}
