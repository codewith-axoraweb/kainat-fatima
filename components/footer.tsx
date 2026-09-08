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
                src="/aisha.png"
                alt="Aisha Raouf Logo"
                width={180}
                height={60}
                className="h-[80px] w-auto object-contain"
                priority
              />
            </div>      
            <p className="text-muted-foreground">Crafted with clarity by your dedicated Content Writer</p>
 <div className="flex space-x-2">
                {/* LinkedIn */}
                <Button size="icon" variant="ghost" asChild>
                  <Link
                    href="https://www.linkedin.com/in/ayeshanlpcontentwriter"
                    target="_blank"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Link>
                </Button>

                {/* Medium */}
                <Button size="icon" variant="ghost" asChild>
                  <Link
                    href="https://medium.com/@aisharaouf230"
                    target="_blank"
                  >
                    <span className="font-bold text-sm">M</span>
                  </Link>
                </Button>

                {/* Email */}
                <Button size="icon" variant="ghost" asChild>
                  <Link href="mailto:aisharaouf230@gmail.com">
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
                <span className="text-muted-foreground">  aisharaouf230@gmail.com</span>
              </li>
              <li>
                <span className="text-muted-foreground"> +92 3284300399 
</span>
              </li>
              <li>
                <span className="text-muted-foreground">Dunyapur, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()}  Aisha Raouf. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
