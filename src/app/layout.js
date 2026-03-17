import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "El-Waleed Business Finance Consultants",
  description: "El-Waleed Business Finance Consultants offers expert services in funding & investment, accounting & auditing, company formation, tax preparation & consulting, HR, marketing, and more. Empowering businesses with tailored financial solutions for growth and success",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
