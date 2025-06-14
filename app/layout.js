import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import { ConvexClientProvider } from "../components/ConvexClientProvider";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Splitr",
  description: "The smartest way to split expenses with friends",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="../public/logos/logo-s.png" sizes="any" />
      </head>
      <body className={`${inter.className}  antialiased`}>
         <ClerkProvider
          publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
        >
          <ConvexClientProvider>
            <Header />
            <main className="min-h-screen">{children}</main>
          </ConvexClientProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
