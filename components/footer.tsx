import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Github, Linkedin, Mail, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="Kainat Fatima Logo"
                width={180}
                height={60}
                className="h-[80px] w-auto object-contain"
                priority
              />
            </div>      
            <p className="text-muted-foreground">Creative UX/UI Designer crafting engaging and user-friendly digital experiences</p>
            <div className="flex space-x-2">
              {/* LinkedIn */}
              <Button size="icon" variant="ghost" asChild>
                <Link
                  href="https://www.linkedin.com/in/kainat-fatima-b6a931243/"
                  target="_blank"
                >
                  <Linkedin className="h-4 w-4" />
                </Link>
              </Button>

              {/* Behance */}
              <Button size="icon" variant="ghost" asChild>
                <Link
                  href="https://www.behance.net/buttkainat"
                  target="_blank"
                >
                  <span className="font-bold text-sm">B</span>
                </Link>
              </Button>

              {/* Email */}
              <Button size="icon" variant="ghost" asChild>
                <Link href="mailto:buttknt@gmail.com">
                  <Mail className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-blue">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-blue">
                  About
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-muted-foreground hover:text-blue">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-blue">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-muted-foreground">buttknt@gmail.com</span>
              </li>
              <li>
                <span className="text-muted-foreground">+92 3114020461</span>
              </li>
              <li>
                <span className="text-muted-foreground">Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Kainat Fatima. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}