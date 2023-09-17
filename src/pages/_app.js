import Layout from '@/components/Layout';
import LoginContextProvider from '@/context/UserContext';
import '@/styles/globals.css';
import { ThemeProvider } from '@material-tailwind/react';

export default function App({ Component, pageProps }) {
  return (
    <LoginContextProvider>
      <Layout>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </Layout>
    </LoginContextProvider>
  );
}
