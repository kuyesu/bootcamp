"use client";
import { SessionProvider } from "next-auth/react";


export default function IntroLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      {children} {/* <Component {...pageProps} /> */}
    </SessionProvider>
  );
}
