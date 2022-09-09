import Image from 'next/image'

import { ButtonLink } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function Showcase() {
  return (
    <section
      id="showcase"
      className="relative overflow-hidden bg-amber-600 py-32"
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
      <Container className="relative">
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Blogs built with{' '}
            <span className="font-bold text-slate-900">
                Letterhive
            </span>{' '}
          </h2>
        </div>
        <ul className="mt-12 grid grid-cols-1 gap-16 sm:mt-16 md:grid-cols-2">
          <li className="group relative transition-all duration-200 hover:-translate-y-1">
            <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-xl border border-gray-200 shadow-sm">
              <img className="h-48 w-full object-cover object-top" src="https://ik.imagekit.io/zwcfsadeijm/hackletter.letterhive.com__nmXaKq6mP.png?ik-sdk-version=javascript-1.4.3&updatedAt=1662719289794" alt="Ayush" />
            </div>
            <div className="mt-3 flex items-start justify-between space-x-6">
              <div className="flex-1">
                <h3 className="text-base font-bold text-white">
                  Aravind Balla
                </h3>
                {/* <p className="mt-1 text-sm font-medium text-gray-500">Personal Blog</p> */}
              </div>
              <div className="shrink-0">
                <a target="_blank" rel="noopener" href="https://hackletter.letterhive.com/" className="flex items-center space-x-1 text-gray-900 opacity-0 transition-all duration-200 group-hover:opacity-100">
                  <span className="block text-base font-medium text-blue-800">hackletter.letterhive.com</span>
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.74967 3.33325C6.74967 2.91904 7.08546 2.58325 7.49967 2.58325H16.6663C17.0806 2.58325 17.4163 2.91904 17.4163 3.33325V12.4999C17.4163 12.9141 17.0806 13.2499 16.6663 13.2499C16.2521 13.2499 15.9163 12.9141 15.9163 12.4999V5.14391L3.86334 17.1969C3.57044 17.4898 3.09557 17.4898 2.80268 17.1969C2.50978 16.904 2.50978 16.4291 2.80268 16.1363L14.8557 4.08325H7.49967C7.08546 4.08325 6.74967 3.74747 6.74967 3.33325Z"></path>
                  </svg>
                  <span className="absolute inset-0" aria-hidden="true"></span>
                </a>
              </div>
            </div>
          </li>

          <li className="group relative transition-all duration-200 hover:-translate-y-1">
            <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-xl border border-gray-200 shadow-sm">
              <img className="h-48 w-full object-cover object-top" src="https://ik.imagekit.io/zwcfsadeijm/cognition_1_.letterhive_l0-NTPhX-?ik-sdk-version=javascript-1.4.3&updatedAt=1662719532712" alt="" />
            </div>
            <div className="mt-3 flex items-start justify-between space-x-6">
              <div className="flex-1">
                <h3 className="text-base font-bold text-white">
                  Vikra Vardhan
                </h3>
              </div>
              <div className="shrink-0">
                <a target="_blank" rel="noopener" href="https://cognition.letterhive.com/" className="flex items-center space-x-1 text-gray-900 opacity-0 transition-all duration-200 group-hover:opacity-100">
                  <span className="block text-base font-medium text-blue-800">cognition.letterhive.com</span>
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.74967 3.33325C6.74967 2.91904 7.08546 2.58325 7.49967 2.58325H16.6663C17.0806 2.58325 17.4163 2.91904 17.4163 3.33325V12.4999C17.4163 12.9141 17.0806 13.2499 16.6663 13.2499C16.2521 13.2499 15.9163 12.9141 15.9163 12.4999V5.14391L3.86334 17.1969C3.57044 17.4898 3.09557 17.4898 2.80268 17.1969C2.50978 16.904 2.50978 16.4291 2.80268 16.1363L14.8557 4.08325H7.49967C7.08546 4.08325 6.74967 3.74747 6.74967 3.33325Z"></path>
                  </svg>
                  <span className="absolute inset-0" aria-hidden="true"></span>
                </a>
              </div>
            </div>
          </li>

        </ul>
      </Container>
    </section>
  )
}


