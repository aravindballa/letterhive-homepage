import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works"
      className="relative overflow-hidden bg-amber-600 px-8 pt-20 pb-28 sm:py-32"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
        <Image
          src={backgroundImage}
          alt=""
          width={2347}
          height={1244}
          layout="fixed"
          unoptimized
        />
      </div>
      <Container className="relative text-center text-amber-50">
        <h2 id="how-it-works" className="font-display text-3xl font-bold">
          How it works
        </h2>
        <ul className="mx-auto mt-16 grid grid-cols-1 gap-x-8 gap-y-16 text-lg md:grid-cols-2 lg:grid-cols-8">
          <li className="group relative block text-left lg:col-span-2 lg:col-start-2">
            <span className="absolute -top-8 -left-6 bg-gradient-to-r from-white/40 to-white/10 bg-clip-text text-7xl font-bold text-transparent group-hover:bg-gradient-to-br">
              0
            </span>
            Create an account with us and get a{' '}
            <strong className="font-bold">
              unique Letterhive email address
            </strong>
            .
          </li>
          <li className="group relative block text-left lg:col-span-2">
            <span className="absolute -top-8 -left-6 bg-gradient-to-r from-white/40 to-white/10 bg-clip-text text-7xl font-bold text-transparent group-hover:bg-gradient-to-br">
              1
            </span>
            Add that Letterhive email{' '}
            <strong className="font-bold">as a subscriber</strong> to your
            newsletter.
          </li>
          <li className="group relative block text-left lg:col-span-2 lg:col-start-5">
            <span className="absolute -top-8 -left-6 bg-gradient-to-r from-white/40 to-white/10 bg-clip-text text-7xl font-bold text-transparent group-hover:bg-gradient-to-br">
              2
            </span>
            <strong className="font-bold">Customize</strong> the look of your
            website.
          </li>
          <li className="group relative block text-left lg:col-span-2">
            <span className="absolute -top-8 -left-6 bg-gradient-to-r from-white/40 to-transparent bg-clip-text text-7xl font-bold text-transparent group-hover:bg-gradient-to-br">
              3
            </span>
            Keep <i className="italic">sending emails</i> as you normally do.
          </li>
        </ul>
      </Container>
    </section>
  )
}
