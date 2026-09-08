import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ExternalLink } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Rida Nadeem's Portfolio - AI Copywriting & Content Strategy",
  description:
    "Explore Rida Nadeem's professional portfolio featuring AI-refined articles, research-based content, technical writing, blog writing, and content strategy.",
  keywords: [
    "Rida Nadeem portfolio",
    "AI Copywriter portfolio",
    "Content Strategist portfolio",
    "AI content refinement",
    "copywriting portfolio",
    "blog writing portfolio",
    "technical writing",
    "research writing",
    "SEO writing",
    "content strategy",
    "brand voice consistency",
    "precision editing",
    "ChatGPT workflows",
    "professional content writer",
    "bilingual writing",
  ],
  authors: [{ name: "Rida Nadeem" }],
  openGraph: {
    title: "Rida Nadeem's Portfolio - AI Copywriting & Content Strategy",
    description:
      "View Rida Nadeem's professional portfolio showcasing research-based articles, AI-refined content, technical writing, blog writing, and content strategy.",
    type: "website",
    url: "[https://storycup.vercel.app/portfolio](https://storycup.vercel.app/portfolio)",
    images: [
      {
        url: "/worldwideartical.jpg",
        width: 1200,
        height: 630,
        alt: "Rida Nadeem Content Writing Portfolio",
      },
    ],
    siteName: "Rida Nadeem Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rida Nadeem's Portfolio - AI Copywriting & Content Strategy",
    description:
      "Discover Rida Nadeem's portfolio showcasing AI-refined content, research-based articles, technical writing, and content strategy.",
    images: ["/worldwideartical.jpg"],
  },
  alternates: {
    canonical: "[https://storycup.vercel.app/portfolio](https://storycup.vercel.app/portfolio)",
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
      "@context": "[https://schema.org](https://schema.org)",
      "@type": "CreativeWork",
      name: "Rida Nadeem's Content Writing Portfolio",
      author: {
        "@type": "Person",
        name: "Rida Nadeem",
      },
      url: "[https://storycup.vercel.app/portfolio](https://storycup.vercel.app/portfolio)",
      description:
        "Rida Nadeem's portfolio showcases professional AI content refinement, copywriting, research-based articles, technical writing, blog writing, and content strategy.",
    }),
  },
}

const DRIVE_URL =
  "https://docs.google.com/document/d/1FbcouE93wC8tGStnsztjlSPYPE463xE3CtUJiGkSoBo/edit?usp=drivesdk"

const projects = [
  {
    id: 1,
    title: "Salesforce vs. HubSpot: For a Mid-to-Large Sales Organization",
    description:
      "A detailed comparison of Salesforce and HubSpot for mid-to-large sales organizations, covering scalability, customization, implementation, automation, integrations, reporting, artificial intelligence, pricing, and long-term business value.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80",
    category: "Blogs",
    technologies: ["Research Writing", "Technical Writing", "Content Strategy"],
    liveUrl: DRIVE_URL,
    featured: true,
  },

  {
    id: 2,
    title: "What Do Humanoid Robots Perform for Us in Modern Days?",
    description:
      "An informative article exploring the role of humanoid robots in modern life and the ways robotics technology is evolving to support people and industries.",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    category: "Blogs",
    technologies: ["Research", "Technology Writing", "Blog Writing"],
    liveUrl:
      "https://medium.com/cub3d/what-do-humanoid-robots-perform-for-us-in-modern-days-58011148b6b6",
    featured: true,
  },

  {
    id: 3,
    title: "Is an AI System Monitoring the Strait of Hormuz? What’s Happening There?",
    description:
      "A research-based article examining the use of artificial intelligence and monitoring technology in relation to the Strait of Hormuz and the developments surrounding the region.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    category: "Blogs",
    technologies: ["Research", "AI Writing", "Current Affairs"],
    liveUrl:
      "https://medium.com/@pencihub/is-an-ai-system-monitoring-the-strait-of-hormuz-whats-happening-there-35a52012a1b9",
    featured: true,
  },

  {
    id: 4,
    title: "With Bitcoin’s Fall, What Will Be the Next Significant Trend?",
    description:
      "An analytical article exploring Bitcoin's decline and discussing potential trends that could become significant in the evolving cryptocurrency and digital finance landscape.",
    image:
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=800&q=80",
    category: "Blogs",
    technologies: ["Research", "Finance Writing", "Analytical Writing"],
    liveUrl:
      "https://medium.com/cub3d/with-bitcoins-fall-what-will-be-the-next-significant-trend-a097eb572840",
    featured: true,
  },
];

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
            A collection of my professional writing work including research-based
            articles, AI-refined content, technical writing, blog writing, and
            content strategy created across diverse industries and topics.
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
            <TabsContent
              key={category}
              value={category}
            >
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
                      className="overflow-hidden hover:shadow-lg transition-shadow"
                    >

                      <div className="relative h-48">

                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />

                        {project.featured && (
                          <Badge className="absolute top-4 left-4">
                            Featured
                          </Badge>
                        )}

                      </div>

                      <CardHeader>

                        <div className="flex items-center justify-between">

                          <Badge variant="secondary">
                            {project.category}
                          </Badge>

                        </div>

                        <CardTitle className="text-xl">
                          {project.title}
                        </CardTitle>

                      </CardHeader>

                      <CardContent>

                        <p className="text-muted-foreground mb-4">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">

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

                        <div className="flex gap-2">

                          <Button
                            size="sm"
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
                  <a
                    href="mailto:virgo.rida24@gmail.com"
                  >
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