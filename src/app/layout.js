import Footer from "@/components/footer";
import Matomo from "@/components/matomo";
import localFont from "next/font/local";
import "./globals.css";
import "/public/style.css";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Jarvis, inovativní nakupování bez omezení",
  description:
    "Inovativní nakupování bez omezení. Maximální komfort a pohodlí při každém nákupu. Moderní technologie, inteligentní pokladny a samoobslužný přístup přináší zákazníkům nákup během několika minut.",
  keywords: [
    "JARVIS Shop",
    "Jarvis",
    "farmářské výrobky",
    "čerstvé potraviny",
    "Mělnické Vtelno obchod",
    "moderní prodejna",
    "udržitelné nakupování",
    "samoobslužný nákup",
    "prodejna budoucnosti",
    "otevřeno 24/7",
    "podpora místních farmářů",
    "ekologický obchod",
    "solární energie v retailu",
    "inteligentní pokladny",
    "rychlý nákup bez čekání",
    "samoobslužné technologie",
    "modulární design prodejen",
    "Mělnické Vtelno samoobsluha",
    "Radouň bezobslužný obchod",
    "Chorušická 111 prodejna",
    "obchod v Kropáčově Vrutici",
    "lokální obchod Mělník",
    "čerstvé pečivo Mělník",
    "regionální uzeniny",
    "mléčné výrobky Chorušice",
    "místní výrobky",
    "čerstvé maso",
    "samoobslužná prodejna",
    "nonstop obchod",
    "lokální produkty",
    "inovativní nakupování",
    "bezobslužný obchod",
    "čerstvé potraviny",
    "Mělnické Vtelno obchod",
    "moderní prodejna",
    "udržitelné nakupování",
    "samoobslužný nákup",
    "prodejna budoucnosti",
    "otevřeno 24/7",
    "podpora místních farmářů",
    "ekologický obchod",
    "solární energie v retailu",
    "inteligentní pokladny",
    "rychlý nákup bez čekání",
    "samoobslužné technologie",
    "modulární design prodejen",
    "Mělnické Vtelno samoobsluha",
    "Radouň bezobslužný obchod",
    "Chorušická 111 prodejna",
    "obchod v Kropáčově Vrutici",
    "lokální obchod Mělník",
    "čerstvé pečivo Mělník",
    "regionální uzeniny",
    "mléčné výrobky Chorušice",
    "zázvorové produkty",
    "vitální houby prodej",
    "rychlý nákup bez obsluhy",
    "pohodlné nakupování",
    "inovativní nákupní zážitek",
    "bezpečná platba kartou",
    "samoobslužné pokladny",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="cs" className="scroll-smooth">
      <body className="normalniText-300 max-w-4xl mx-auto text-gray-800">
        {children}
        <Footer />
        <Matomo />
      </body>
    </html>
  );
}
