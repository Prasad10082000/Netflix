import Footer from "./components/Footer";
import Headers from "./components/header/Headers";
import "./globals.css";
import { Mulish } from "next/font/google";

const mulish = Mulish({
  weight:['300','400','500','600','700','800','900'],
  display:'swap',
   subsets: ["latin"] });

export const metadata = {
  title: "Explore Movie App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <Headers />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
