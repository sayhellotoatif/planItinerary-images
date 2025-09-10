import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useAsyncError,
  useLocation,
  useRouteError,
} from 'react-router';

import { useButton } from '@react-aria/button';
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type FC,
  Component,
} from 'react';
import './global.css';

// @ts-ignore
import { SessionProvider } from '@auth/create/react';
import { useNavigate } from 'react-router';
import { serializeError } from 'serialize-error';
import { Toaster } from 'sonner';

// Conditionally import LoadFonts only in dev
let LoadFonts: FC | null = null;
if (import.meta.env.DEV) {
  // @ts-ignore
  LoadFonts = (await import('virtual:load-fonts.jsx')).LoadFonts;
}
import type { Route } from './+types/root';

// ... keep the rest of your code unchanged until Layout component

export function Layout({ children }: { children: ReactNode }) {
  useHandshakeParent();
  useCodeGen();
  useRefresh();
  useDevServerHeartbeat();
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location?.pathname;
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === 'sandbox:navigation') {
        navigate(event.data.pathname);
      }
    };
    window.addEventListener('message', handleMessage);
    window.parent.postMessage({ type: 'sandbox:web:ready' }, '*');
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [navigate]);

  useEffect(() => {
    if (pathname) {
      window.parent.postMessage(
        {
          type: 'sandbox:web:navigation',
          pathname,
        },
        '*'
      );
    }
  }, [pathname]);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <link rel="icon" href="/src/__create/favicon.png" />
        {LoadFonts && <LoadFonts />}
      </head>
      <body>
        <ClientOnly loader={() => children} />
        <HotReloadIndicator />
        <Toaster position="bottom-right" />
        <ScrollRestoration />
        <Scripts />
        <script src="https://kit.fontawesome.com/2c15cc0cc7.js" crossOrigin="anonymous" async />
      </body>
    </html>
  );
}