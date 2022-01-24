import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Fold from '../components/Fold'

function MyApp({ Component, pageProps }: AppProps) {
  return <Fold><Component {...pageProps} /></Fold>
}

export default MyApp
