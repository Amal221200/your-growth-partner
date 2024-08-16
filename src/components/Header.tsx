import { navLinks } from "@/lib/constants"
import Link from "next/link"


const Header = () => {
  return (
    <header className="fixed left-[50%] top-5 max-w-xl -translate-x-[50%] rounded-3xl border border-primary-dark px-4 py-3">
        <nav className="flex gap-x-3">
          {
              navLinks.map(navLink => (
                <Link href={navLink.href} key={navLink.href}>
                    {navLink.label}
                </Link>
              ))
          }
        </nav>
    </header>
  )
}

export default Header