import localFont from "next/font/local";
import Script from "next/script";

import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

const vazirFont = localFont({
  src: "../public/Fonts/ttf/Vazirmatn-Medium.ttf",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      className={`${vazirFont.className} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            (function () {
              try {
                var savedTheme = localStorage.getItem('theme');

                var isDark = savedTheme
                  ? savedTheme === 'dark'
                  : window.matchMedia(
                      '(prefers-color-scheme: dark)'
                    ).matches;

                document.documentElement.classList.toggle(
                  'dark',
                  isDark
                );
              } catch (e) {}
            })();
          `}
        </Script>
      </head>

      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <CartProvider>{children}</CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
