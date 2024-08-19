import { socialLinks } from '@/lib/constants'
import { cn } from '@/lib/utils'

import { Lobster } from "next/font/google"

const lobster = Lobster({ subsets: ['latin'], weight: ['400'] })


const Footer = () => {
  return (
    <footer id='contact-us' className='mt-3 bg-white p-4'>
      <h2 className='mb-2 text-center text-4xl font-bold'>CONTACT US</h2>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <h4 className='text-center text-xl font-bold uppercase'><span>Let's</span> Talk Ideas</h4>

      <div className='mx-auto flex max-w-6xl flex-col items-center justify-center gap-y-3 px-4 sm:flex-row sm:justify-between'>
        <div className='space-y-5 text-center sm:space-y-3 sm:text-start'>
          <h5 className={cn(lobster.className, "font-bold text-2xl")}>Email</h5>
          <p><a href="mailto:amaan@yourgrowthpartner.in">amaan@yourgrowthpartner.in</a></p>
          <h5 className={cn(lobster.className, "font-bold text-2xl")}>Fill Our Contact Form</h5>
          <p>
            <a href="https://docs.google.com/forms/d/1maHLjZGY7aF7avegjZ3LXQ_yNCZStphhe5JFiqv0Lfw/edit" className='rounded-lg border-2 px-3 py-2 transition-colors hover:bg-primary-dark hover:text-white' target='_blank'>
              CONTACT US
            </a>
          </p>
          <div className="flex justify-center gap-x-3 sm:justify-start">
            {
              socialLinks.map(({ href, icon: Icon }) => (
                <a href={href} key={href} className="">
                  <Icon size={25} className="transition-colors hover:text-primary" />
                </a>
              ))
            }
          </div>
        </div>
          <div className=''>
            <img src="/contact-bg.png" alt="" className='w-[150px] sm:w-[250px]' />
          </div>
      </div>
      <div className='text-center'>
        <h6 className='font-bold'>© 2024 <span>AMAAN SHAIKH</span></h6>
        <p className='font-semibold'>ALL RIGHTS RESERVED</p>
      </div>
    </footer>
  )
}

export default Footer