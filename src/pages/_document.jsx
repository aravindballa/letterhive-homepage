import { Head, Html, Main, NextScript } from 'next/document'
import clsx from 'clsx'

export default function Document(props) {
  let pageProps = props.__NEXT_DATA__?.props?.pageProps

  return (
    <Html
      className="h-full scroll-smooth bg-white antialiased [font-feature-settings:'ss01']"
      lang="en"
    >
      <Head>
        <link rel="icon" href="https://fav.farm/🍯" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Josefin+Slab:wght@400;500;700&display=swap&family=Josefin+Sans:wght@500;700&display=swap"
        />
      </Head>
      <script
        async
        defer
        data-website-id="5b5f83bd-f66e-4ce2-ac72-e8ac73dc26c7"
        src="https://analytics.balla.dev/umami.js"
      ></script>
      <body className="flex h-full flex-col">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
