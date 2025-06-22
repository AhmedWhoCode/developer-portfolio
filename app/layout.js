import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Tehseen Ahmed - Software Developer",
  description:
    "Hi, I’m Tehseen – part iOS wizard, part data detective. By day, I design sleek, intuitive iOS apps using Swift, MVVM, and the magic of UI/UX. By night, I crunch numbers like a spreadsheet superhero, using Python, SQL, and a dash of Numpy to turn chaos into clean, insightful data. I’ve built apps that don’t just work—they wow. And I’ve dug deep into datasets big enough to scare most laptops.Armed with a Master’s in Big Data, a Kaggle and IBM certifications, and a few too many cups of coffee, I’m obsessed with crafting efficient, elegant solutions—whether that’s a predictive model or an app that even your gran could use. Always curious, a little caffeine-fuelled, and up for a challenge",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
