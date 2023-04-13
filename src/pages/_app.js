import InappLayout from '@/components/app_layout'
import '@/styles/globals.css'
import "@/styles/navbar.css"

export default function App({ Component, pageProps }) {
  const renderWIthLayout = Component.getLayout || function (page) {
    return <InappLayout>{page}</InappLayout>
  }
  return renderWIthLayout(<Component {...pageProps} />)
}
