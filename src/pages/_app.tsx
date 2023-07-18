import '@/styles/globals.css';
import '@/styles/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import type { AppProps } from 'next/app';
import { AppProvider } from '../context/AppContext';
import Head from 'next/head';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </AppProvider>
  );
}

