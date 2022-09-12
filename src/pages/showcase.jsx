import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Container } from '@/components/Container'
import { ShowcaseCard } from '@/components/ShowcaseCard'
import data from '@/data/showcase'

export default function Showcase() {
  return (
    <>
      <Head>
        <title>
          Showcase | Letterhive - A permanent home for your email newsletter
        </title>
        <meta
          name="description"
          content="Preserve your email newsletters for your future subscribers. Don't just send and let them vanish."
        />
      </Head>
      <Header />
      <main>
        <Container className="my-14 sm:my-16">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mt-6 text-3xl font-bold text-gray-900 md:text-5xl">
              Websites built with{' '}
              <span className="bg-gradient-to-br from-amber-500 to-yellow-500 bg-clip-text font-bold text-transparent">
                Letterhive
              </span>
              &nbsp;🍯{' '}
            </h2>
          </div>
          <ul className="mt-12 grid grid-cols-1 gap-16 sm:mt-16 md:grid-cols-2">
            {data.map((item) => {
              return <ShowcaseCard key={item.url} {...item} />
            })}
          </ul>
        </Container>
      </main>
      <Footer />
    </>
  )
}
