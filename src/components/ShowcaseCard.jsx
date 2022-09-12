import { ExternalLinkIcon } from '@heroicons/react/outline'
import Image from 'next/image'

export function ShowcaseCard({ image_src, url, name, author }) {
  return (
    <li className="group relative transition-all duration-200 hover:-translate-y-1">
      <div className="relative aspect-video max-w-full overflow-hidden rounded-md border border-gray-200 shadow-md">
        <Image
          className=""
          src={image_src}
          alt={`Screenshot for ${name} newsletter`}
          layout="fill"
          unoptimized
        />
      </div>
      <div className="mt-3 flex items-start justify-between space-x-6">
        <div className="flex-1 text-sm md:text-base">
          <h3 className="text-base font-bold text-slate-900 md:text-lg">
            {name}
          </h3>
          <h3 className="text-[#616161]">{`By ${author}`}</h3>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={url}
            className="flex items-center space-x-1 text-slate-900"
          >
            <span className="relative block font-medium text-amber-500">
              {url.replace('https://', '')}
            </span>
            <ExternalLinkIcon className="h-3 w-3 text-amber-500 md:h-4 md:w-4" />
            <span className="absolute inset-0" aria-hidden="true"></span>
          </a>
        </div>
      </div>
    </li>
  )
}
