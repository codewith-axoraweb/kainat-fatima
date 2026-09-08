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
  title: "Aisha Raouf's Portfolio - AI Copywriting & Content Strategy",
  description:
    "Explore Aisha Raouf's professional portfolio featuring research-based articles, SEO writing, AI search content, lifestyle writing, technology writing, and content strategy.",
  keywords: [
    "Aisha Raouf portfolio",
    "AI Copywriter portfolio",
    "Content Strategist portfolio",
    "SEO writing",
    "AI search SEO",
    "blog writing portfolio",
    "research writing",
    "technical writing",
    "content strategy",
    "lifestyle writing",
    "technology writing",
    "skincare content",
    "smart home technology",
    "professional content writer",
  ],
  authors: [{ name: "Aisha Raouf" }],
  openGraph: {
    title: "Aisha Raouf's Portfolio - AI Copywriting & Content Strategy",
    description:
      "View Aisha Raouf's professional portfolio showcasing SEO writing, research-based articles, technology writing, lifestyle content, and content strategy.",
    type: "website",
    url: "https://storycup.vercel.app/portfolio",
    images: [
      {
        url: "/worldwideartical.jpg",
        width: 1200,
        height: 630,
        alt: "Aisha Raouf Content Writing Portfolio",
      },
    ],
    siteName: "Aisha Raouf Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aisha Raouf's Portfolio - AI Copywriting & Content Strategy",
    description:
      "Discover Aisha Raouf's portfolio showcasing SEO writing, research-based articles, technology writing, and content strategy.",
    images: ["/worldwideartical.jpg"],
  },
  alternates: {
    canonical: "https://storycup.vercel.app/portfolio",
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
      name: "Aisha Raouf's Content Writing Portfolio",
      author: {
        "@type": "Person",
        name: "Aisha Raouf",
      },
      url: "https://storycup.vercel.app/portfolio",
      description:
        "Aisha Raouf's portfolio showcases professional SEO writing, AI content, research-based articles, lifestyle writing, technology writing, and content strategy.",
    }),
  },
}

const projects = [
  {
    id: 1,
    title: "How to Do Hard Work When You Have Zero Motivation",
    description:
      "A practical guide explaining how to get things done when motivation is low. The article explores discipline, small actions, environment design, time blocking, progress tracking, and building consistent habits without waiting for motivation.",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",
    category: "Blogs",
    technologies: [
      "Self-Improvement Writing",
      "Research Writing",
      "Blog Writing",
    ],
    liveUrl:
      "https://docs.google.com/document/d/1nSp2m-_b7hkCZAHYVxQ_W3ekwOtVWe9N/edit",
    featured: true,
  },

  {
    id: 2,
    title: "How AI Search Is Changing SEO in 2026",
    description:
      "A comprehensive SEO article exploring how AI-powered search is changing the way people find information online, with practical strategies for search intent, conversational content, topical authority, natural language, trust, and AI search optimization.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    category: "Blogs",
    technologies: [
      "SEO Writing",
      "AI Content",
      "Research Writing",
      "Content Strategy",
    ],
    liveUrl:
      "https://docs.google.com/document/d/1XX1mkBpttSlYi8ms2wNWvuuXS3wdnW8ye8Zr-rFBiWc/edit?tab=t.0",
    featured: true,
  },

  {
    id: 3,
    title: "How to Choose the Right Skincare Routine for Your Skin Type",
    description:
      "An informative skincare guide explaining different skin types, how to identify your skin's needs, how to build a simple routine, choose suitable products, avoid common skincare mistakes, and maintain healthy and comfortable skin.",
    image:
      "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=1200&q=80",
    category: "Blogs",
    technologies: [
      "Lifestyle Writing",
      "Research Writing",
      "Health & Beauty Content",
    ],
    liveUrl:
      "https://docs.google.com/document/d/1BRCK13kP9cYiVKVBOzLymCqcnpj233Du/edit#heading=h.8egpw9vvi1bn",
    featured: true,
  },

  {
    id: 4,
    title: "The Ultimate Guide to Smart Home Technology for Every Homeowner",
    description:
      "A detailed technology guide explaining smart home systems, smart devices, home security, energy savings, automation, costs, device selection, safety, accessibility, and the future of smart home technology.",
    image:
      "https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&w=1200&q=80",
    category: "Blogs",
    technologies: [
      "Technology Writing",
      "Research Writing",
      "Technical Content",
      "Blog Writing",
    ],
    liveUrl:
      "https://docs.google.com/document/d/11DLfzt7kJmZJNdOz-rz3WYEXZLbS1P-wiOiDA0N7krI/edit?tab=t.0#heading=h.4dniz5hhcbol",
    featured: true,
  },
]

export default function PortfolioPage() {
  const categories = [
    "All",
    "Blogs",
    "Copywriting",
    "Company Profiles",
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
            A collection of my professional writing work including SEO content,
            research-based articles, AI search content, lifestyle writing,
            technology writing, and content strategy.
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
                I'm always open to discussing new opportunities and meaningful
                content projects.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">

                <Button size="lg" asChild>
                  <a href="mailto:aisharaouf230@gmail.com">
                    Contact Me
                  </a>
                </Button>

                <Button size="lg" variant="outline" asChild>
                  <Link href="/services">
                    View Services
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