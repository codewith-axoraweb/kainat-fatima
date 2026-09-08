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
  title: "About Rida Nadeem - AI Copywriter & Content Strategist",
  description:
    "Learn about Rida Nadeem, an AI Copywriter and Content Strategist specializing in AI content refinement, high-volume copywriting, precision editing, technical writing, content strategy, research, SEO writing, and multi-genre expertise.",
  keywords: [
    "Rida Nadeem",
    "AI Copywriter",
    "Content Strategist",
    "AI Content Refinement",
    "ChatGPT Workflows",
    "High-Volume Copywriting",
    "Brand Voice Consistency",
    "Precision Editing",
    "Technical Writing",
    "News & Narrative Writing",
    "Content Strategy",
    "Research & Analysis",
    "SEO Writing",
    "Academic Writing",
    "Philosophical Writing",
    "Case Study Development",
    "Evidence-Based Writing",
    "Bilingual Writing",
  ],
  authors: [{ name: "Rida Nadeem" }],
  openGraph: {
    title: "About Rida Nadeem - AI Copywriter & Content Strategist",
    description:
      "Discover Rida Nadeem's professional experience in AI content refinement, copywriting, content strategy, research, editing, technical writing, and SEO writing.",
    type: "website",
    url: "[https://storycup.vercel.app/about](https://storycup.vercel.app/about)",
    images: [
      {
        url: "/aboutme.webp",
        width: 1200,
        height: 630,
        alt: "Rida Nadeem - AI Copywriter and Content Strategist",
      },
    ],
    siteName: "Rida Nadeem Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Rida Nadeem - AI Copywriter",
    description:
      "Learn about Rida Nadeem's experience in AI content refinement, copywriting, content strategy, research, editing, and SEO writing.",
    images: ["/aboutme.webp"],
  },
  alternates: {
    canonical: "[https://storycup.vercel.app/about](https://storycup.vercel.app/about)",
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
      "@type": "Person",
      name: "Rida Nadeem",
      jobTitle: "AI Copywriter | Content Strategist",
      url: "[https://storycup.vercel.app/about](https://storycup.vercel.app/about)",
      description:
        "Rida Nadeem is an AI Copywriter and Content Strategist specializing in AI content refinement, high-volume copywriting, precision editing, content strategy, research, technical writing, and SEO writing.",
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
              src="/about.png"
              alt="Rida Nadeem"
              fill
              className="rounded-full border-4 border-primary/20"
            />
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            About Me
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm Rida Nadeem, an AI Copywriter and Content Strategist with a
            Computer Science background and professional experience in AI
            content refinement, high-volume copywriting, precision editing,
            content strategy, research, technical writing, and SEO writing.
          </p>

          <DownloadResumeButton />
        </section>

        {/* Professional Journey */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Professional Journey
          </h2>

          <div className="space-y-8">

            {/* Content Manager */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>

                  <div>
                    <CardTitle>Content Manager</CardTitle>
                    <p className="text-muted-foreground">
                      B&S Venture.org (UK-Based) • 03/2024 - 05/2026
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Transformed AI-generated drafts into publication-ready
                  eBooks and content, maintained brand voice consistency,
                  designed books in branded templates, and developed content
                  strategies through research and collaboration with editors.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">AI Content Refinement</Badge>
                  <Badge variant="secondary">eBook Writing</Badge>
                  <Badge variant="secondary">Content Strategy</Badge>
                  <Badge variant="secondary">Brand Voice Consistency</Badge>
                  <Badge variant="secondary">Research & Analysis</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Content Writer - Snexus */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>

                  <div>
                    <CardTitle>Content Writer</CardTitle>
                    <p className="text-muted-foreground">
                      Snexus Pvt Ltd • 11/2022 - 02/2024
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Produced blog posts and web content, managed content
                  calendars across marketing campaigns, and maintained
                  editorial precision through deep-dive research and
                  fact-checking.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">Blog Writing</Badge>
                  <Badge variant="secondary">Web Content</Badge>
                  <Badge variant="secondary">Content Calendars</Badge>
                  <Badge variant="secondary">Research</Badge>
                  <Badge variant="secondary">Fact-Checking</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Content Writer - Upwork */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>

                  <div>
                    <CardTitle>Content Writer</CardTitle>
                    <p className="text-muted-foreground">
                      Upwork (Freelance) • 04/2022 - 09/2022
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Delivered custom blog, article, and product copy for B2B and
                  B2C clients by understanding niche industries and tailoring
                  content voice to each brand's audience.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">Blog Writing</Badge>
                  <Badge variant="secondary">Article Writing</Badge>
                  <Badge variant="secondary">Product Copy</Badge>
                  <Badge variant="secondary">B2B Content</Badge>
                  <Badge variant="secondary">B2C Content</Badge>
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

            {/* AI & Content Writing */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  AI & Content Writing
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">

                <div>
                  <div className="flex justify-between mb-2">
                    <span>AI Content Refinement</span>
                    <span>95%</span>
                  </div>
                  <Progress value={95} />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Copywriting</span>
                    <span>95%</span>
                  </div>
                  <Progress value={95} />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Precision Editing</span>
                    <span>95%</span>
                  </div>
                  <Progress value={95} />
                </div>

              </CardContent>
            </Card>

            {/* Content Strategy & Research */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Content Strategy & Research
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Content Strategy</span>
                    <span>95%</span>
                  </div>
                  <Progress value={95} />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Research & Analysis</span>
                    <span>95%</span>
                  </div>
                  <Progress value={95} />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>SEO Writing</span>
                    <span>90%</span>
                  </div>
                  <Progress value={90} />
                </div>

              </CardContent>
            </Card>

            {/* Technical & Editorial Skills */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Technical & Editorial Skills
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Technical Writing</span>
                    <span>90%</span>
                  </div>
                  <Progress value={90} />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Brand Voice Consistency</span>
                    <span>95%</span>
                  </div>
                  <Progress value={95} />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Communication</span>
                    <span>95%</span>
                  </div>
                  <Progress value={95} />
                </div>

              </CardContent>
            </Card>

          </div>

          {/* Additional Skills */}
          <div className="flex flex-wrap gap-2 justify-center mt-8">
            <Badge variant="secondary">ChatGPT Workflows</Badge>
            <Badge variant="secondary">High-Volume Production</Badge>
            <Badge variant="secondary">Proofreading</Badge>
            <Badge variant="secondary">News & Narrative Writing</Badge>
            <Badge variant="secondary">Academic Writing</Badge>
            <Badge variant="secondary">Philosophical Writing</Badge>
            <Badge variant="secondary">Case Study Development</Badge>
            <Badge variant="secondary">Complex Topic Simplification</Badge>
            <Badge variant="secondary">Evidence-Based Writing</Badge>
            <Badge variant="secondary">Bilingual Writing</Badge>
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Education & Certifications
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Bachelor's */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>

                  <div>
                    <CardTitle>B.S. Computer Science</CardTitle>
                    <p className="text-muted-foreground">
                      COMSATS University, Lahore
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  B.S. Computer Science from COMSATS University, Lahore.
                  Technical background that enables understanding of technical
                  concepts and structured thinking.
                </p>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>

                  <div>
                    <CardTitle>Languages</CardTitle>
                    <p className="text-muted-foreground">
                      Urdu & English
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Urdu (Native/C2) and English (Fluent/C1), with exceptional
                  written and verbal communication skills.
                </p>
              </CardContent>
            </Card>

          </div>
        </section>

        {/* Personal Interests */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">
            Beyond the Page
          </h2>

          <Card>
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
                I focus on creating precise, polished, and meaningful content
                across diverse genres and industries. My work combines AI
                content refinement, research, editing, content strategy, and
                strong brand voice consistency to deliver publication-ready
                writing.
              </p>
            </CardContent>
          </Card>
        </section>

      </div>

      <Footer />
    </div>
  )
}