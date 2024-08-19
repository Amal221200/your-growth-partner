"use client"
import { navLinks } from "@/lib/constants"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"


const Header = () => {
  const pathname = usePathname()
  
  return (
    <header className="fixed left-[50%] top-5 z-[100] -translate-x-[50%] rounded-3xl border border-primary-dark px-4 py-3 backdrop-blur">
        <nav className="flex gap-x-6 md:gap-y-3">
          {
              navLinks.map(({href, label,icon:Icon}) => (
                <Link href={href} key={label} className={cn(pathname === href && "text-primary-medium")}>
                    <span className="hidden text-sm md:inline lg:text-base">{label}</span>
                    <Icon className="inline md:hidden" />
                </Link>
              ))
          }
        </nav>
    </header>
  )
}

export default Header