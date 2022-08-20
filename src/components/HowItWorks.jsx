import { Container } from '@/components/Container'

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works"
      className="relative overflow-hidden bg-gradient-to-br from-amber-500 via-amber-600 to-amber-500 pt-20 pb-28 sm:py-32"
    >
      <Container className="text-center text-amber-50">
        <h2 id="how-it-works" className="font-display text-3xl font-bold">
          How it works
        </h2>
        <ul className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-4">
          <li className="relative block text-left">
            <span className="absolute -top-8 -left-6 bg-gradient-to-r from-white/40 to-white/10 bg-clip-text text-7xl font-bold text-transparent">
              0
            </span>
            Create an account with us and get a{' '}
            <strong className="font-bold">
              unique Letterhive email address
            </strong>
            .
          </li>
          <li className="relative block text-left">
            <span className="absolute -top-8 -left-6 bg-gradient-to-r from-white/40 to-white/10 bg-clip-text text-7xl font-bold text-transparent">
              1
            </span>
            Add that Letterhive email{' '}
            <strong className="font-bold">as a subscriber</strong> to your
            newsletter.
          </li>
          <li className="relative block text-left">
            <span className="absolute -top-8 -left-6 bg-gradient-to-r from-white/40 to-white/10 bg-clip-text text-7xl font-bold text-transparent">
              2
            </span>
            <strong className="font-bold">Customize</strong> the look of your
            website.
          </li>
          <li className="relative block text-left">
            <span className="absolute -top-8 -left-6 bg-gradient-to-r from-white/40 to-transparent bg-clip-text text-7xl font-bold text-transparent">
              3
            </span>
            Keep <i className="italic">sending emails</i> as you normally do.
          </li>
        </ul>
      </Container>
    </section>
  )
}
