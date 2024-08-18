"use client"
import { navLinks } from "@/lib/constants"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"


const Header = () => {
  const pathname = usePathname()
  return (
    <header className="fixed left-[50%] top-5 z-[100] max-w-xl -translate-x-[50%] rounded-3xl border border-primary-dark px-4 py-3 backdrop-blur">
        <nav className="flex gap-x-3">
          {
              navLinks.map(navLink => (
                <Link href={navLink.href} key={navLink.href} className={cn(pathname === navLink.href && "text-primary-medium")}>
                    {navLink.label}
                </Link>
              ))
          }
        </nav>
    </header>
  )
}

export default Header