import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../../components/Layout';
import '../styles/globals.css';
import { RestProvider } from '../../context/context';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <RestProvider>
        <Layout title="Simple_soul">
          <Component {...pageProps} />
        </Layout>
      </RestProvider>
    </>
  );
}
