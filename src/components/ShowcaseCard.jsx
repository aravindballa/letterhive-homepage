import { ExternalLinkIcon } from '@heroicons/react/outline'
import Image from 'next/image'

export function ShowcaseCard({ image_src, url, name, author }) {
  return (
    <li className="group relative transition-all duration-200 hover:-translate-y-1">
      <h3 className="pb-2 text-center text-xl font-bold text-slate-900">
        {name}
      </h3>
      <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-xl border border-gray-200 shadow-xl">
        <img
          className="h-full w-full object-cover object-top"
          src={image_src}
          alt={`Screenshot for ${name} newsletter`}
        />
      </div>
      <div className="mt-3 flex items-start justify-between space-x-6">
        <div className="flex-1 text-sm font-bold md:text-base">
          <h3 className="text-[#616161]">{`By ${author}`}</h3>
          <a
            target="_blank"
            rel="noopener"
            href={url}
            className="flex items-center space-x-1 text-slate-900"
          >
            <span className="relative block bg-gradient-to-br from-amber-500 to-yellow-500 bg-clip-text font-medium text-transparent">
              {url.replace('https://', '')}
            </span>
            <ExternalLinkIcon className="h-3 w-3 text-yellow-500 md:h-4 md:w-4" />
            <span className="absolute inset-0" aria-hidden="true"></span>
          </a>
        </div>
      </div>
    </li>
  )
}
