import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Aisha Raouf- Best Content Writer in Lahore, Pakistan",
  description:
    "Contact Aisha Raouffor top content writing services in Lahore, Pakistan, SEO content, and copywriting via WhatsApp or email.",
  keywords: [
    "content writer Karachi contact number",
    "content writer Karachi contact number WhatsApp",
    "best content writer Karachi contact number",
    "best content writing services",
    "content writing services in Lahore, Pakistan",
    "article writing services in Lahore, Pakistan",
    "content writing agency",
    "best SEO content writer in Lahore, Pakistan",
    "freelance content writer",
    "SEO copywriting",
    "blog writing services",
    "professional content writing services",
    "content writing in Dubai",
    "best copywriter in USA",
    "freelance copywriter Australia",
    "real estate content writer",
    "marketing content writer",
    "web content writer",
    "content writer rates per word",
    "freelance content writer near me",
  ],
  authors: [{ name: "Aisha Raouf" }],
  openGraph: {
    title: "Contact Aisha Raouf- Best Content Writer in Lahore, Pakistan",
    description:
      "Reach Aisha Raouffor expert content writing services, SEO content, and copywriting in Lahore, Pakistan via WhatsApp or email.",
    type: "website",
    url: "https://yourwebsite.com/contact",
    images: [
      {
        url: "/contact-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Aisha Raouffor Content Writing Services",
      },
    ],
    siteName: "Aisha RaoufPortfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Aisha Raouf- Content Writing Services",
    description:
      "Get in touch with Aisha Raouffor SEO content, blog writing, and copywriting services in Lahore, Pakistan, USA, and Dubai.",
    images: ["/contact-og-image.jpg"],
  },
  alternates: {
    canonical: "https://yourwebsite.com/contact",
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
      name: "Aisha Raouf",
      jobTitle: "Content Writer & SEO Copywriter",
      url: "https://yourwebsite.com/contact",
      sameAs: [
        "https://www.linkedin.com/in/Aisha Raouf",
        "https://twitter.com/Aisha Raouf",
        "https://wa.me/yourwhatsappnumber",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "yourphonenumber",
          contactType: "Customer Service",
          areaServed: ["Lahore, Pakistan", "Karachi", "USA", "Dubai", "Australia", "UK"],
          availableLanguage: ["English"],
        },
        {
          "@type": "ContactPoint",
          contactType: "Customer Service",
          url: "https://wa.me/yourwhatsappnumber",
          contactOption: "WhatsApp",
          areaServed: ["Lahore, Pakistan", "Karachi"],
        },
      ],
      description:
        "Contact Aisha Raouf, a top content writer in Lahore, Pakistan, for professional content writing services, including SEO content, blog writing, and copywriting, via WhatsApp or email.",
    }),
  },
}
