import '../styles/globals.css';

import type { AppProps /*, AppContext */ } from 'next/app';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
