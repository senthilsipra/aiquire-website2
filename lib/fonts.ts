import { DM_Sans, JetBrains_Mono, Bricolage_Grotesque } from "next/font/google";

export const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500"],
});

// Bricolage Grotesque — distinctive, authoritative, modern
// Similar character to Cabinet Grotesk/Satoshi; available on Google Fonts
export const cabinetGrotesk = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-cabinet",
  display: "swap",
  weight: ["400", "500", "700", "800"],
});
