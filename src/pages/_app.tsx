import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Router } from "next/router"
import NProgress from "nprogress"
import "nprogress/nprogress.css"
import { useEffect } from "react"

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const handleStart = () => NProgress.start()
    const handleStop = () => NProgress.done()

    Router.events.on("routeChangeStart", handleStart)
    Router.events.on("routeChangeComplete", handleStop)
    Router.events.on("routeChangeError", handleStop)

    return () => {
      Router.events.off("routeChangeStart", handleStart)
      Router.events.off("routeChangeComplete", handleStop)
      Router.events.off("routeChangeError", handleStop)
    }
  }, [])

  return (
    <>
      <Component {...pageProps} />
    </>
  )
}
