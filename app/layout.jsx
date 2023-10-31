import {poppins, ultra} from "./fonts.jsx"
import {cookie} from "./fonts.jsx"
import {lora} from "./fonts.jsx"
import {sourcesans3} from "./fonts.jsx"
import {inter} from "./fonts.jsx"
import {barlow} from "./fonts.jsx"
import {pacifico} from "./fonts.jsx"
import {lato} from "./fonts.jsx"
import Header from './components/Header'
import './globals.css'
import './about.css'
import './contact.css'
import './resources.css'
import './give.css'
import Footer from "./components/Footer.jsx";

export const metadata = {
  title: 'The Fortress Church',
  description: 'Bringing Divinity to Humanity',
  keywords: 'church, Ilupeju, fellowship, Desmond Oladimeji, APostle Desmond Oladimeji, Fortress Church'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${cookie.variable} ${inter.variable} ${lora.variable} ${sourcesans3.variable} ${barlow.variable} ${ultra.variable} ${lato.variable}` }>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
