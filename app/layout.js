import { Source_Code_Pro } from "next/font/google";
import "./globals.css";

const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
  weight: ["400", "700"], // Regular and bold
});

export const metadata = {
  title: "Van Nguyen Portfolio",
  description: "Showcasing tigers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sourceCodePro.variable} font-mono bg-white text-black`}>
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  );
}
