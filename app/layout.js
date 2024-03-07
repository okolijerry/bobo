import { Inter } from "next/font/google";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Main from "./Main";
import { ThemeProvider } from "./context/ThemeContext";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Okoli Jerry Neche",
  description: "Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <Main>
            <Navbar />
            {children}
            <Footer />
          </Main>
        </ThemeProvider>
      </body>
    </html>
  );
}
