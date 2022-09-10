import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Container } from '@/components/Container'
import { ShowcaseCards } from '@/components/ShowcaseCards'
import data from '@/components/showcaseData'

export default function Showcase() {
  return (
    <>
      <Head>
        <title>Letterhive - A permanent home for your email newsletter</title>
        <meta
          name="description"
          content="Preserve your email newsletters for your future subscribers. Don't just send and let them vanish."
        />
      </Head>
      <Header />
      <main>
        <Container className="relative">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mt-6 text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
              Websites built with{' '}
              <span className="relative bg-gradient-to-br from-amber-500 to-yellow-500 bg-clip-text font-bold text-transparent">
                Letterhive
              </span>{' '}
            </h2>
          </div>
          <ul className="mt-12 grid grid-cols-1 gap-16 sm:mt-16 md:grid-cols-2">
            {data.blogs.map((item) => {
              return <ShowcaseCards key={item.url} {...item} />
            })}
          </ul>
        </Container>
      </main>
      <Footer />
    </>
  )
}
