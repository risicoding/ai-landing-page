import "@/app/globals.css";
import Navbar from "./sections/hero/navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }: { children: Readonly<React.ReactNode> }) => {
  return (
    <html>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
