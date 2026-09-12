import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle, FileText, PenLine, Search, Newspaper, MessageCircle } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kainat Fatima's Services - UX/UI Design Services",
  description:
    "Explore Kainat Fatima's UX/UI design services including user-centered design, wireframing, prototyping, user research, visual design, design systems, and social media design.",
  keywords: [
    "Kainat Fatima",
    "UX/UI Designer",
    "UI UX Design Services",
    "User-Centered Design",
    "Wireframing",
    "Prototyping",
    "User Research",
    "Usability Testing",
    "Information Architecture",
    "Interaction Design",
    "Visual Design",
    "Accessibility Design",
    "Design Systems",
    "Figma Designer",
    "Social Media Design",
    "Logo Design",
    "Brand Guidelines",
    "Web UI Design",
    "Mobile UI Design",
    "Project Coordination",
  ],
  authors: [{ name: "Kainat Fatima" }],
  openGraph: {
    title: "Kainat Fatima's Services - UX/UI Design Services",
    description:
      "Kainat Fatima provides UX/UI design services including user research, wireframing, prototyping, visual design, design systems, web and mobile UI, and social media design.",
    type: "website",
    url: "https://storycup.vercel.app/services",
    images: [
      {
        url: "/services-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kainat Fatima - UX/UI Designer",
      },
    ],
    siteName: "Kainat Fatima Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kainat Fatima's Services - UX/UI Design",
    description:
      "Explore Kainat Fatima's professional UX/UI design services for web and mobile platforms.",
    images: ["/services-og-image.jpg"],
  },
  alternates: {
    canonical: "https://storycup.vercel.app/services",
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
      "@type": "Service",
      serviceType: "UX/UI Design",
      provider: {
        "@type": "Person",
        name: "Kainat Fatima",
      },
      url: "https://storycup.vercel.app/services",
      sameAs: [
        "https://www.linkedin.com/in/kainat-fatima-b6a931243/",
        "https://www.behance.net/buttkainat",
      ],
      description:
        "Kainat Fatima provides UX/UI design services specializing in user-centered design, user research, wireframing, prototyping, interaction design, visual design, accessibility, and design systems.",
      areaServed: [
        "Pakistan",
        "USA",
        "Dubai",
        "Australia",
        "UK",
      ],
    }),
  },
};

const services = [
  {
    icon: FileText,
    title: "UI/UX Design",
    description: "Clean, engaging, and user-friendly interface designs for web and mobile platforms.",
    features: [
      "User-Centered Design",
      "Web & Mobile UI",
      "Interaction Design",
      "Visual Design",
    ],
    price: "Custom Quote",
  },
  {
    icon: PenLine,
    title: "Wireframing & Prototyping",
    description: "Clear user flows, wireframes, and interactive prototypes designed to improve usability.",
    features: [
      "User Flows",
      "Wireframing",
      "High-Fidelity Prototypes",
      "Interactive Prototyping",
    ],
    price: "Custom Quote",
  },
  {
    icon: Newspaper,
    title: "User Research & Testing",
    description: "Research and usability testing to understand user needs, pain points, and behavioral patterns.",
    features: [
      "User Research",
      "Usability Testing",
      "User Pain Points",
      "Behavioral Patterns",
    ],
    price: "Custom Quote",
  },
  {
    icon: Search,
    title: "Design Systems & Visual Design",
    description: "Consistent and scalable design systems with accessibility-focused visual experiences.",
    features: [
      "Design Systems",
      "Style Guides",
      "Accessibility",
      "Inclusive Design",
    ],
    price: "Custom Quote",
  },
]

const packages = [
  {
    name: "Starter",
    price: "$10",
    description: "Perfect for startups and personal brands",
    features: [
      "3 blog posts (up to 1,000 words)",
      "1 landing page",
      "SEO keyword integration",
      "Basic content calendar",
      "Email support",
    ],
    popular: false,
    discount: "25% OFF",

  },
  {
    name: "Professional",
    price: "$50",
    description: "Ideal for growing businesses and agencies",
    features: [
      "6 blog posts (up to 1,200 words)",
      "3 pages of website copy",
      "Advanced SEO strategy",
      "Monthly content calendar",
      "Priority support",
    ],
    popular: true,
    discount: "30% OFF",
  },
  {
    name: "Enterprise",
    price: "Custom Quote",
    description: "For brands with large-scale content needs",
    features: [
      "Custom blog volume",
      "Sales copy & campaigns",
      "Full SEO & content audit",
      "Custom strategy & reports",
      "Dedicated account support",
    ],
    popular: false,
    discount: "0% OFF",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-12">

        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            UX/UI Design Services
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            User-centered design solutions that create engaging, accessible,
            and user-friendly experiences for web and mobile platforms.
          </p>
        </section>

        {/* Services Grid */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            What I Offer
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon

              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-blue" />
                      </div>

                      <div>
                        <CardTitle className="text-xl">
                          {service.title}
                        </CardTitle>

                        <Badge variant="secondary">
                          {service.price}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>

                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center gap-2"
                        >
                          <CheckCircle className="h-4 w-4 text-green-500" />

                          <span className="text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Pricing Packages */}



        {/* Process */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            My Process
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Research",
                description: "Understanding user needs, pain points, and behavioral patterns",
              },
              {
                step: "02",
                title: "Planning",
                description: "Creating user flows, information architecture, and design direction",
              },
              {
                step: "03",
                title: "Design",
                description: "Creating wireframes, prototypes, and polished visual interfaces",
              },
              {
                step: "04",
                title: "Collaboration",
                description: "Working with teams and stakeholders to refine and deliver design solutions",
              },
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary text-blue-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {item.step}
                  </div>

                  <h3 className="font-semibold text-lg mb-2">
                    {item.title}
                  </h3>

                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "What type of design projects do you work on?",
                answer:
                  "I work on web and mobile UI/UX projects, focusing on creating clean, engaging, and user-friendly digital experiences.",
              },
              {
                question: "What UX/UI design services do you provide?",
                answer:
                  "My services include user-centered design, user research, usability testing, user flows, wireframing, high-fidelity prototyping, interaction design, visual design, and design systems.",
              },
              {
                question: "Which design tools do you use?",
                answer:
                  "I work with Figma, Illustrator, Canva, InDesign, and Sketch.",
              },
              {
                question: "Do you also work on branding and social media designs?",
                answer:
                  "Yes. My experience includes logo design, brand guideline materials, social media posts, marketing graphics, visual templates, and motion content.",
              },
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">
                    {faq.question}
                  </h3>

                  <p className="text-muted-foreground">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <MessageCircle className="h-12 w-12 text-blue mx-auto mb-4" />

              <h2 className="text-2xl font-bold mb-4">
                Ready to Create a Better User Experience?
              </h2>

              <p className="text-muted-foreground mb-6">
                Let's discuss your design needs and create engaging,
                user-friendly digital experiences for your users.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a
                    href="mailto:buttknt@gmail.com?subject=UX/UI Design Project"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Free Quote
                  </a>
                </Button>

                <Button size="lg" variant="outline" asChild>
                  <Link href="/portfolio">
                    View Design Portfolio
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