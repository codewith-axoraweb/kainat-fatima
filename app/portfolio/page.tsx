
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ExternalLink } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kainat Fatima's Portfolio - UX/UI Designer & Social Media Manager",
  description:
    "Explore Kainat Fatima's professional portfolio featuring UX/UI design, web and mobile interface design, branding, social media design, wireframing, prototyping, and visual design.",
  keywords: [
    "Kainat Fatima portfolio",
    "Kainat Fatima UX UI Designer",
    "UX UI Designer portfolio",
    "UI UX Design",
    "Figma Designer",
    "Web Design",
    "Mobile App Design",
    "Brand Identity Design",
    "Social Media Design",
    "Graphic Design",
    "Wireframing",
    "Prototyping",
    "User Research",
    "Visual Design",
  ],
  authors: [{ name: "Kainat Fatima" }],
  openGraph: {
    title: "Kainat Fatima's Portfolio - UX/UI Designer & Social Media Manager",
    description:
      "View Kainat Fatima's professional portfolio showcasing UX/UI design, branding, social media graphics, web design, mobile design, and visual design.",
    type: "website",
    url: "https://www.behance.net/buttkainat",
    images: [
      {
        url: "/Portfolio 1.png",
        width: 1200,
        height: 630,
        alt: "Kainat Fatima UX/UI Design Portfolio",
      },
    ],
    siteName: "Kainat Fatima Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kainat Fatima's Portfolio - UX/UI Designer & Social Media Manager",
    description:
      "Discover Kainat Fatima's portfolio featuring UX/UI design, branding, social media design, web and mobile interfaces.",
    images: ["/Portfolio 1.png"],
  },
  alternates: {
    canonical: "https://www.behance.net/buttkainat",
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
      "@type": "CreativeWork",
      name: "Kainat Fatima's UX/UI Design Portfolio",
      author: {
        "@type": "Person",
        name: "Kainat Fatima",
        jobTitle: "UX/UI Designer",
      },
      url: "https://www.behance.net/buttkainat",
      sameAs: [
        "https://www.behance.net/buttkainat",
        "https://www.linkedin.com/in/kainat-fatima-b6a931243/",
      ],
      description:
        "Kainat Fatima's portfolio showcases UX/UI design, web and mobile interface design, branding, social media design, wireframing, prototyping, and visual design.",
    }),
  },
}

const projects = [
  {
    id: 1,
    title: "Brand Guidelines",
    description:
      "A professional brand guidelines project focused on creating a consistent visual identity, including brand presentation, visual direction, typography, and design standards.",
    image: "/Brand Guidelines.png",
    category: "Branding",
    technologies: [
      "Brand Identity",
      "Brand Guidelines",
      "Visual Design",
    ],
    liveUrl: "https://www.behance.net/buttkainat",
    featured: true,
  },

  {
    id: 2,
    title: "Eds",
    description:
      "A creative visual design project demonstrating Kainat's approach to clean layouts, visual communication, and user-focused design principles.",
    image: "/Eds.png",
    category: "UI/UX Design",
    technologies: [
      "UI Design",
      "Visual Design",
      "User-Centered Design",
    ],
    liveUrl: "https://www.behance.net/buttkainat",
    featured: true,
  },

  {
    id: 3,
    title: "Faek",
    description:
      "A modern digital design concept created with a focus on clear visual hierarchy, engaging interface elements, and a polished user experience.",
    image: "/Faek.png",
    category: "UI/UX Design",
    technologies: [
      "UI Design",
      "UX Design",
      "Visual Design",
    ],
    liveUrl: "https://www.behance.net/buttkainat",
    featured: true,
  },

  {
    id: 4,
    title: "Golden Hire",
    description:
      "A professional branding and digital design concept designed to communicate a strong and consistent visual identity through modern design elements.",
    image: "/Golden Hire.png",
    category: "Branding",
    technologies: [
      "Brand Identity",
      "Graphic Design",
      "Visual Design",
    ],
    liveUrl: "https://www.behance.net/buttkainat",
    featured: true,
  },

  {
    id: 5,
    title: "Golf Web Design",
    description:
      "A web design project focused on creating a clean, engaging, and user-friendly interface with a strong visual structure and responsive web experience.",
    image: "/Golf Webdesign.png",
    category: "UI/UX Design",
    technologies: [
      "Web Design",
      "UI/UX Design",
      "Responsive Design",
    ],
    liveUrl: "https://www.behance.net/buttkainat",
    featured: true,
  },

  {
    id: 6,
    title: "IntrusionOps",
    description:
      "A digital interface design concept focused on usability, structured information architecture, clear navigation, and professional visual presentation.",
    image: "/IntrusionOps.png",
    category: "UI/UX Design",
    technologies: [
      "UX Design",
      "UI Design",
      "Information Architecture",
    ],
    liveUrl: "https://www.behance.net/buttkainat",
    featured: true,
  },

  {
    id: 7,
    title: "Portfolio Design",
    description:
      "A portfolio design project showcasing a clean and professional visual presentation with emphasis on layout, hierarchy, usability, and personal branding.",
    image: "/Portfolio 1.png",
    category: "UI/UX Design",
    technologies: [
      "Portfolio Design",
      "UI/UX Design",
      "Visual Design",
    ],
    liveUrl: "https://www.behance.net/buttkainat",
    featured: true,
  },

  {
    id: 8,
    title: "Digital Design Project",
    description:
      "A creative digital design project demonstrating visual communication, layout composition, and a user-focused approach to modern design.",
    image: "/Screenshot 2026-09-11 215021.png",
    category: "UI/UX Design",
    technologies: [
      "Digital Design",
      "UI Design",
      "Visual Design",
    ],
    liveUrl: "https://www.behance.net/buttkainat",
    featured: true,
  },

  {
    id: 9,
    title: "Social Media Post Design",
    description:
      "A social media design project created to deliver engaging marketing visuals with clear messaging, strong composition, and brand-aligned creative direction.",
    image: "/Social Media Post Design.png",
    category: "Social Media",
    technologies: [
      "Social Media Design",
      "Marketing Graphics",
      "Graphic Design",
    ],
    liveUrl: "https://www.behance.net/buttkainat",
    featured: true,
  },

  {
    id: 10,
    title: "Spent Mobile App",
    description:
      "A mobile app design concept focused on creating an intuitive user experience through clear user flows, organized screens, modern interface design, and usability-focused layouts.",
    image: "/Spent Mobile App.png",
    category: "UI/UX Design",
    technologies: [
      "Mobile App Design",
      "UX Design",
      "Wireframing",
      "Prototyping",
    ],
    liveUrl: "https://www.behance.net/buttkainat",
    featured: true,
  },
]

export default function PortfolioPage() {
  const categories = [
    "All",
    "UI/UX Design",
    "Branding",
    "Social Media",
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-12">

        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            My Portfolio
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of my professional design work including UX/UI
            design, web and mobile interfaces, branding, visual design,
            and social media graphics.
          </p>
        </section>

        {/* Project Categories */}
        <Tabs defaultValue="All" className="mb-12">

          {/* Responsive Tabs */}
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 max-w-2xl mx-auto h-auto gap-1 p-1">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="text-sm sm:text-base whitespace-nowrap px-2 sm:px-4 py-2"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                {projects
                  .filter(
                    (project) =>
                      category === "All" ||
                      project.category === category
                  )
                  .map((project) => (
                    <Card
                      key={project.id}
                      className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >

                      {/* Project Image */}
                      <div className="relative h-52">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />

                        {project.featured && (
                          <Badge className="absolute top-4 left-4">
                            Featured
                          </Badge>
                        )}
                      </div>

                      {/* Card Header */}
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="secondary">
                            {project.category}
                          </Badge>
                        </div>

                        <CardTitle className="text-xl leading-tight">
                          {project.title}
                        </CardTitle>
                      </CardHeader>

                      {/* Card Content */}
                      <CardContent>

                        <p className="text-muted-foreground mb-5 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-5">
                          {project.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        {/* View Work Button */}
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            className="w-full"
                            asChild
                          >
                            <Link
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="mr-2 h-3 w-3" />
                              View Work
                            </Link>
                          </Button>
                        </div>

                      </CardContent>
                    </Card>
                  ))}

              </div>
            </TabsContent>
          ))}

        </Tabs>

        {/* Call to Action */}
        <section className="text-center py-16">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">

              <h2 className="text-2xl font-bold mb-4">
                Interested in Working Together?
              </h2>

              <p className="text-muted-foreground mb-6">
                I'm always open to discussing new design opportunities,
                creative projects, and meaningful collaborations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">

                <Button size="lg" asChild>
                  <a href="mailto:buttknt@gmail.com">
                    Contact Me
                  </a>
                </Button>

                <Button size="lg" variant="outline" asChild>
                  <Link
                    href="https://www.linkedin.com/in/kainat-fatima-b6a931243/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </Link>
                </Button>

              </div>

            </CardContent>
          </Card>
        </section>

      </div>

      <Footer />
    </div>
  )
}

