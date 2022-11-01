import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { Features } from '@/components/Features'
import { Testimonials } from '@/components/Testimonials'
import { HowItWorks } from '@/components/HowItWorks'

export default function Home() {
  return (
    <>
      <Head>
        <title>Letterhive - A Blog for your Newsletter</title>
        <meta
          name="description"
          content="Turn your newsletter into a SEO friendly blog."
        />
      </Head>
      <Header />
      <main>
        <Hero newsletterPlatform="Email Octopus" />
        <HowItWorks />
        <Features />
        <CallToAction />
        {/* <Testimonials />
        <Pricing />
        <Faqs /> */}
      </main>
      <Footer />
    </>
  )
}
