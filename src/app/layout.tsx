import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-50 text-gray-900">
        <Navbar />
        <main className="min-h-screen p-6">{children}</main>
        <Footer />
        <br />
        <br />
        <br />
        <br />
      </body>
    </html>
  )
}
