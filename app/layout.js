import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"]
});

export const metadata = {
  title: "MOMINTO: The Coffee Shop",
  description:
    "A warm and inviting coffee shop serving freshly brewed coffee, handcrafted beverages, and tasty treats. Perfect for relaxing, catching up with friends, or getting work done in a cozy atmosphere.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jost.className}>
        {children}
      </body>
    </html>
  );
}
