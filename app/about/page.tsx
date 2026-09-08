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
  title: "About Ayesha Raouf - SEO Content Writer",
  description:
    "Learn about Ayesha Raouf, an SEO Content Writer with 2 years of experience specializing in SEO-friendly content, NLP, E-E-A-T, GEO, AEO, UX writing, guest posting, copywriting, blog writing, and LinkedIn profile optimization.",
  keywords: [
    "Ayesha Raouf",
    "SEO Content Writer",
    "SEO Writing",
    "SEO Friendly Content",
    "NLP",
    "E-E-A-T",
    "GEO",
    "AEO",
    "UX Writing",
    "Guest Posting",
    "LinkedIn Profile Optimization",
    "Copywriting",
    "Product Description",
    "Article Writing",
    "Blog Writing",
    "Grant Writing",
    "SEO Content Writing",
  ],
  authors: [{ name: "Ayesha Raouf" }],
  openGraph: {
    title: "About Ayesha Raouf - SEO Content Writer",
    description:
      "Discover Ayesha Raouf's experience in SEO content writing, research, NLP, E-E-A-T, GEO, AEO, UX writing, guest posting, copywriting, and LinkedIn profile optimization.",
    type: "website",
    url: "https://storycup.vercel.app/about",
    images: [
      {
        url: "/aboutme.webp",
        width: 1200,
        height: 630,
        alt: "Ayesha Raouf - SEO Content Writer",
      },
    ],
    siteName: "Ayesha Raouf Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Ayesha Raouf - SEO Content Writer",
    description:
      "Learn about Ayesha Raouf's experience in SEO content writing, research, NLP, E-E-A-T, GEO, AEO, UX writing, and SEO-friendly content creation.",
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
      name: "Ayesha Raouf",
      jobTitle: "SEO Content Writer",
      url: "https://storycup.vercel.app/about",
      description:
        "Ayesha Raouf is an SEO Content Writer with 2 years of experience creating engaging, well-researched, search-friendly content and applying NLP, E-E-A-T, GEO, and AEO principles to improve content quality, visibility, and audience engagement.",
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
              alt="Ayesha Raouf"
              fill
              className="rounded-full border-4 border-primary/20"
            />
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            About Me
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm Ayesha Raouf, an SEO Content Writer with 2 years of experience
            creating engaging, well-researched, search-friendly content that
            helps businesses reach the right audience. I specialize in SEO
            content writing and applying NLP, E-E-A-T, GEO, and AEO principles
            to improve content quality, visibility, and audience engagement.
          </p>

          <DownloadResumeButton />
        </section>

        {/* Professional Journey */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Professional Journey
          </h2>

          <div className="space-y-8">

            {/* Freelance Content Writer */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>

                  <div>
                    <CardTitle>Freelance Content Writer</CardTitle>
                    <p className="text-muted-foreground">
                      Freelance • 2022 - 2024
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Over 2 years, I wrote SEO-friendly content across multiple
                  niches, creating engaging, well-researched, and
                  search-friendly content designed to help businesses reach
                  the right audience.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">SEO Content Writing</Badge>
                  <Badge variant="secondary">SEO Friendly Content</Badge>
                  <Badge variant="secondary">Research</Badge>
                  <Badge variant="secondary">Article Writing</Badge>
                  <Badge variant="secondary">Blog Writing</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Web Design & Development */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>

                  <div>
                    <CardTitle>Web Design & Development</CardTitle>
                    <p className="text-muted-foreground">
                      National College of Business Administration & Economics • 2017 - 2018
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Successfully completed a 720-hour Web Design & Development
                  practical training program under the Punjab Skills
                  Development Fund and secured 89% marks.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">Web Design</Badge>
                  <Badge variant="secondary">Web Development</Badge>
                  <Badge variant="secondary">Practical Training</Badge>
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

            {/* SEO & Content Writing */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  SEO & Content Writing
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">

                <div>
                  <div className="flex justify-between mb-2">
                    <span>SEO Content Writing</span>
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
                    <span>Article & Blog Writing</span>
                    <span>95%</span>
                  </div>
                  <Progress value={95} />
                </div>

              </CardContent>
            </Card>

            {/* SEO Strategy & Optimization */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  SEO Strategy & Optimization
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">

                <div>
                  <div className="flex justify-between mb-2">
                    <span>SEO</span>
                    <span>95%</span>
                  </div>
                  <Progress value={95} />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>LinkedIn Profile Optimization</span>
                    <span>90%</span>
                  </div>
                  <Progress value={90} />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Guest Posting</span>
                    <span>90%</span>
                  </div>
                  <Progress value={90} />
                </div>

              </CardContent>
            </Card>

            {/* Modern Content Principles */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Modern Content Principles
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">

                <div>
                  <div className="flex justify-between mb-2">
                    <span>NLP</span>
                    <span>90%</span>
                  </div>
                  <Progress value={90} />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>E-E-A-T</span>
                    <span>90%</span>
                  </div>
                  <Progress value={90} />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>GEO & AEO</span>
                    <span>90%</span>
                  </div>
                  <Progress value={90} />
                </div>

              </CardContent>
            </Card>

          </div>

          {/* Additional Skills */}
          <div className="flex flex-wrap gap-2 justify-center mt-8">
            <Badge variant="secondary">SEO Content Writer</Badge>
            <Badge variant="secondary">UX Writing</Badge>
            <Badge variant="secondary">Guest Posting</Badge>
            <Badge variant="secondary">LinkedIn Profile Optimization</Badge>
            <Badge variant="secondary">Copywriting</Badge>
            <Badge variant="secondary">Product Description</Badge>
            <Badge variant="secondary">Article Writing</Badge>
            <Badge variant="secondary">Blog Writing</Badge>
            <Badge variant="secondary">Grant Writing</Badge>
            <Badge variant="secondary">NLP</Badge>
            <Badge variant="secondary">E-E-A-T</Badge>
            <Badge variant="secondary">GEO</Badge>
            <Badge variant="secondary">AEO</Badge>
            <Badge variant="secondary">SEO Friendly Content Writing</Badge>
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Education & Certifications
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Bachelor's in Zoology */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>

                  <div>
                    <CardTitle>Bachelors of Zoology</CardTitle>
                    <p className="text-muted-foreground">
                      Bahauddin Zakariya University • 2015 - 2019
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Bachelors of Zoology from Bahauddin Zakariya University,
                  completed from 2015 to 2019.
                </p>
              </CardContent>
            </Card>

            {/* Bachelor's of Education */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>

                  <div>
                    <CardTitle>Bachelors of Education</CardTitle>
                    <p className="text-muted-foreground">
                      Allama Iqbal Open University, Islamabad • 2019 - 2021
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Bachelors of Education from Allama Iqbal Open University,
                  Islamabad, completed from 2019 to 2021.
                </p>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>

                  <div>
                    <CardTitle>Certifications</CardTitle>
                    <p className="text-muted-foreground">
                      Professional Courses & Certifications
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-2 text-muted-foreground">
                  <p>• Freelancing Course - DigiSkills.pk</p>
                  <p>• Web Design & Development Course - 2017 to 2018</p>
                  <p>• LinkedIn Profile Optimization Course</p>
                  <p>• SEO Content Writing</p>
                </div>
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
                      English & Urdu
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  English and Urdu.
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
                I am committed to delivering quality work while meeting
                deadlines. My approach combines engaging and well-researched
                content with SEO principles, NLP, E-E-A-T, GEO, and AEO to
                improve content quality, visibility, and audience engagement.
              </p>
            </CardContent>
          </Card>
        </section>

      </div>

      <Footer />
    </div>
  )
}