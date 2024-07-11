'use client'
import RootLayout from './layout';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';

function MyApp({ Component, pageProps }) {
  const [layoutType, setLayoutType] = useState('user');
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const layout = searchParams.get('layout');
    if (layout) {
      setLayoutType(layout);
      console.log('logged')
    } else {
      setLayoutType('user');
    }
  }, [searchParams]);

  return (
    <RootLayout layoutType={layoutType}>
      {/* <Component {...pageProps} /> */}
    </RootLayout>
  );
}

export default MyApp;
