import { socialLinks } from "@/lib/constants"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { Lobster } from "next/font/google"

const lobster = Lobster({ subsets: ['latin'], weight: ['400'] })


const Hero = () => {
    return (
        <main className="h-screen">
            <div className="flex h-full items-center p-5">
                <div className="flex-1 space-y-4 text-center sm:text-start">
                    <h1 className="text-2xl font-extrabold uppercase text-primary sm:text-3xl lg:text-4xl">Your Growth Partner</h1>
                    <h3 className={cn(lobster.className, "md:text-2xl text-xl font-semibold")}>A Futuristic Marketing Agency</h3>
                    <p>We are a group of exited people who help Brands and Creators get bigger by unlocking the potential of Social Media</p>
                    <div className="flex justify-center gap-x-3 sm:justify-start">
                        {
                            socialLinks.map(({ href, icon: Icon }) => (
                                <a href={href} key={href} className="">
                                    <Icon size={25} className="transition-colors hover:text-primary" />
                                </a>
                            ))
                        }
                    </div>

                    <div className="flex justify-center gap-x-3 sm:justify-start">
                        <a href="#" className="rounded-lg border-2 border-black px-3 py-2 transition-colors hover:bg-primary-dark hover:text-[#eee]">Contact US</a>
                        <a href="#" className="rounded-lg border-2 border-black px-3 py-2 transition-colors hover:bg-primary-dark hover:text-[#eee]">Download Brochure</a>
                    </div>
                </div>
                <div className="relative hidden h-[80%] flex-1 sm:block">
                    <Image src="/hero-image.png" fill alt="hero-image" className="object-contain" />
                </div>
            </div>
        </main>
    )
}

export default Hero