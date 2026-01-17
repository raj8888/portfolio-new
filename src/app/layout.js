import ThemeRegistry from "@/context/ThemeRegistry";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // import Footer
import "./globals.css";

export const metadata = {
  title: "Rajvardhan Jadhav Portfolio",
  description: "Software Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Navbar />
          {children}
          <Footer /> {/* added footer here */}
        </ThemeRegistry>
      </body>
    </html>
  );
}
