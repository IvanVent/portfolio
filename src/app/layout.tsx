
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import I18nProvider from "../components/I18nProvider";
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-50 text-gray-900 wrapper">
        <I18nProvider>
          <Navbar />
          <main className="min-h-screen p-6">{children}</main>
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
