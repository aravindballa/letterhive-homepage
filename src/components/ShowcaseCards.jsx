import Image from 'next/image'

export function ShowcaseCards(props) {
  return (
    <li className="group relative transition-all duration-200 hover:-translate-y-1">
      <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-xl border border-gray-200 shadow-xl">
        <img
          className="h-full w-full object-cover object-top"
          src={props.src}
          alt={props.display_url}
        />
      </div>
      <div className="mt-3 flex items-start justify-between space-x-6">
        <div className="flex-1 text-sm md:text-base">
          <h3 className="font-bold text-gray-900">{props.author}</h3>
          <a
            target="_blank"
            rel="noopener"
            href={props.url}
            className="flex items-center space-x-1 text-slate-900"
          >
            <span className="relative block bg-gradient-to-br from-amber-500 to-yellow-500 bg-clip-text font-medium text-transparent">
              {props.display_url}
            </span>
            <svg
              className="h-3 w-3"
              viewBox="0 0 20 20"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.74967 3.33325C6.74967 2.91904 7.08546 2.58325 7.49967 2.58325H16.6663C17.0806 2.58325 17.4163 2.91904 17.4163 3.33325V12.4999C17.4163 12.9141 17.0806 13.2499 16.6663 13.2499C16.2521 13.2499 15.9163 12.9141 15.9163 12.4999V5.14391L3.86334 17.1969C3.57044 17.4898 3.09557 17.4898 2.80268 17.1969C2.50978 16.904 2.50978 16.4291 2.80268 16.1363L14.8557 4.08325H7.49967C7.08546 4.08325 6.74967 3.74747 6.74967 3.33325Z"
              >
              </path>
            </svg>
            <span className="absolute inset-0" aria-hidden="true"></span>
          </a>
        </div>
      </div>
    </li>
  )
}
