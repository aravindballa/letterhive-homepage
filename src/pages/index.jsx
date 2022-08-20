import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { HowItWorks } from '@/components/HowItWorks'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Letterhive - A permanent archive for your email newsletter
        </title>
        <meta
          name="description"
          content="Preserve your email newsletters for your future subscribers. Don't just send and let them vanish."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        {/* <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Pricing />
        <Faqs /> */}
      </main>
      <Footer />
    </>
  )
}
