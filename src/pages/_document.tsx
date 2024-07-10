import Fonts from "@/config/fonts"
import { Head, Html, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en" dir="ltr">
      <Head>{Fonts["El Messiri"]}</Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
