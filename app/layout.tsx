
import localFont from 'next/font/local'

import "./globals.css"


const vazirFont = localFont({

  src : "./../public/Fonts/ttf/Vazirmatn-Medium.ttf",

})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)

{
  return (
    <html
      lang="fa"
      className={`${vazirFont.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
