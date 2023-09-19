import { Inter, Poppins, Lora, Source_Sans_3, Cookie, Barlow_Semi_Condensed, Pacifico, Ultra } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "800"],
  variable: '--font-poppins',
});

const sourcesans3 = Source_Sans_3({
  subsets: ["latin"],
  variable: '--font-sourcesans3'
});

const cookie = Cookie({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-cookie",
});
const barlow = Barlow_Semi_Condensed({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-barlow",
});

const ultra = Ultra({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-ultra",
});

export { inter, lora, sourcesans3, poppins, cookie, barlow, ultra};
