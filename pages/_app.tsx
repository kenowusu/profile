import '../styles/css/main.scss';
import type { AppProps } from 'next/app'
import { GA } from '../components/GA';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GA/>     
      <Component {...pageProps} />

    </>
  )
  
}

export default MyApp
