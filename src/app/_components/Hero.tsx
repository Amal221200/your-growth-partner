"use client"
import { socialLinks } from "@/lib/constants"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { Lobster } from "next/font/google"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const lobster = Lobster({ subsets: ['latin'], weight: ['400'] })

const Hero = () => {
    useGSAP(() => {
        gsap.to('#main-title', { y: 0, opacity: 1, duration: 1 })
        gsap.to('#subtitle', { y: 0, opacity: 1, duration: 1 })
        gsap.to('#description', { y: 0, opacity: 1, duration: 1 })
        gsap.to('#socials', { y: 0, opacity: 1, duration: 1 })
        gsap.to('#contact', { y: 0, opacity: 1, duration: 1 })
        gsap.to('.fade-in-top',{ y: 0, opacity: 1, duration: 1, delay: 1 })
    }, [])
    return (
        <main id="home" className="h-screen overflow-hidden">
            <div className="flex h-full items-center p-5">
                <div className="flex-1 space-y-4 text-center sm:text-start">
                    <h1 id="main-title" className="fade-in text-2xl font-extrabold uppercase text-primary sm:text-3xl lg:text-4xl ">Your Growth Partner</h1>
                    <h3 id="subtitle" className={cn(lobster.className, "fade-in md:text-2xl text-xl font-semibold")}>A Futuristic Marketing Agency</h3>
                    <p id="description" className="fade-in">We are a group of exited people who help Brands and Creators get bigger by unlocking the potential of Social Media</p>
                    <div id="socials" className="fade-in flex justify-center gap-x-3 sm:justify-start">
                        {
                            socialLinks.map(({ href, icon: Icon }) => (
                                <a href={href} key={href}>
                                    <Icon size={25} className="transition-colors hover:text-primary" />
                                </a>
                            ))
                        }
                    </div>

                    <div id="contact" className="fade-in flex justify-center gap-x-3 sm:justify-start">
                        <a href="#contact-us" className="rounded-lg border-2 border-black px-3 py-2 transition-colors hover:bg-primary-dark hover:text-[#eee]">Contact US</a>
                        <a href="/brochure.pdf" download className="rounded-lg border-2 border-black px-3 py-2 transition-colors hover:bg-primary-dark hover:text-[#eee]">Download Brochure</a>
                    </div>
                </div>
                <div id="image" className="relative hidden fade-in-top h-[80%] flex-1 sm:block">
                    <Image src="/hero-image.png" fill alt="hero-image" className="object-contain" />
                </div>
            </div>
        </main>
    )
}

export default Hero