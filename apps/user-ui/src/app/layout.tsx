import "./global.css";
import { Poppins, Roboto } from "next/font/google";
import Providers from "./providers";
import ClientHeader from "./shared/widgets/header/ClientHeader";


export const metadata = {
  title: "SHOPLINK",
  description: "SHOPLINK",
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${poppins.variable}`}>
        <Providers>
          <ClientHeader /> {/* ✅ use client version of Header */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
