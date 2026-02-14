import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useAuthStore } from '@/lib/stores/authStore';
import { useWebSocket } from '@/hooks/useWebSocket';

export default function App({ Component, pageProps }: AppProps) {
  const { initialize, user } = useAuthStore();
  useWebSocket(user?.id);

  useEffect(() => {
    initialize();
  }, [initialize]);

  return <Component {...pageProps} />;
}