import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import localFont from "next/font/local";
import "../globals.css";
import "/public/style.css";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <main>
      <Navigation />
      {children}
    </main>
  );
}