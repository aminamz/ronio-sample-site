import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import { yekan } from "./fonts";
import { ThemeProvider } from "./components/Theme-Provider";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Ronio",
  description: "Sample Ronio Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={yekan.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
