
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import I18nProvider from "../components/I18nProvider";
import './globals.css'
import '../styles/mobile.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="wrapper">
        <I18nProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </I18nProvider>
        <br />
        <br />
        <br />
        <br />
      </body>
    </html>
  )
}
