import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' // Import the CSS styles

function NProgressComponent() {
  const route = useRouter()

  useEffect(() => {
    NProgress.configure({ showSpinner: false })

    const nprogressStyles = `
      /* Change the color of nprogress bar */
      #nprogress .bar {
        background: #5F967C;
      }
    `
    NProgress.configure({ css: nprogressStyles })

    const handleStart = () => {
      NProgress.start()
    }

    const handleComplete = () => {
      NProgress.done()
    }

    route.events.on('routeChangeStart', handleStart)
    route.events.on('routeChangeComplete', handleComplete)
    route.events.on('routeChangeError', handleComplete)

    return () => {
      route.events.off('routeChangeStart', handleStart)
      route.events.off('routeChangeComplete', handleComplete)
      route.events.off('routeChangeError', handleComplete)
    }
  }, [])

  return null
}

export default NProgressComponent
