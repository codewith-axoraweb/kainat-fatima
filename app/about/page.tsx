import Image from "next/image"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { Badge } from "@/components/ui/badge"

import { Progress } from "@/components/ui/progress"

import { Header } from "@/components/header"

import { Footer } from "@/components/footer"

import { Award, GraduationCap, Briefcase } from "lucide-react"

import type { Metadata } from "next"

import { DownloadResumeButton } from "@/components/DownloadResumeButton"

export const metadata: Metadata = {

title: "About Kainat Fatima - UX/UI Designer",

description:
"Learn about Kainat Fatima, a creative and results-driven UX/UI Designer with over 4 years of experience crafting engaging user experiences for web and mobile platforms.",

keywords: [
"Kainat Fatima",
"UX/UI Designer",
"UI UX Designer",
"User-Centered Design",
"Wireframing",
"Prototyping",
"User Research",
"Information Architecture",
"Interaction Design",
"Visual Design",
"Accessibility",
"Design Systems",
"Figma",
"Illustrator",
"Canva",
"InDesign",
"Sketch",
"Social Media Design",
"Project Management",
],

authors: [{ name: "Kainat Fatima" }],

openGraph: {

title: "About Kainat Fatima - UX/UI Designer",

description:
"Discover Kainat Fatima's experience in UX/UI design, user research, wireframing, prototyping, design systems, visual design, and cross-functional collaboration.",

type: "website",

url: "https://storycup.vercel.app/about",

images: [
{
url: "/aboutme.webp",
width: 1200,
height: 630,
alt: "Kainat Fatima - UX/UI Designer",
},
],

siteName: "Kainat Fatima Portfolio",

},

twitter: {

card: "summary_large_image",

title: "About Kainat Fatima - UX/UI Designer",

description:
"Learn about Kainat Fatima's experience in UX/UI design, user research, wireframing, prototyping, design systems, and visual design.",

images: ["/aboutme.webp"],

},

alternates: {

canonical: "https://storycup.vercel.app/about",

},

robots: {

index: true,

follow: true,

googleBot: {

index: true,

follow: true,

"max-video-preview": -1,

"max-image-preview": "large",

"max-snippet": -1,

},

},

other: {

"application/ld+json": JSON.stringify({

"@context": "https://schema.org",

"@type": "Person",

name: "Kainat Fatima",

jobTitle: "UX/UI Designer",

url: "https://storycup.vercel.app/about",

description:
"Kainat Fatima is a creative and results-driven UX/UI Designer with over 4 years of experience crafting engaging user experiences for web and mobile platforms, specializing in user-centered design, wireframing, interactive prototyping, and cross-functional collaboration.",

}),

},

}

export default function AboutPage() {

return (

<div className="min-h-screen bg-background">

<Header />

<div className="container mx-auto px-4 py-12">

    {/* Hero Section */}
    <section className="text-center mb-16">
      <div className="relative w-32 h-32 mx-auto mb-6">
        <Image
          src="/kinat.png"
          alt="Kainat Fatima"
          fill
          className="rounded-full border-4 border-primary/20"
        />
      </div>

      <h1 className="text-4xl lg:text-5xl font-bold mb-4">
        About Me
      </h1>

      <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
        I'm Kainat Fatima, a creative and results-driven UX/UI Designer
        with a Computer Science background and over 4 years of experience
        crafting engaging user experiences for web and mobile platforms.
        I specialize in user-centered design, wireframing, interactive
        prototyping, user research, and creating user-friendly interfaces
        that improve usability and business outcomes.
      </p>

      <DownloadResumeButton />
    </section>

    {/* Professional Journey */}
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Professional Journey
      </h2>

      <div className="space-y-8">

        {/* 360 Webtech */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>

              <div>
                <CardTitle>UI/UX Designer & Social Media Manager</CardTitle>
                <p className="text-muted-foreground">
                  360 Webtech • Dec 2025 - July 2026 • Remote
                </p>
              </div>
            </div>
          </CardHeader>

          <CardContent>
            <p className="text-muted-foreground">
              Designed clean and user-friendly website UI layouts, created
              logos and brand guideline materials, and designed social media
              posts and marketing graphics.
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              <Badge variant="secondary">UI/UX Design</Badge>
              <Badge variant="secondary">Website UI</Badge>
              <Badge variant="secondary">Logo Design</Badge>
              <Badge variant="secondary">Brand Guidelines</Badge>
              <Badge variant="secondary">Social Media Design</Badge>
              <Badge variant="secondary">Marketing Graphics</Badge>
            </div>
          </CardContent>
        </Card>

        {/* SMCSE */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>

              <div>
                <CardTitle>UI/UX Designer & Junior Project Manager</CardTitle>
                <p className="text-muted-foreground">
                  SMCSE • Dec 2024 - Continue • Remote
                </p>
              </div>
            </div>
          </CardHeader>

          <CardContent>
            <p className="text-muted-foreground">
              Led UX research initiatives to define user pain points and
              behavioral patterns. Designed user flows, wireframes, and
              high-fidelity prototypes while maintaining a centralized
              design system. Collaborated with cross-functional teams and
              supported project planning and agile tracking to ensure
              deliverables met timelines.
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              <Badge variant="secondary">UX Research</Badge>
              <Badge variant="secondary">User Flows</Badge>
              <Badge variant="secondary">Wireframing</Badge>
              <Badge variant="secondary">High-Fidelity Prototypes</Badge>
              <Badge variant="secondary">Design Systems</Badge>
              <Badge variant="secondary">Project Planning</Badge>
              <Badge variant="secondary">Agile Tracking</Badge>
            </div>
          </CardContent>
        </Card>

        {/* EYE4TECH */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>

              <div>
                <CardTitle>UI/UX Designer & Social Media Manager</CardTitle>
                <p className="text-muted-foreground">
                  EYE4TECH • Jan 2024 - Nov 2024 • Onsite
                </p>
              </div>
            </div>
          </CardHeader>

          <CardContent>
            <p className="text-muted-foreground">
              Developed clean and engaging UI components across mobile and
              web platforms. Designed and maintained brand-aligned assets
              for social media campaigns, created visual templates and
              motion content, managed content calendars, and collaborated
              with marketing and product teams to optimize user engagement.
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              <Badge variant="secondary">Mobile UI</Badge>
              <Badge variant="secondary">Web UI</Badge>
              <Badge variant="secondary">Social Media Design</Badge>
              <Badge variant="secondary">Motion Content</Badge>
              <Badge variant="secondary">Content Calendars</Badge>
              <Badge variant="secondary">Brand Assets</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Software Alliance */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>

              <div>
                <CardTitle>UI/UX Designer</CardTitle>
                <p className="text-muted-foreground">
                  Software Alliance • Oct 2022 - Sept 2023 • Onsite
                </p>
              </div>
            </div>
          </CardHeader>

          <CardContent>
            <p className="text-muted-foreground">
              Assisted in user research and usability testing to guide
              iterative design processes. Created personas, wireframes,
              prototypes, and final UI designs. Delivered design
              presentations to internal teams and stakeholders and
              contributed to design documentation to streamline development
              cycles.
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              <Badge variant="secondary">User Research</Badge>
              <Badge variant="secondary">Usability Testing</Badge>
              <Badge variant="secondary">Personas</Badge>
              <Badge variant="secondary">Wireframes</Badge>
              <Badge variant="secondary">Prototypes</Badge>
              <Badge variant="secondary">UI Design</Badge>
              <Badge variant="secondary">Design Documentation</Badge>
            </div>
          </CardContent>
        </Card>

      </div>
    </section>

    {/* Skills */}
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Skills & Tools
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* UX/UI Design */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              UX/UI Design
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">

            <div>
              <div className="flex justify-between mb-2">
                <span>User-Centered Design</span>
                <span>95%</span>
              </div>
              <Progress value={95} />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span>Wireframing & Prototyping</span>
                <span>95%</span>
              </div>
              <Progress value={95} />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span>Interaction & Visual Design</span>
                <span>95%</span>
              </div>
              <Progress value={95} />
            </div>

          </CardContent>
        </Card>

        {/* Research & Design Systems */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Research & Design Systems
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">

            <div>
              <div className="flex justify-between mb-2">
                <span>User Research & Testing</span>
                <span>90%</span>
              </div>
              <Progress value={90} />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span>Information Architecture</span>
                <span>90%</span>
              </div>
              <Progress value={90} />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span>Design Systems</span>
                <span>90%</span>
              </div>
              <Progress value={90} />
            </div>

          </CardContent>
        </Card>

        {/* Design Tools */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              Design Tools
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">

            <div>
              <div className="flex justify-between mb-2">
                <span>Figma</span>
                <span>95%</span>
              </div>
              <Progress value={95} />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span>Illustrator</span>
                <span>90%</span>
              </div>
              <Progress value={90} />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span>Canva</span>
                <span>90%</span>
              </div>
              <Progress value={90} />
            </div>

          </CardContent>
        </Card>

      </div>

      {/* Additional Skills */}
      <div className="flex flex-wrap gap-2 justify-center mt-8">
        <Badge variant="secondary">User-Centered Design (UCD)</Badge>
        <Badge variant="secondary">Wireframing & Prototyping</Badge>
        <Badge variant="secondary">User Research & Testing</Badge>
        <Badge variant="secondary">Information Architecture (IA)</Badge>
        <Badge variant="secondary">Interaction & Visual Design</Badge>
        <Badge variant="secondary">Accessibility & Inclusive Design</Badge>
        <Badge variant="secondary">Design Systems & Style Guides</Badge>
        <Badge variant="secondary">Project Coordination & Management</Badge>
        <Badge variant="secondary">Cross-Functional Collaboration</Badge>
        <Badge variant="secondary">Task & Resource Management</Badge>
        <Badge variant="secondary">Documentation & Reporting</Badge>
        <Badge variant="secondary">Stakeholder Communication</Badge>
        <Badge variant="secondary">Quality Assurance Support</Badge>
        <Badge variant="secondary">Figma</Badge>
        <Badge variant="secondary">Illustrator</Badge>
        <Badge variant="secondary">Canva</Badge>
        <Badge variant="secondary">InDesign</Badge>
        <Badge variant="secondary">Sketch</Badge>
      </div>
    </section>

    {/* Education & Certifications */}
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Education & Certifications
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        {/* Bachelor's in Computer Science */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>

              <div>
                <CardTitle>Bachelors of Computer Science</CardTitle>
                <p className="text-muted-foreground">
                  Superior University • 2019 - 2023
                </p>
              </div>
            </div>
          </CardHeader>

          <CardContent>
            <p className="text-muted-foreground">
              Bachelors of Computer Science from Superior University,
              completed from 2019 to 2023.
            </p>
          </CardContent>
        </Card>

        {/* Design Tools */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Award className="h-6 w-6 text-primary" />
              </div>

              <div>
                <CardTitle>Design Tools</CardTitle>
                <p className="text-muted-foreground">
                  Professional Design Skills
                </p>
              </div>
            </div>
          </CardHeader>

          <CardContent>
            <div className="space-y-2 text-muted-foreground">
              <p>• Figma</p>
              <p>• Illustrator</p>
              <p>• Canva</p>
              <p>• InDesign</p>
              <p>• Sketch</p>
            </div>
          </CardContent>
        </Card>

      </div>
    </section>

    {/* Personal Interests */}
    <section>
      <h2 className="text-3xl font-bold mb-8 text-center">
        Beyond the Design
      </h2>

      <Card>
        <CardContent className="p-8">
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
            I focus on creating user-centered digital experiences that
            combine usability, accessibility, visual design, and business
            goals. I enjoy collaborating with cross-functional teams and
            transforming complex problems into elegant, user-friendly
            interfaces.
          </p>
        </CardContent>
      </Card>
    </section>

  </div>

  <Footer />
</div>
)

}