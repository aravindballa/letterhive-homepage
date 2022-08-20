import {
  LightningBoltIcon,
  LockClosedIcon,
  SwitchHorizontalIcon,
  InboxInIcon,
} from '@heroicons/react/outline'

import { Container } from '@/components/Container'

const features = [
  {
    name: 'Password protected archive',
    description: `Let your premium members, or subscribers have a look at the complete archive.`,
    icon: (
      <LockClosedIcon className="h-8 w-8 rounded-full bg-amber-200 stroke-amber-800 p-2" />
    ),
  },
  {
    name: 'Fully SEO optimized',
    description: `What’s stopping your newsletter from becoming a blog? You get a SEO friendly website with accurate metadata along with RSS and sitemaps.`,
    icon: (
      <LightningBoltIcon className="h-8 w-8 rounded-full bg-amber-200 stroke-amber-800 p-2" />
    ),
  },
  {
    name: 'Switch newsletter service without hassle',
    description: `Maybe you want to switch from Substack to Convertkit for more power. Don’t let the fear loosing your archive stop you.`,
    icon: (
      <SwitchHorizontalIcon className="h-8 w-8 rounded-full bg-amber-200 stroke-amber-800 p-2" />
    ),
  },
  {
    name: 'Import already sent newsletters',
    description: `Chances are you already started your newsletter and sent a few emails.<br/>If you are using one of the supported services for import (Substack, Buttondown, Email Octopus, Revue, and more coming soon), you can get your past emails into the archive.`,
    icon: (
      <InboxInIcon className="h-8 w-8 rounded-full bg-amber-200 stroke-amber-800 p-2" />
    ),
  },
]

export function Features() {
  return (
    <section
      id="features"
      aria-labelledby="newsletter-deserves"
      className="pt-20 pb-14 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2
            id="newsletter-deserves"
            className="font-display text-3xl font-bold text-slate-900 sm:text-4xl"
          >
            Your newsletter deserves it.
          </h2>
          <p className="mt-4 text-lg tracking-tight">
            Maximize the returns on the time you’ve spent to write the
            newsletters by keeping them around forever.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
          {features.map(({ name, description, icon }) => (
            <div className="p-4" key={name}>
              {icon}
              <h3 className="mt-4 text-lg font-bold text-slate-900">{name}</h3>
              <p
                className="mt-4"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
